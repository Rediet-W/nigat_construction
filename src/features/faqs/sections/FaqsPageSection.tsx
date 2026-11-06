import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { FAQS } from "@/constants/faqs";
import { ROUTES } from "@/constants/routes";

export function FaqsPageSection() {
  return (
    <div className="page-faqs">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="page-single-sidebar">
              <div className="page-category-list wow fadeInUp">
                <ul>
                  <li><a href="#faq_1">General Questions</a></li>
                  <li><a href="#faq_2">Construction Process</a></li>
                  <li><a href="#faq_3">Pricing &amp; Payments</a></li>
                  <li><a href="#faq_4">Design &amp; Planning</a></li>
                  <li><a href="#faq_5">Warranty &amp; Support</a></li>
                </ul>
              </div>
              <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                <div className="sidebar-cta-logo"><Image src="/images/side-bar-cta-icon.png" alt="" width={58} height={60} unoptimized /></div>
                <div className="sidebar-cta-box-body">
                  <div className="sidebar-cta-box-content">
                    <p>Let&apos;s Connect with Our Expert Construction Team and Start Building Today</p>
                  </div>
                  <div className="sidebar-cta-box-btn"><Link href={ROUTES.contact} className="readmore-btn">Contact Now</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="page-faqs-category">
              <div className="page-faq-accordion" id="faq_1">
                <SectionTitle
                  title="General questions"
                />
                <FaqAccordion items={FAQS.general} />
              </div>
              <div className="page-faq-accordion" id="faq_2">
                <SectionTitle
                  title="Construction process"
                />
                <FaqAccordion items={FAQS.process} />
              </div>
              <div className="page-faq-accordion" id="faq_3">
                <SectionTitle
                  title="Pricing & payments"
                />
                <FaqAccordion items={FAQS.pricing} />
              </div>
              <div className="page-faq-accordion" id="faq_4">
                <SectionTitle
                  title="Design & planning"
                />
                <FaqAccordion items={FAQS.design} />
              </div>
              <div className="page-faq-accordion" id="faq_5">
                <SectionTitle
                  title="Warranty & support"
                />
                <FaqAccordion items={FAQS.warranty} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
