import type { Service } from "@/types";

/** Included services as small tags. */
export function ServiceTags({ label, services }: { label: string; services: readonly Service[] }) {
  return (
    <ul className="service-tags" aria-label={label}>
      {services.map((service) => (
        <li key={service.id}>{service.title}</li>
      ))}
    </ul>
  );
}
