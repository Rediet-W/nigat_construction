"use client";

import { ContactForm, FormField, FormSubmit } from "@/features/contact/components/ContactForm";
import { ENQUIRY_LIMITS, GENERAL_ENQUIRY, PHONE_PATTERN } from "@/features/contact/validation";
import { useI18n } from "@/i18n/I18nProvider";
import { localizedCategories } from "@/i18n/localize";

interface EnquiryFormProps {
  /** Distinguishes field ids when two forms could share a page. */
  id: string;
  /** Pre-selects a service category, e.g. on that category's page. */
  defaultService?: string;
}

/** The short quote form: name, phone, service needed, message. */
export function EnquiryForm({ id, defaultService = GENERAL_ENQUIRY }: EnquiryFormProps) {
  const { dict } = useI18n();
  const f = dict.form;
  const options = [
    { value: GENERAL_ENQUIRY, label: f.generalEnquiry },
    ...localizedCategories(dict).map((category) => ({ value: category.id, label: category.title })),
  ];

  return (
    <div className="contact-form">
      <ContactForm id={id}>
        <div className="row">
          <FormField
            className="form-group col-md-6"
            name="name"
            id={`${id}-name`}
            label={f.name}
            errorMessage={f.errors.name}
            autoComplete="name"
            maxLength={ENQUIRY_LIMITS.nameMax}
            required
          />
          <FormField
            className="form-group col-md-6"
            type="tel"
            name="phone"
            id={`${id}-phone`}
            label={f.phone}
            errorMessage={f.errors.phone}
            autoComplete="tel"
            pattern={PHONE_PATTERN}
            maxLength={ENQUIRY_LIMITS.phoneMax}
            required
          />
          <FormField
            className="form-group col-12"
            as="select"
            name="service"
            id={`${id}-service`}
            label={f.service}
            options={options}
            defaultValue={defaultService}
          />
          <FormField
            className="form-group col-12"
            as="textarea"
            name="message"
            id={`${id}-message`}
            label={f.message}
            errorMessage={f.errors.message}
            rows={3}
            minLength={ENQUIRY_LIMITS.messageMin}
            maxLength={ENQUIRY_LIMITS.messageMax}
            required
          />
          <FormSubmit className="form-btn col-12" label={f.send} />
        </div>
      </ContactForm>
    </div>
  );
}
