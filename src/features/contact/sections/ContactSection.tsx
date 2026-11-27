import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactChannels } from "@/features/contact/components/ContactChannels";
import { EnquiryForm } from "@/features/contact/components/EnquiryForm";
import { getDictionary } from "@/i18n/server";

/** Contact page: ways to reach Nigat on the left, the quote form on the right. */
export async function ContactSection() {
  const t = await getDictionary();
  return (
    <div className="page-contact-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-us-content">
              <SectionTitle subtitle={t.contact.subtitle} title={t.contact.title} description={t.contact.description} />
              <ContactChannels showEmail />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-us-form">
              <div className="contact-us-form-title">
                <h2 className="wow fadeInUp">{t.contact.formTitle}</h2>
              </div>
              {/* Not scroll-animated: the form must be visible even before scripts run. */}
              <EnquiryForm id="contact-page-form" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
