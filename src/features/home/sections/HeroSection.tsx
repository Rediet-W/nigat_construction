import Link from "next/link";

import { BackgroundVideo } from "@/components/ui/BackgroundVideo";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MEDIA } from "@/constants/media";
import { ENQUIRY_ANCHOR, ROUTES } from "@/constants/routes";
import { getDictionary } from "@/i18n/server";

/** Home hero: Nigat's own video when one is set in MEDIA, otherwise the hero photo. */
export async function HeroSection() {
  const dict = await getDictionary();
  const t = dict.hero;
  const video = MEDIA.heroVideo;

  return (
    <div
      className={video ? "hero hero-video-layout dark-section" : "hero dark-section parallaxie"}
      style={{ backgroundImage: `url(${MEDIA.heroImage})` }}
    >
      {video && (
        <div className="hero-bg-video">
          <BackgroundVideo src={video} poster={MEDIA.heroImage} />
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="hero-content">
              <SectionTitle subtitle={t.subtitle} as="h1" title={t.title} description={t.description} />
              <div className="hero-content-body wow fadeInUp" data-wow-delay="0.4s">
                <div className="hero-btn">
                  <Link href={`#${ENQUIRY_ANCHOR}`} className="btn-default btn-highlighted">
                    {dict.common.requestQuote}
                  </Link>
                </div>
                <Link href={ROUTES.services} className="readmore-btn hero-secondary-link">
                  {t.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
