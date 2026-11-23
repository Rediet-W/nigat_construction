import Image from "next/image";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { getDictionary } from "@/i18n/server";
import { wowDelay } from "@/lib/animation";
import { getHomePage } from "@/lib/cms/content";

const ICONS = [
  "/images/icon-why-choose-us-item-1.svg",
  "/images/icon-why-choose-us-item-2.svg",
  "/images/icon-why-choose-us-item-3.svg",
] as const;

export async function WhyChooseUsSection() {
  const [dict, home] = await Promise.all([getDictionary(), getHomePage()]);
  const t = dict.whyChooseUs;
  const items = home?.highlights ?? [];
  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="why-choose-us-box">
              <div className="why-choose-us-content">
                <SectionTitle
                  subtitle={t.subtitle}
                  title={t.title}
                />
                <div className="why-choose-item-list">
                  {items.map((item, index) => (
                    <div className="why-choose-item wow fadeInUp" data-wow-delay={wowDelay(index)} key={item.title}>
                      <div className="why-choose-item-header">
                        <div className="icon-box">
                          <Image src={ICONS[index % ICONS.length]} alt="" width={60} height={60} />
                        </div>
                        <div className="why-choose-item-content">
                          <h3>{item.title}</h3>
                          {item.description && <p>{item.description}</p>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="why-choose-image wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <figure>
                  <Image
                    src="/images/why-choose-us-image.png"
                    alt=""
                    width={344}
                    height={693}
                    unoptimized
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
