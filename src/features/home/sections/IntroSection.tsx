import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { MEDIA } from "@/constants/media";
import { ROUTES } from "@/constants/routes";
import { VERIFIED_STATS } from "@/constants/site";
import { pick } from "@/i18n/localize";
import { getDictionary, getLocale } from "@/i18n/server";

/**
 * Short "who we are" block on the home page. The stats row only appears once
 * Nigat has confirmed real figures (constants/site.ts → VERIFIED_STATS).
 */
export async function IntroSection() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const t = dict.intro;

  return (
    <div className="about-us home-intro">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <figure className="home-intro-image image-anime reveal">
              <Image src={MEDIA.aboutImage} alt="" width={1200} height={900} sizes="(min-width: 992px) 50vw, 100vw" />
            </figure>
          </div>
          <div className="col-lg-6">
            <div className="about-us-content">
              <SectionTitle subtitle={t.subtitle} title={t.title} description={t.description}>
                <ul className="wow fadeInUp" data-wow-delay="0.4s">
                  {t.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </SectionTitle>

              {VERIFIED_STATS.length > 0 && (
                <dl className="home-intro-stats wow fadeInUp">
                  {VERIFIED_STATS.map((stat) => (
                    <div key={stat.value}>
                      <dt>{stat.value}</dt>
                      <dd>{pick(stat.label, locale)}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <Link href={ROUTES.about} className="btn-default">
                  {t.moreAbout}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
