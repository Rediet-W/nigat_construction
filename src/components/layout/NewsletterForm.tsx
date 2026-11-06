"use client";

import Image from "next/image";
import { useState, useTransition, type FormEvent } from "react";

import { subscribeNewsletter } from "@/features/contact/actions";

const DEFAULT_NOTE = "*Subscribe to get the latest updates,  tips, and project insights.";

/**
 * Footer newsletter signup. Uses native `required`/`type=email` validation as the
 * original did; the result is reported in place of the helper note below the field.
 */
export function NewsletterForm() {
  const [note, setNote] = useState(DEFAULT_NOTE);
  const [pending, startTransition] = useTransition();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    startTransition(async () => {
      const result = await subscribeNewsletter(data);
      setNote(result.message);
      if (result.ok) form.reset();
    });
  };

  return (
    <div className="footer-links footer-newsletter-box">
      <h2>Newsletter</h2>
      <form id="newslettersForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="mail"
            className="form-control"
            id="mail"
            placeholder="Enter Email Address*"
            aria-label="Email address"
            required
          />
          <button type="submit" className="newsletter-btn" aria-label="Subscribe" disabled={pending}>
            <Image src="/images/arrow-primary.svg" alt="" width={20} height={20} />
          </button>
        </div>
      </form>
      <p role="status">{note}</p>
    </div>
  );
}
