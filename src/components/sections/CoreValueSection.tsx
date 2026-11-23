import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { StatValue } from "@/components/ui/StatValue";
import { ROUTES } from "@/constants/routes";
import { getDictionary } from "@/i18n/server";
import { getCompanyStats } from "@/lib/cms/content";

export async function CoreValueSection() {
  const [dict, stats] = await Promise.all([getDictionary(), getCompanyStats()]);
  const t = dict.coreValues;
  return (
    <div className="our-core-value">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="core-value-content">
              <SectionTitle
                subtitle={t.subtitle}
                title={t.title}
                description={t.description}
              />
              <div className="core-value-counter-list wow fadeInUp">
                {stats.map((stat) => (
                  <div className="core-value-counter-item" key={stat.label}>
                    <h2>
                      <StatValue stat={stat} />
                    </h2>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
              <div
                className="core-value-btn wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <Link href={ROUTES.contact} className="btn-default">
                  {dict.common.getInTouch}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="core-value-image">
              <figure className="image-anime reveal">
                <Image
                  src="/images/core-value-image.jpg"
                  alt=""
                  width={605}
                  height={577}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
