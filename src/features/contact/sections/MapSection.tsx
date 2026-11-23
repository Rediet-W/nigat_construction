import { SectionTitle } from "@/components/ui/SectionTitle";
import { getDictionary } from "@/i18n/server";
import { getContactInfo } from "@/lib/cms/content";

/** Contact page map: the embed URL is the site setting's contact "mapUrl" in the CMS. Hidden when empty. */
export async function MapSection() {
  const [t, contact] = await Promise.all([getDictionary(), getContactInfo()]);
  if (!contact.mapUrl) return null;
  return (
    <div className="google-map">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <SectionTitle subtitle={t.map.subtitle} title={t.map.title} description={t.map.description} center />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="google-map-iframe wow fadeInUp" data-wow-delay="0.4s">
              <iframe
                src={contact.mapUrl}
                title={t.map.iframeTitle}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
