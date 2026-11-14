import Image from "next/image";
import Link from "next/link";

import { Counter } from "@/components/ui/Counter";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ROUTES } from "@/constants/routes";

export function CoreValueSection() {
  return (
    <div className="our-core-value">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="core-value-content">
              <SectionTitle
                subtitle="Core Values"
                title="Our commitment to lasting excellence"
                description="Our core values are the foundation of everything we build. They guide our decisions, strengthen our relationships, and inspire us to deliver exceptional construction services with integrity, quality, safety,"
              />
              <div className="core-value-counter-list wow fadeInUp">
                <div className="core-value-counter-item">
                  <h2><Counter value="8" />+</h2>
                  <p>Years of Construction Experience</p>
                </div>
                <div className="core-value-counter-item">
                  <h2><Counter value="1.2" />k+</h2>
                  <p>Projects Successfully Completed</p>
                </div>
                <div className="core-value-counter-item">
                  <h2><Counter value="450" />+</h2>
                  <p>Skilled Engineers &amp; Professionals</p>
                </div>
              </div>
              <div className="core-value-btn wow fadeInUp" data-wow-delay="0.2s"><Link href={ROUTES.contact} className="btn-default">Get in Touch</Link></div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="core-value-image">
              <figure className="image-anime reveal"><Image src="/images/core-value-image.jpg" alt="" width={605} height={577} /></figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
