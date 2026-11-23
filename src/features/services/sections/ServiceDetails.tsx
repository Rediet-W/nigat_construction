import Image from "next/image";
import Link from "next/link";

import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { RichText } from "@/components/ui/RichText";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ROUTES } from "@/constants/routes";
import { getDictionary } from "@/i18n/server";
import { wowDelay } from "@/lib/animation";
import { getFaqItems, getServices, type ServiceDetail } from "@/lib/cms/content";

/** One service: overview, "why choose" highlights and process steps come from its CMS entry. */
export async function ServiceDetails({ service }: { service: ServiceDetail }) {
  const [dict, services, faqs] = await Promise.all([getDictionary(), getServices(), getFaqItems("general")]);
  const t = dict.serviceDetail;
  const others = services.filter((s) => s.id !== service.id).slice(0, 6);
  return (
    <div className="page-service-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="page-single-sidebar">
              <div className="page-category-list wow fadeInUp">
                <h2 className="page-category-list-title">{t.sidebarTitle}</h2>
                <ul>
                  {others.map((s) => (
                    <li key={s.id}><Link href={s.href}>{s.title}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                <div className="sidebar-cta-logo"><Image src="/images/side-bar-cta-icon.png" alt="" width={58} height={60} unoptimized /></div>
                <div className="sidebar-cta-box-body">
                  <div className="sidebar-cta-box-content">
                    <p>{dict.common.sidebarCta}</p>
                  </div>
                  <div className="sidebar-cta-box-btn"><Link href={ROUTES.contact} className="readmore-btn">{dict.common.contactNow}</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="service-single-content">
              {service.image && (
                <div className="page-single-image">
                  <figure className="image-anime reveal"><Image src={service.image} alt={service.title} width={1200} height={800} /></figure>
                </div>
              )}
              <div className="service-entry">
                <RichText text={service.overview} />
                {service.highlights.length > 0 && (
                  <div className="service-why-choose-box">
                    <h2 className="text-anime-style-3">{t.whyTitle}</h2>
                    <p className="wow fadeInUp">{t.whyIntro}</p>
                    <div className="service-why-choose-list wow fadeInUp" data-wow-delay="0.2s">
                      <ul>
                        {service.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="service-why-choose-image">
                      <figure className="image-anime reveal"><Image src="/images/service-why-chhose-img.jpg" alt="" width={858} height={350} /></figure>
                    </div>
                  </div>
                )}
                {service.processSteps.length > 0 && (
                  <div className="service-entry-process-box">
                    <h2 className="text-anime-style-3">{t.processTitle}</h2>
                    <p className="wow fadeInUp">{t.processIntro}</p>
                    <div className="service-process-items-image">
                      <div className="service-process-items-list">
                        {service.processSteps.map((step, index) => (
                          <div className="service-process-item wow fadeInUp" data-wow-delay={wowDelay(index)} key={step.title}>
                            <div className="service-process-item-no">
                              <h3>{index + 1}</h3>
                            </div>
                            <div className="service-process-item-content">
                              <h3>{step.title}</h3>
                              {step.description && <p>{step.description}</p>}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="service-entry-process-image">
                        <figure className="image-anime reveal"><Image src="/images/service-entry-process-Image.jpg" alt="" width={413} height={367} unoptimized /></figure>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {faqs.length > 0 && (
                <div className="page-single-faqs">
                  <SectionTitle title={dict.common.faqTitle} />
                  <FaqAccordion items={faqs} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
