import Image from "next/image";
import Link from "next/link";

import { Counter } from "@/components/ui/Counter";
import { VideoPopup } from "@/components/ui/VideoPopup";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ROUTES } from "@/constants/routes";
import { PROMO_VIDEO_URL } from "@/constants/site";

export function AboutUsSection() {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-us-image-box">
              <div className="about-us-image box-1">
                <figure><Image src="/images/about-us-image-1.jpg" alt="" width={524} height={607} unoptimized /></figure>
                <div className="about-us-cta-box">
                  <div className="icon-box"><Image src="/images/icon-about-us-cta-box.svg" alt="" width={40} height={40} /></div>
                  <div className="about-us-cta-content">
                    <h2><Counter value="25" />+</h2>
                    <p>Years of Excellence in Construction and Building Solutions</p>
                  </div>
                </div>
              </div>
              <div className="about-us-image box-2">
                <figure className="image-anime"><Image src="/images/about-us-image-2.jpg" alt="" width={218} height={255} unoptimized /></figure>
                <div className="video-play-button"><VideoPopup href={PROMO_VIDEO_URL} data-cursor-text="Play"><span className="bg-effect"><i className="fa-solid fa-play" /></span></VideoPopup></div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-us-content">
              <SectionTitle
                subtitle="About Us"
                title="Building reliable structures with quality and precision"
                description="Offering comprehensive construction solutions tailored to client needs, driven by precision, transparency & a passion for delivering exceptional & lasting results"
              >
                <ul className="wow fadeInUp" data-wow-delay="0.4s">
                  <li>Building quality spaces with trust and precision.</li>
                  <li>Delivering high quality residential and commercial projects.</li>
                </ul>
              </SectionTitle>
              <div className="about-us-items-list wow fadeInUp">
                <div className="about-us-item">
                  <div className="about-us-item-header">
                    <div className="icon-box"><Image src="/images/icon-about-us-item-1.svg" alt="" width={40} height={40} /></div>
                    <div className="about-us-item-counter">
                      <h2><Counter value="98" />%</h2>
                    </div>
                  </div>
                  <div className="about-us-item-content">
                    <p>Quality Projects Delivered with Precision</p>
                  </div>
                </div>
                <div className="about-us-item">
                  <div className="about-us-item-header">
                    <div className="icon-box"><Image src="/images/icon-about-us-item-2.svg" alt="" width={40} height={40} /></div>
                    <div className="about-us-item-counter">
                      <h2><Counter value="598" />+</h2>
                    </div>
                  </div>
                  <div className="about-us-item-content">
                    <p>Delivering Complete Client Satisfaction</p>
                  </div>
                </div>
              </div>
              <div className="about-us-footer wow fadeInUp" data-wow-delay="0.2s">
                <div className="about-us-btn"><Link href={ROUTES.about} className="btn-default">More About Us</Link></div>
                <div className="about-author-box">
                  <div className="about-author-image">
                    <figure className="image-anime"><Image src="/images/author-1.jpg" alt="" width={50} height={50} unoptimized /></figure>
                  </div>
                  <div className="about-author-content">
                    <h3>Michael Anderson</h3>
                    <p>Co-Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
