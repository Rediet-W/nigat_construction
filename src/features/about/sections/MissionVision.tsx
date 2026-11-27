import Image from "next/image";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { MEDIA } from "@/constants/media";
import { getDictionary } from "@/i18n/server";
import { wowDelay } from "@/lib/animation";

/** Split layout: a large photo on one side, Mission / Vision / Values stacked on the other. */
export async function MissionVision() {
  const t = (await getDictionary()).missionVision;

  return (
    <div className="mission-vision light-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <figure className="mission-vision-image image-anime reveal">
              <Image src={MEDIA.missionImage} alt="" width={900} height={1100} sizes="(min-width: 992px) 40vw, 100vw" />
            </figure>
          </div>
          <div className="col-lg-7">
            <SectionTitle subtitle={t.subtitle} title={t.title} />
            <div className="mission-vision-list">
              <div className="mission-vision-item wow fadeInUp">
                <h3>{t.mission}</h3>
                <p>{t.missionText}</p>
              </div>
              <div className="mission-vision-item wow fadeInUp" data-wow-delay="0.2s">
                <h3>{t.vision}</h3>
                <p>{t.visionText}</p>
              </div>
              <div className="mission-vision-item wow fadeInUp" data-wow-delay="0.4s">
                <h3>{t.values}</h3>
                <ul className="value-list">
                  {t.valueList.map((value, index) => (
                    <li key={value.title} className="wow fadeInUp" data-wow-delay={wowDelay(index + 2, 0.1)}>
                      <strong>{value.title}</strong>
                      <span>{value.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
