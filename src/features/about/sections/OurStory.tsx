import Image from "next/image";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { MEDIA } from "@/constants/media";
import { MILESTONES } from "@/constants/story";
import { pick } from "@/i18n/localize";
import { getDictionary, getLocale } from "@/i18n/server";
import { wowDelay } from "@/lib/animation";

/**
 * How Nigat Construction started. The milestone timeline appears once real
 * milestones are added to constants/story.ts; until then only the text shows.
 */
export async function OurStory() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const t = dict.story;

  return (
    <div className="about-story">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <SectionTitle subtitle={t.subtitle} title={t.title} />
            {t.paragraphs.map((paragraph, index) => (
              <p key={paragraph} className="about-story-text wow fadeInUp" data-wow-delay={wowDelay(index + 1)}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="col-lg-6">
            <figure className="about-story-image image-anime reveal">
              <Image src={MEDIA.aboutImage} alt="" width={1200} height={900} sizes="(min-width: 992px) 50vw, 100vw" />
            </figure>
          </div>
        </div>

        {MILESTONES.length > 0 && (
          <ol className="story-timeline" aria-label={t.timelineLabel}>
            {MILESTONES.map((milestone, index) => (
              <li key={milestone.year} className="story-milestone wow fadeInUp" data-wow-delay={wowDelay(index)}>
                {milestone.image && (
                  <figure className="story-milestone-image">
                    <Image src={milestone.image} alt="" width={600} height={400} sizes="(min-width: 992px) 20vw, 50vw" />
                  </figure>
                )}
                <span className="story-milestone-year">{milestone.year}</span>
                <p>{pick(milestone.text, locale)}</p>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
