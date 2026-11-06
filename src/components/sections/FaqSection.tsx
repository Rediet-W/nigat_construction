import Image from "next/image";
import Link from "next/link";

import { Counter } from "@/components/ui/Counter";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { FAQS } from "@/constants/faqs";
import { ROUTES } from "@/constants/routes";

export function FaqSection() {
  return (
    <div className="our-faqs light-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="our-faqs-content">
              <SectionTitle
                subtitle="Frequently Asked Questions"
                title="Everything you need to know about us"
                description="Find answers to the most common questions about our construction services, project timelines, pricing, and process to help you build with confidence."
              />
              <div className="faq-content-footer wow fadeInUp">
                <div className="faq-content-btn"><Link href={ROUTES.faqs} className="btn-default">View All Faqs</Link></div>
                <div className="satisfy-client-box">
                  <div className="satisfy-client-images">
                    <div className="satisfy-client-image">
                      <figure className="image-anime"><Image src="/images/author-1.jpg" alt="" width={50} height={50} unoptimized /></figure>
                    </div>
                    <div className="satisfy-client-image">
                      <figure className="image-anime"><Image src="/images/author-2.jpg" alt="" width={50} height={50} unoptimized /></figure>
                    </div>
                    <div className="satisfy-client-image">
                      <figure className="image-anime"><Image src="/images/author-3.jpg" alt="" width={50} height={50} unoptimized /></figure>
                    </div>
                  </div>
                  <div className="satisfy-client-content">
                    <h2><Counter value="200" />+</h2>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <FaqAccordion items={FAQS.general} />
          </div>
        </div>
      </div>
    </div>
  );
}
