import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { serviceCategoryHref } from "@/constants/routes";
import { ServiceTags } from "@/features/services/components/ServiceTags";
import { localizedCategories } from "@/i18n/localize";
import { getDictionary } from "@/i18n/server";

/**
 * Services page: one large row per category, photo and text alternating
 * sides. Individual services appear as tags instead of separate cards.
 */
export async function ServiceCategories() {
  const dict = await getDictionary();
  const t = dict.servicesPage;
  const categories = localizedCategories(dict);

  return (
    <div className="page-services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle subtitle={t.subtitle} title={t.title} center />
          </div>
        </div>

        {categories.map((category, index) => (
          <article
            key={category.id}
            id={category.id}
            className={index % 2 ? "service-row service-row-reverse" : "service-row"}
          >
            <figure className="service-row-image image-anime reveal">
              <Image src={category.image} alt="" width={1200} height={800} sizes="(min-width: 992px) 50vw, 100vw" />
            </figure>
            <div className="service-row-content wow fadeInUp">
              <span className="service-row-number">{String(index + 1).padStart(2, "0")}</span>
              <h2>
                <Link href={serviceCategoryHref(category.id)}>{category.title}</Link>
              </h2>
              <p>{category.description}</p>
              <ServiceTags label={t.includes} services={category.services} />
              <Link href={serviceCategoryHref(category.id)} className="readmore-btn">
                {dict.common.learnMore}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
