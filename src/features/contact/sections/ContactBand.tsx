import { SectionTitle } from "@/components/ui/SectionTitle";
import { ENQUIRY_ANCHOR } from "@/constants/routes";
import { ContactChannels } from "@/features/contact/components/ContactChannels";
import { EnquiryForm } from "@/features/contact/components/EnquiryForm";
import { getDictionary } from "@/i18n/server";

interface ContactBandProps {
  /** Pre-selects a service category in the form. */
  defaultService?: string;
}

/**
 * Closing section of every page: one headline, phone / Telegram / WhatsApp,
 * and the short quote form. Pages end here, followed by the footer.
 */
export async function ContactBand({ defaultService }: ContactBandProps) {
  const t = (await getDictionary()).contactBand;
  return (
    <section className="contact-band dark-section" id={ENQUIRY_ANCHOR}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <SectionTitle subtitle={t.subtitle} title={t.title} description={t.description} />
            <ContactChannels />
          </div>
          <div className="col-lg-7">
            <div className="contact-band-form">
              <EnquiryForm id="contact-band-form" defaultService={defaultService} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
