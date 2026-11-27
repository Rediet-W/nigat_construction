import "server-only";

export interface FormResult {
  ok: boolean;
  message: string;
}

export function field(data: FormData, name: string): string {
  const value = data.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export type DeliveryStatus = "sent" | "not_configured" | "failed";

type Delivery = (subject: string, text: string, payload: Record<string, string>) => Promise<void>;

async function post(url: string, body: unknown, headers: Record<string, string> = {}): Promise<void> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error(`${new URL(url).host} responded with ${response.status}`);
}

/**
 * Channels that receive website enquiries. Configure at least one in the
 * hosting environment (Vercel → Settings → Environment Variables), the same
 * way as on the NF Car Importer and Nigat Exports sites:
 *
 *   Telegram group  TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID
 *   Email (Resend)  RESEND_API_KEY + ENQUIRY_TO_EMAIL (+ optional ENQUIRY_FROM_EMAIL)
 *   Form service    ENQUIRY_WEBHOOK_URL (Formspree, Google Apps Script, CRM…; receives JSON)
 */
function configuredDeliveries(): Delivery[] {
  const env = process.env;
  const deliveries: Delivery[] = [];

  if (env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID) {
    const { TELEGRAM_BOT_TOKEN: token, TELEGRAM_CHAT_ID: chatId } = env;
    deliveries.push((_subject, text) =>
      post(`https://api.telegram.org/bot${token}/sendMessage`, { chat_id: chatId, text }),
    );
  }

  if (env.RESEND_API_KEY && env.ENQUIRY_TO_EMAIL) {
    const { RESEND_API_KEY: apiKey, ENQUIRY_TO_EMAIL: to, ENQUIRY_FROM_EMAIL: from } = env;
    deliveries.push((subject, text) =>
      post(
        "https://api.resend.com/emails",
        {
          from: from || "Website enquiry <onboarding@resend.dev>",
          to: to.split(",").map((address) => address.trim()),
          subject,
          text,
        },
        { Authorization: `Bearer ${apiKey}` },
      ),
    );
  }

  // FORM_WEBHOOK_URL is the variable name used before; still honoured.
  const webhook = env.ENQUIRY_WEBHOOK_URL || env.FORM_WEBHOOK_URL;
  if (webhook) {
    deliveries.push((subject, text, payload) =>
      post(webhook, { ...payload, subject, summary: text, submittedAt: new Date().toISOString() }),
    );
  }

  return deliveries;
}

/** Sends to every configured channel; succeeds when at least one accepts it. */
export async function deliver(subject: string, text: string, payload: Record<string, string>): Promise<DeliveryStatus> {
  const deliveries = configuredDeliveries();
  if (deliveries.length === 0) {
    console.error("[forms] No enquiry channel configured; see src/lib/forms.ts");
    return "not_configured";
  }

  const results = await Promise.allSettled(deliveries.map((send) => send(subject, text, payload)));
  results.forEach((result) => {
    if (result.status === "rejected") console.error("[forms] Delivery failed:", result.reason);
  });
  return results.some((result) => result.status === "fulfilled") ? "sent" : "failed";
}
