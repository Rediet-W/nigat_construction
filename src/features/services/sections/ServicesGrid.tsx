import { ServiceCard } from "@/features/services/components/ServiceCard";
import { SERVICES } from "@/constants/services";
import { wowDelay } from "@/lib/animation";

export function ServicesGrid() {
  return (
    <div className="page-services">
      <div className="container">
        <div className="row">
          {SERVICES.slice(0, 8).map((service, index) => (
            <div className="col-xl-3 col-md-6" key={service.id}>
              <ServiceCard service={service} delay={wowDelay(index)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
