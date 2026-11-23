import Image from "next/image";
import Link from "next/link";

import { BackgroundVideo } from "@/components/ui/BackgroundVideo";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { VideoPopup } from "@/components/ui/VideoPopup";
import { ROUTES } from "@/constants/routes";
import { HeroImageSlider } from "@/features/home/components/HeroImageSlider";
import { getDictionary } from "@/i18n/server";
import { getHomePage, getPromoVideoUrl, getSiteSetting, mediaUrl } from "@/lib/cms/content";

export type HeroVariant = "image" | "slider" | "video";

const HERO_CLASS: Record<HeroVariant, string> = {
  image: "hero dark-section parallaxie",
  slider: "hero hero-slider-layout dark-section",
  video: "hero hero-video-layout dark-section",
};

const HERO_VIDEO_URL =
  "https://demo.awaikenthemes.com/assets/videos/builtex-hero-video.mp4";

/** Home hero; the three home pages differ only in the background (parallax image, slider or video). */
export async function HeroSection({
  variant = "image",
}: {
  variant?: HeroVariant;
}) {
  const [dict, promoVideoUrl, home, site] = await Promise.all([
    getDictionary(),
    getPromoVideoUrl(),
    getHomePage(),
    getSiteSetting(),
  ]);
  const t = dict.hero;
  const slides = (home?.heroSlides ?? [])
    .filter((slide) => slide.image)
    .map((slide) => ({
      src: mediaUrl(slide.image),
      width: slide.image?.width ?? 1920,
      height: slide.image?.height ?? 1280,
      alt: slide.label ?? "",
    }));
  return (
    <div className={HERO_CLASS[variant]}>
      {variant === "slider" && <HeroImageSlider slides={slides} />}
      {variant === "video" && (
        <div className="hero-bg-video">
          <BackgroundVideo id="myvideo" src={HERO_VIDEO_URL} />
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <div className="hero-content">
              <SectionTitle
                subtitle={home?.heroBadge ?? t.subtitle}
                as="h1"
                title={home?.heroTitle ?? t.title}
                description={site?.description ?? dict.meta.description}
              />
              <div
                className="hero-content-body wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="hero-btn">
                  <Link
                    href={home?.primaryCta?.href ?? ROUTES.contact}
                    className="btn-default btn-highlighted"
                  >
                    {home?.primaryCta?.label ?? t.getStarted}
                  </Link>
                </div>
                <div className="video-play-button">
                  <VideoPopup
                    href={promoVideoUrl}
                    data-cursor-text={dict.common.play}
                  >
                    <span className="bg-effect">
                      <i className="fa-solid fa-play" />
                    </span>
                    <p>{home?.secondaryCta?.label ?? t.exploreVideo}</p>
                  </VideoPopup>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="hero-content-footer">
              <div className="satisfy-client-box wow fadeInUp">
                <div className="satisfy-client-images">
                  <div className="satisfy-client-image">
                    <figure className="image-anime">
                      <Image
                        src="/images/author-1.jpg"
                        alt=""
                        width={50}
                        height={50}
                        unoptimized
                      />
                    </figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime">
                      <Image
                        src="/images/author-2.jpg"
                        alt=""
                        width={50}
                        height={50}
                        unoptimized
                      />
                    </figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime">
                      <Image
                        src="/images/author-3.jpg"
                        alt=""
                        width={50}
                        height={50}
                        unoptimized
                      />
                    </figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime">
                      <Image
                        src="/images/author-4.jpg"
                        alt=""
                        width={50}
                        height={50}
                        unoptimized
                      />
                    </figure>
                  </div>
                  <div className="satisfy-client-image add-more">
                    <i className="fa-solid fa-plus" />
                  </div>
                </div>
                <div className="satisfy-client-content">
                  <p>{home?.heroSubtitle ?? t.yearsBadge}</p>
                </div>
              </div>
              {/* <div className="quality-construction-circle wow fadeInUp" data-wow-delay="0.2s"><Image src="/images/quality-construction-circle.svg" alt="" width={137} height={137} /></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
