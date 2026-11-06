import Image from "next/image";
import Link from "next/link";

import { Counter } from "@/components/ui/Counter";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TestimonialSlider } from "@/features/testimonials/components/TestimonialSlider";
import { ROUTES } from "@/constants/routes";

export function TestimonialsSection() {
  return (
    <div className="our-testimonial">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <SectionTitle
              subtitle="Testimonials"
              title="What our clients say about us"
              description="Real experiences from clients who trusted us to deliver quality construction with precision, reliability, and professionalism."
              center
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="testimonial-cta-box wow fadeInUp">
              <div className="testimonial-cta-header">
                <div className="satisfy-client-images">
                  <div className="satisfy-client-image">
                    <figure className="image-anime"><Image src="/images/author-1.jpg" alt="" width={50} height={50} unoptimized /></figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime"><Image src="/images/author-2.jpg" alt="" width={50} height={50} unoptimized /></figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime"><Image src="/images/author-3.jpg" alt="" width={50} height={50} unoptimized /></figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime"><Image src="/images/author-4.jpg" alt="" width={50} height={50} unoptimized /></figure>
                  </div>
                </div>
                <div className="testimonial-cta-counter-info">
                  <div className="testimonial-cta-counter-number">
                    <h2><Counter value="4.9" /><sub>/5</sub></h2>
                  </div>
                  <div className="testimonial-cta-counter-content">
                    <p>Based on <b>2,800+</b> verified client reviews</p>
                  </div>
                </div>
                <div className="testimonial-cta-item-list">
                  <ul>
                    <li>120+ successful projects delivered</li>
                    <li>100% safe &amp; quality-focus execution</li>
                  </ul>
                </div>
              </div>
              <div className="testimonial-cta-body">
                <div className="testimonial-cta-body-content">
                  <p>Ready to start your project? Let&apos;s build something great together.</p>
                </div>
                <div className="testimonial-cta-btn"><Link href={ROUTES.contact} className="btn-default">Get a Free Quote</Link></div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-md-6">
            <TestimonialSlider />
          </div>
          <div className="col-lg-12">
            <div className="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.2s">
              <div className="satisfy-client-images">
                <div className="satisfy-client-image">
                  <figure><Image src="/images/author-1.jpg" alt="" width={50} height={50} unoptimized /></figure>
                </div>
                <div className="satisfy-client-image add-more"><Image src="/images/icon-phone-primary.svg" alt="" width={25} height={25} /></div>
              </div>
              <p>Let&apos;s connect and start building your project today. <Link href={ROUTES.testimonials}>View our all reviews.</Link></p>
              <ul>
                <li><Counter value="4.9" /></li>
                {" "}
                <li><i className="fa-solid fa-star" /> <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" /></li>
                {" "}
                <li>Over 3000 Reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
