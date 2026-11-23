"use server";

import { getDictionary, getLocale } from "@/i18n/server";
import { CMS_SECTOR, cmsPost } from "@/lib/cms/client";
import { field, isEmail, type FormResult } from "@/lib/forms";

/** Contact / quote forms → an Enquiry in the CMS (staff read them in the admin panel). */
export async function submitContactForm(data: FormData): Promise<FormResult> {
  const [t, locale] = await Promise.all([getDictionary().then((d) => d.form), getLocale()]);
  const firstName = field(data, "fname");
  const lastName = field(data, "lname");
  const email = field(data, "email");
  const phone = field(data, "phone");
  const message = field(data, "message");

  // Server-side mirror of the client validation (never trust the browser).
  if (!firstName || !lastName || !phone || !isEmail(email)) {
    return { ok: false, message: t.requiredFields };
  }

  try {
    await cmsPost("enquiries", {
      sector: CMS_SECTOR,
      fullName: `${firstName} ${lastName}`.slice(0, 120),
      email,
      phone: phone.slice(0, 40),
      topic: "general",
      // The form doesn't require a message, but the CMS does.
      message: (message || "—").slice(0, 5000),
      locale,
    });
    return { ok: true, message: t.messageSent };
  } catch (error) {
    console.error("[forms] enquiry failed", error);
    return { ok: false, message: t.failed };
  }
}

/** Footer newsletter → a Newsletter Subscriber in the CMS (signing up twice is harmless). */
export async function subscribeNewsletter(data: FormData): Promise<FormResult> {
  const [t, locale] = await Promise.all([getDictionary().then((d) => d.form), getLocale()]);
  const email = field(data, "mail");
  if (!isEmail(email)) return { ok: false, message: t.invalidEmail };

  try {
    await cmsPost("subscribers", { sector: CMS_SECTOR, email, locale });
    return { ok: true, message: t.subscribed };
  } catch (error) {
    console.error("[forms] newsletter sign-up failed", error);
    return { ok: false, message: t.failed };
  }
}
