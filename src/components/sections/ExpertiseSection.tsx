import Image from "next/image";
import Link from "next/link";

import { Counter } from "@/components/ui/Counter";
import { ROUTES } from "@/constants/routes";

/** `className` adds the page-specific modifier class the template uses on some pages. */
export function ExpertiseSection({ className }: { className?: string }) {
  return (
    <div className={className ? `our-expertise ${className}` : "our-expertise"}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="our-expertise-box">
              <div className="expertise-item box-1 wow fadeInUp">
                <div className="expertise-item-image">
                  <figure><Image src="/images/expertise-item-image-1.jpg" alt="" width={524} height={659} unoptimized /></figure>
                </div>
                <div className="expertise-item-content-box">
                  <div className="icon-box"><Image src="/images/icon-expertise-item-1.svg" alt="" width={50} height={50} /></div>
                  <div className="expertise-item-content">
                    <h3>Discover &amp; Consult</h3>
                    <p>Every project is completed with precision, attention to detail, and the highest construction standards.</p>
                  </div>
                  <div className="expertise-item-btn"><Link href={ROUTES.contact} className="readmore-btn">Get in Touch</Link></div>
                </div>
              </div>
              <div className="expertise-items-list">
                <div className="expertise-item box-2 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="expertise-item-image">
                    <figure><Image src="/images/expertise-item-image-2.jpg" alt="" width={746} height={360} /></figure>
                  </div>
                  <div className="expertise-item-content-box">
                    <div className="icon-box"><Image src="/images/icon-expertise-item-2.svg" alt="" width={50} height={50} /></div>
                    <div className="expertise-item-content">
                      <h3>Experienced Professionals</h3>
                      <p>Our skilled architects, engineers, and construction specialists bring years of industry expertise to every build.</p>
                    </div>
                  </div>
                </div>
                <div className="our-expertise-info-box">
                  <div className="expertise-info-item wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon-box"><Image src="/images/icon-expertise-item-3.svg" alt="" width={50} height={50} /></div>
                    <div className="expertise-info-content">
                      <h3>On-Time Project Delivery</h3>
                      <p>Every project is completed with precision, attention to detail, and the highest construction standards.</p>
                    </div>
                  </div>
                  <div className="expertise-info-counter-list">
                    <div className="expertise-counter-item">
                      <h2><Counter value="30" />+</h2>
                      <p>Years of Industry Experience</p>
                    </div>
                    <div className="expertise-counter-item">
                      <h2><Counter value="1.5" />k+</h2>
                      <p>Projects Completed</p>
                    </div>
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
