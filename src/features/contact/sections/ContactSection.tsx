import Image from "next/image";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { CONTACT_INFO } from "@/constants/site";
import { ContactForm, FormField, FormSubmit } from "@/features/contact/components/ContactForm";

export function ContactSection() {
  return (
    <div className="page-contact-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-us-content">
              <SectionTitle
                subtitle="Contact Us"
                title="Let's build your next project together"
                description="Whether you're planning a new build, renovation, or commercial development, our experienced team is here to help."
              />
              <div className="contact-us-image-box wow fadeInUp" data-wow-delay="0.4s">
                <div className="contact-us-image">
                  <figure><Image src="/images/contact-us-image.jpg" alt="" width={605} height={342} /></figure>
                </div>
                <div className="contect-us-cta-box">
                  <div className="contact-us-item">
                    <div className="icon-box"><Image src="/images/icon-phone-primary.svg" alt="" width={25} height={25} /></div>
                    <div className="contact-us-item-content">
                      <p>Contact Us</p>
                      <h3><a href={CONTACT_INFO.phone.href}>{CONTACT_INFO.phone.label}</a></h3>
                    </div>
                  </div>
                  <div className="contact-us-item">
                    <div className="icon-box"><Image src="/images/icon-email-primary.svg" alt="" width={25} height={25} /></div>
                    <div className="contact-us-item-content">
                      <p>Email Address</p>
                      <h3><a href={CONTACT_INFO.email.href}>{CONTACT_INFO.email.label}</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-us-form">
              <div className="contact-us-form-title">
                <h2 className="wow fadeInUp">Get in touch</h2>
              </div>
              <div className="contact-form wow fadeInUp" data-wow-delay="0.2s">
                <ContactForm>
                  <div className="row">
                    <FormField className="form-group col-md-6" name="fname" id="fname" placeholder="First Name" required />
                    <FormField className="form-group col-md-6" name="lname" id="lname" placeholder="Last Name" required />
                    <FormField className="form-group col-md-6" type="email" name="email" id="email" placeholder="E-mail Address" required />
                    <FormField className="form-group col-md-6" name="phone" id="phone" placeholder="Phone No." required />
                    <FormField className="form-group col-md-12" as="textarea" name="message" id="message" placeholder="Write Message Here......." rows={4} />
                    <FormSubmit className="form-btn col-md-12" label="Send Message" />
                  </div>
                </ContactForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
