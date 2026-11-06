"use server";

import { deliver, field, isEmail, type FormResult } from "@/lib/forms";

export async function submitContactForm(data: FormData): Promise<FormResult> {
  const payload = {
    firstName: field(data, "fname"),
    lastName: field(data, "lname"),
    email: field(data, "email"),
    phone: field(data, "phone"),
    message: field(data, "message"),
  };

  // Server-side mirror of the client validation (never trust the browser).
  if (!payload.firstName || !payload.lastName || !payload.phone || !isEmail(payload.email)) {
    return { ok: false, message: "Please fill in all required fields with valid information." };
  }

  const result = await deliver("contact", payload);
  return result.ok ? { ok: true, message: "Message Sent Successfully!" } : result;
}

export async function subscribeNewsletter(data: FormData): Promise<FormResult> {
  const email = field(data, "mail");
  if (!isEmail(email)) return { ok: false, message: "Please enter a valid email address." };

  const result = await deliver("newsletter", { email });
  return result.ok ? { ok: true, message: "Thank you for subscribing!" } : result;
}
