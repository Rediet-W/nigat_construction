"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  useTransition,
  type ComponentProps,
  type FormEvent,
} from "react";

import { submitEnquiry } from "@/features/contact/actions";
import { HONEYPOT_FIELD } from "@/features/contact/validation";
import { useI18n } from "@/i18n/I18nProvider";

type FieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type Status = { ok: boolean; message: string } | null;

interface FormContextValue {
  errors: Record<string, string>;
  validate: (el: FieldElement) => void;
  validateLater: (el: FieldElement) => void;
  pending: boolean;
  status: Status;
}

const FormContext = createContext<FormContextValue | null>(null);

function useFormContext(): FormContextValue {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("FormField/FormSubmit must be rendered inside <ContactForm>.");
  return ctx;
}

/** A field's own translated message (data-error), or the browser's when none is set. */
function errorFor(el: FieldElement): string {
  if (el.checkValidity()) return "";
  return el.dataset.error || el.validationMessage;
}

/**
 * Enquiry form shell: native constraint validation (each field checked on blur
 * and 500 ms after typing, all fields on submit), a hidden honeypot field
 * against bots, and the result message under the button. Submission goes
 * through the `submitEnquiry` Server Action.
 */
export function ContactForm({ children, ...props }: Omit<ComponentProps<"form">, "onSubmit" | "action">) {
  const { dict } = useI18n();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>(null);
  const [pending, startTransition] = useTransition();
  const timers = useRef<Record<string, number>>({});

  const validate = useCallback((el: FieldElement) => {
    window.clearTimeout(timers.current[el.name]);
    const message = errorFor(el);
    setErrors((current) => (current[el.name] === message ? current : { ...current, [el.name]: message }));
  }, []);

  const validateLater = useCallback(
    (el: FieldElement) => {
      window.clearTimeout(timers.current[el.name]);
      timers.current[el.name] = window.setTimeout(() => validate(el), 500);
    },
    [validate],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    form.querySelectorAll<FieldElement>("input[name], textarea[name], select[name]").forEach(validate);
    if (!form.checkValidity()) return;

    const data = new FormData(form);
    startTransition(async () => {
      const result = await submitEnquiry(data);
      setStatus(result);
      if (result.ok) {
        form.reset();
        setErrors({});
      }
    });
  };

  const value = useMemo(
    () => ({ errors, validate, validateLater, pending, status }),
    [errors, validate, validateLater, pending, status],
  );

  return (
    <FormContext.Provider value={value}>
      <form noValidate onSubmit={handleSubmit} {...props}>
        <div className="form-honeypot" aria-hidden="true">
          <label htmlFor={`${props.id ?? "form"}-${HONEYPOT_FIELD}`}>{dict.form.honeypot}</label>
          <input id={`${props.id ?? "form"}-${HONEYPOT_FIELD}`} name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
        </div>
        {children}
      </form>
    </FormContext.Provider>
  );
}

interface FormFieldProps {
  className: string;
  name: string;
  id: string;
  /** Shown as the placeholder and as a visually hidden <label>. */
  label: string;
  as?: "input" | "textarea" | "select";
  type?: "text" | "tel";
  /** Translated message shown when the field is invalid. */
  errorMessage?: string;
  options?: readonly { value: string; label: string }[];
  defaultValue?: string;
  rows?: number;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  autoComplete?: string;
}

export function FormField({
  className,
  name,
  id,
  label,
  as = "input",
  type = "text",
  errorMessage,
  options = [],
  defaultValue,
  rows,
  ...constraints
}: FormFieldProps) {
  const { errors, validate, validateLater } = useFormContext();
  const error = errors[name];
  const errorId = `${id}-error`;
  const shared = {
    name,
    id,
    defaultValue,
    className: as === "select" ? "form-control form-select" : "form-control",
    "data-error": errorMessage,
    onBlur: (e: { currentTarget: FieldElement }) => validate(e.currentTarget),
    onInput: (e: { currentTarget: FieldElement }) => validateLater(e.currentTarget),
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
  };

  return (
    <div className={error ? `${className} has-error has-danger` : className}>
      {/* A select has no placeholder, so its label stays visible. */}
      <label htmlFor={id} className={as === "select" ? "form-label" : "visually-hidden"}>
        {label}
      </label>
      {as === "select" ? (
        <select {...shared} required={constraints.required}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : as === "textarea" ? (
        <textarea {...shared} placeholder={label} rows={rows} {...constraints} />
      ) : (
        <input {...shared} type={type} placeholder={label} {...constraints} />
      )}
      <div className="help-block with-errors" id={errorId}>
        {error && (
          <ul className="list-unstyled">
            <li>{error}</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export function FormSubmit({ className, label }: { className: string; label: string }) {
  const { pending, status } = useFormContext();
  const { dict } = useI18n();
  const statusClass = status ? `form-status h5 ${status.ok ? "text-success" : "text-danger"}` : "form-status d-none";

  return (
    <div className={className}>
      <button type="submit" className="btn-default btn-highlighted" disabled={pending}>
        {pending ? dict.form.sending : label}
      </button>
      <div className={statusClass} role="status">
        {status?.message}
      </div>
    </div>
  );
}
