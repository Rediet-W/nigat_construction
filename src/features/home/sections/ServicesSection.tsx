import Link from "next/link";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/features/services/components/ServiceCard";
import { SERVICES } from "@/constants/services";
import { wowDelay } from "@/lib/animation";
import { ROUTES } from "@/constants/routes";

export function ServicesSection() {
  return (
    <div className="our-services dark-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-xl-6">
            <SectionTitle
              subtitle="Our Services"
              title="Construction solutions built around your vision"
            />
          </div>
          <div className="col-xl-6">
            <div className="section-content-btn">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                <p>Our team of skilled professionals brings experience, precision, and dedication to every project we undertake, ensuring quality results and client satisfaction.</p>
              </div>
              <div className="section-btn wow fadeInUp" data-wow-delay="0.4s"><Link href={ROUTES.services} className="readmore-btn">Explore Services</Link></div>
            </div>
          </div>
        </div>
        <div className="row">
          {SERVICES.slice(0, 4).map((service, index) => (
            <div className="col-xl-3 col-md-6" key={service.id}>
              <ServiceCard service={service} delay={wowDelay(index)} />
            </div>
          ))}
          <div className="col-lg-12">
            <div className="section-footer-text wow fadeInUp" data-wow-delay="0.4s">
              <p><span>Free</span>Start Your Construction Journey Today. - <Link href={ROUTES.contact}>Request a Quote.</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
