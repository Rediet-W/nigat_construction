import Image from "next/image";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactForm, FormField, FormSubmit } from "@/features/contact/components/ContactForm";

/** `className` adds the page-specific modifier class the template uses on some pages. */
export function CtaSection({ className }: { className?: string }) {
  return (
    <div className={className ? `cta-section ${className}` : "cta-section"}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="cta-box">
              <div className="cta-box-header">
                <div className="cta-box-header-form">
                  <SectionTitle
                    subtitle="Get a Free Estimate"
                    title="Request your construction quote today"
                  />
                  <div className="cta-box-form">
                    <ContactForm className="wow fadeInUp" data-wow-delay="0.2s">
                      <FormField className="form-group" name="fname" id="fname" placeholder="First Name" required />
                      <FormField className="form-group" name="lname" id="lname" placeholder="Last Name" required />
                      <FormField className="form-group" type="email" name="email" id="email" placeholder="E-mail Address" required />
                      <FormField className="form-group" name="phone" id="phone" placeholder="Phone No." required />
                      <FormField className="form-group" as="textarea" name="message" id="message" placeholder="Write Message Here......." rows={1} />
                      <FormSubmit className="form-group" label="Submit Request" />
                    </ContactForm>
                  </div>
                </div>
                <div className="cta-box-header-image wow fadeInUp" data-wow-delay="0.2s">
                  <figure><Image src="/images/cta-box-header-image.png" alt="" width={352} height={450} unoptimized /></figure>
                </div>
              </div>
              <div className="cta-box-body">
                <div className="cta-box-body-content">
                  <SectionTitle
                    subtitle="People trust"
                    title="Driven by Quality and Reliability"
                    description="We deliver reliable construction solution skilled professionals and to excellence."
                  />
                </div>
                <div className="cta-box-item-list">
                  <div className="cta-box-item wow fadeInUp">
                    <div className="icon-box"><Image src="/images/icon-cta-box-item-1.svg" alt="" width={60} height={60} /></div>
                    <div className="cta-box-item-content">
                      <h3>Premium Workmanship</h3>
                      <p>Quality craftsmanship that ensures durable, lasting structures built to stand the test of time</p>
                    </div>
                  </div>
                  <div className="cta-box-item wow fadeInUp" data-wow-delay="0.2s">
                    <div className="icon-box"><Image src="/images/icon-cta-box-item-2.svg" alt="" width={60} height={60} /></div>
                    <div className="cta-box-item-content">
                      <h3>Transparent Pricing</h3>
                      <p>Quality craftsmanship that ensures durable, lasting structures built to stand the test of time</p>
                    </div>
                  </div>
                  <div className="cta-box-item wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon-box"><Image src="/images/icon-cta-box-item-3.svg" alt="" width={60} height={60} /></div>
                    <div className="cta-box-item-content">
                      <h3>Customer Satisfaction</h3>
                      <p>Quality craftsmanship that ensures durable, lasting structures built to stand the test of time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
