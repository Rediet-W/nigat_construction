"use server";

import { SITE } from "@/constants/site";
import {
  findEnquiryError,
  GENERAL_ENQUIRY,
  HONEYPOT_FIELD,
  type EnquiryValues,
} from "@/features/contact/validation";
import { en } from "@/i18n/dictionaries/en";
import { localizedCategories } from "@/i18n/localize";
import { getDictionary, getLocale } from "@/i18n/server";
import { deliver, field, type FormResult } from "@/lib/forms";

export async function submitEnquiry(data: FormData): Promise<FormResult> {
  const [{ form: t }, locale] = await Promise.all([getDictionary(), getLocale()]);

  // Bots fill every field: pretend success and drop the submission.
  if (field(data, HONEYPOT_FIELD)) return { ok: true, message: t.sent };

  const values: EnquiryValues = {
    name: field(data, "name"),
    phone: field(data, "phone"),
    service: field(data, "service"),
    message: field(data, "message"),
  };

  // Server-side mirror of the browser validation (never trust the browser).
  const error = findEnquiryError(values);
  if (error) return { ok: false, message: t.errors[error] };

  // The team reads every enquiry in English, whichever language the visitor used.
  const service =
    localizedCategories(en).find((category) => category.id === values.service)?.title ?? en.form.generalEnquiry;
  const subject = `${SITE.name} enquiry — ${service}`;
  const text = [
    `New website enquiry (${SITE.name})`,
    `Service: ${service}`,
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Language: ${locale === "am" ? "Amharic" : "English"}`,
    "",
    values.message,
  ].join("\n");

  const status = await deliver(subject, text, { ...values, service: values.service || GENERAL_ENQUIRY, locale });
  if (status === "sent") return { ok: true, message: t.sent };
  return { ok: false, message: status === "not_configured" ? t.notConfigured : t.failed };
}
