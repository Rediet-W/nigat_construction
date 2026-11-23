import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ROUTES } from "@/constants/routes";
import { getDictionary } from "@/i18n/server";
import { getFaqGroups } from "@/lib/cms/content";

export async function FaqsPageSection() {
  const [dict, groups] = await Promise.all([getDictionary(), getFaqGroups()]);
  const t = dict.faqsPage;
  return (
    <div className="page-faqs">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="page-single-sidebar">
              <div className="page-category-list wow fadeInUp">
                <ul>
                  {groups.map((group, index) => (
                    <li key={group.id}><a href={`#faq_${index + 1}`}>{t.links[group.id as keyof typeof t.links] ?? group.title}</a></li>
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
            <div className="page-faqs-category">
              {groups.map((group, index) => (
                <div className="page-faq-accordion" id={`faq_${index + 1}`} key={group.id}>
                  <SectionTitle title={group.title} />
                  <FaqAccordion items={group.items} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
