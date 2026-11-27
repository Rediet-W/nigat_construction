import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { ROUTES, serviceCategoryHref } from "@/constants/routes";
import { localizedCategories } from "@/i18n/localize";
import { getDictionary } from "@/i18n/server";
import { wowDelay } from "@/lib/animation";

/**
 * Core services as a bento grid: the first category large, the others
 * smaller. Each card has a photo, a title, one line and its own page.
 */
export async function ServicesShowcase() {
  const dict = await getDictionary();
  const t = dict.servicesShowcase;
  const categories = localizedCategories(dict);

  return (
    <div className="our-services dark-section">
      <div className="container">
        <div className="row section-row align-items-end">
          <div className="col-lg-7">
            <SectionTitle subtitle={t.subtitle} title={t.title} description={t.description} />
          </div>
          <div className="col-lg-5">
            <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
              <Link href={ROUTES.services} className="readmore-btn">
                {dict.common.allServices}
              </Link>
            </div>
          </div>
        </div>

        <div className="service-bento">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={serviceCategoryHref(category.id)}
              className="service-bento-card wow fadeInUp"
              data-wow-delay={wowDelay(index)}
            >
              <Image
                src={category.image}
                alt=""
                fill
                sizes={index === 0 ? "(min-width: 992px) 50vw, 100vw" : "(min-width: 992px) 25vw, 100vw"}
              />
              <span className="service-bento-content">
                <span className="service-bento-title">{category.title}</span>
                <span className="service-bento-summary">{category.summary}</span>
              </span>
              <span className="service-bento-arrow" aria-hidden="true">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
