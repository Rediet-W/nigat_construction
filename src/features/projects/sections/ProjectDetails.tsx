import Image from "next/image";
import Link from "next/link";

import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { RichText } from "@/components/ui/RichText";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ROUTES } from "@/constants/routes";
import { getDictionary } from "@/i18n/server";
import { wowDelay } from "@/lib/animation";
import { getFaqItems, type ProjectDetail } from "@/lib/cms/content";

const PROCESS_ICONS = [
  "/images/icon-construction-process-item-1.svg",
  "/images/icon-construction-process-item-2.svg",
  "/images/icon-construction-process-item-3.svg",
] as const;

/** One project: facts, description and gallery come from its CMS entry; the process and contact blocks are site copy. */
export async function ProjectDetails({ project }: { project: ProjectDetail }) {
  const [dict, faqs] = await Promise.all([getDictionary(), getFaqItems("general")]);
  const t = dict.projectDetail;
  const facts = [
    { label: t.type, value: project.category },
    { label: t.client, value: project.client },
    { label: t.location, value: project.location },
    { label: t.area, value: project.area },
    { label: t.year, value: project.completedYear ? String(project.completedYear) : "" },
  ].filter((fact) => fact.value);

  return (
    <div className="page-project-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="page-single-sidebar">
              {facts.length > 0 && (
                <div className="page-category-list wow fadeInUp">
                  <h2 className="page-category-list-title">{t.info}</h2>
                  <div className="project-category-item-list">
                    {facts.map((fact) => (
                      <div className="project-category-item" key={fact.label}>
                        <h3>{fact.label}</h3>
                        <p>{fact.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
            <div className="project-single-content">
              {project.image && (
                <div className="page-single-image">
                  <figure className="image-anime reveal"><Image src={project.image} alt={project.title} width={1200} height={800} /></figure>
                </div>
              )}
              <div className="project-entry">
                <div className="project-entry-info">
                  <h2 className="text-anime-style-3">{t.overviewTitle}</h2>
                  <RichText text={project.description || project.summary} />
                  {project.gallery.length > 0 && (
                    <div className="row">
                      {project.gallery.map((src, index) => (
                        <div className="col-md-6" key={src}>
                          <div className="page-single-image wow fadeInUp" data-wow-delay={wowDelay(index % 2)}>
                            <figure className="image-anime"><Image src={src} alt={project.title} width={1200} height={800} /></figure>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="project-construction-process-box">
                  <h2 className="text-anime-style-3">{t.processTitle}</h2>
                  <p className="wow fadeInUp">{t.processIntro}</p>
                  <div className="construction-process-item-list">
                    {t.steps.map((step, index) => (
                      <div className="construction-process-item wow fadeInUp" data-wow-delay={wowDelay(index + 1)} key={step}>
                        <div className="construction-process-item-header">
                          <div className="icon-box"><Image src={PROCESS_ICONS[index]} alt="" width={40} height={40} /></div>
                          <div className="construction-process-item-no">
                            <h3>{String(index + 1).padStart(2, "0")}</h3>
                          </div>
                        </div>
                        <div className="construction-process-item-body">
                          <h3>{step}</h3>
                          <p>{t.stepText}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="project-entry-contact-info">
                  <h2 className="text-anime-style-3">{t.contactTitle}</h2>
                  <p className="wow fadeInUp">{t.contactText}</p>
                  <div className="project-contact-item-list">
                    <div className="satisfy-client-box wow fadeInUp" data-wow-delay="0.2s">
                      <div className="satisfy-client-images">
                        {[1, 2, 3, 4].map((n) => (
                          <div className="satisfy-client-image" key={n}>
                            <figure className="image-anime"><Image src={`/images/author-${n}.jpg`} alt="" width={50} height={50} unoptimized /></figure>
                          </div>
                        ))}
                      </div>
                      <div className="satisfy-client-content">
                        <h3>{dict.team.title}</h3>
                      </div>
                    </div>
                    <div className="project-contact-item wow fadeInUp" data-wow-delay="0.4s">
                      <div className="project-contact-item-content">
                        <div className="project-contact-content">
                          <p>{t.turnIdeas}</p>
                        </div>
                        <div className="project-contact-btn"><Link href={ROUTES.contact} className="readmore-btn">{t.requestConsultation}</Link></div>
                      </div>
                      <div className="project-contact-item-image">
                        <figure><Image src="/images/project-contact-item-image.jpg" alt="" width={414} height={157} unoptimized /></figure>
                      </div>
                    </div>
                  </div>
                </div>
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
