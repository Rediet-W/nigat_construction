import { ServiceCard } from "@/features/services/components/ServiceCard";
import { getServices } from "@/lib/cms/content";
import { wowDelay } from "@/lib/animation";

export async function ServicesGrid() {
  const services = await getServices();
  return (
    <div className="page-services">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-xl-3 col-md-6" key={service.id}>
              <ServiceCard service={service} delay={wowDelay(index % 8)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
