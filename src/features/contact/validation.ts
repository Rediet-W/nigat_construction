/** Enquiry rules shared by the browser (native constraints) and the server action. */

export const GENERAL_ENQUIRY = "general";

/** Name of the hidden honeypot field; real visitors never fill it, bots do. */
export const HONEYPOT_FIELD = "company";

export const ENQUIRY_LIMITS = {
  nameMax: 120,
  phoneMax: 30,
  messageMin: 10,
  messageMax: 3000,
} as const;

/** Ethiopian and international formats: digits, spaces, dashes, brackets, optional leading +. */
export const PHONE_PATTERN = "\\+?[\\d\\s()\\-]{7,20}";

export interface EnquiryValues {
  name: string;
  phone: string;
  /** A service category id, or GENERAL_ENQUIRY. */
  service: string;
  message: string;
}

export type EnquiryErrorKey = "name" | "phone" | "message";

/** First invalid field, or `null` when the enquiry can be sent. */
export function findEnquiryError(values: EnquiryValues): EnquiryErrorKey | null {
  const name = values.name.trim();
  const message = values.message.trim();
  if (!name || name.length > ENQUIRY_LIMITS.nameMax) return "name";
  if (!new RegExp(`^${PHONE_PATTERN}$`).test(values.phone.trim())) return "phone";
  if (message.length < ENQUIRY_LIMITS.messageMin || message.length > ENQUIRY_LIMITS.messageMax) return "message";
  return null;
}
