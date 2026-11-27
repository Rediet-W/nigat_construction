import Image from "next/image";
import Link from "next/link";

import { serviceCategoryHref } from "@/constants/routes";
import { getDictionary } from "@/i18n/server";
import type { Service, ServiceCategory } from "@/types";

interface CategoryDetailProps {
  category: ServiceCategory & { services: readonly Service[] };
  others: readonly ServiceCategory[];
}

/** Body of a category page: photo, description, included services, and links to the other categories. */
export async function CategoryDetail({ category, others }: CategoryDetailProps) {
  const t = (await getDictionary()).categoryPage;

  return (
    <div className="page-service-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <figure className="category-detail-image image-anime reveal">
              <Image src={category.image} alt="" width={1200} height={750} sizes="(min-width: 992px) 66vw, 100vw" />
            </figure>
            <p className="category-detail-lead wow fadeInUp">{category.description}</p>
            <h2 className="category-detail-heading wow fadeInUp">{t.includedTitle}</h2>
            <ul className="category-detail-list wow fadeInUp">
              {category.services.map((service) => (
                <li key={service.id}>{service.title}</li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4">
            <aside className="category-detail-aside">
              <h2>{t.otherTitle}</h2>
              <ul>
                {others.map((other) => (
                  <li key={other.id}>
                    <Link href={serviceCategoryHref(other.id)}>
                      {other.title}
                      <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
