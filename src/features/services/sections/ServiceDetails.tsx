import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { FAQS } from "@/constants/faqs";
import { ROUTES } from "@/constants/routes";

export function ServiceDetails() {
  return (
    <div className="page-service-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="page-single-sidebar">
              <div className="page-category-list wow fadeInUp">
                <h2 className="page-category-list-title">Discover Our Services</h2>
                <ul>
                  <li><a href="#">Residential Construction</a></li>
                  <li><a href="#">Commercial Construction</a></li>
                  <li><a href="#">Industrial Construction</a></li>
                  <li><a href="#">Infrastructure Construction</a></li>
                  <li><a href="#">Building Renovation</a></li>
                </ul>
              </div>
              <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                <div className="sidebar-cta-logo"><Image src="/images/side-bar-cta-icon.png" alt="" width={58} height={60} unoptimized /></div>
                <div className="sidebar-cta-box-body">
                  <div className="sidebar-cta-box-content">
                    <p>Let&apos;s Connect with Our Expert Construction Team and Start Building Today</p>
                  </div>
                  <div className="sidebar-cta-box-btn"><Link href={ROUTES.contact} className="readmore-btn">Contact Now</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="service-single-content">
              <div className="page-single-image">
                <figure className="image-anime reveal"><Image src="/images/service-image-1.jpg" alt="" width={1200} height={800} /></figure>
              </div>
              <div className="service-entry">
                <p className="wow fadeInUp">We specialize in creating high-quality residential spaces that combine comfort, functionality, style, and lasting value. Whether you&apos;re building a custom home from the ground up, renovating an existing property, expanding your living space, or developing a residential community, our experienced team manages every stage with precision, care, and attention to detail.</p>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Our goal is to create residential spaces that are not only visually appealing, but also durable, efficient, and built to provide long-term comfort for years to come.</p>
                <div className="service-entry-benefits-box">
                  <h2 className="text-anime-style-3">Our residential construction services</h2>
                  <p className="wow fadeInUp">From concept to completion, our team focuses on creating residential spaces that reflect your lifestyle, meet your functional needs, and stand the test of time.</p>
                  <div className="service-benefits-item-list">
                    <div className="service-benefits-item wow fadeInUp">
                      <div className="icon-box"><Image src="/images/icon-service-entry-benefits-1.svg" alt="" width={80} height={80} /></div>
                      <div className="service-benefits-item-content">
                        <h3>Custom Home Construction</h3>
                        <p>Build your dream home with tailored designs and craftsmanship.</p>
                      </div>
                    </div>
                    <div className="service-benefits-item wow fadeInUp" data-wow-delay="0.2s">
                      <div className="icon-box"><Image src="/images/icon-service-entry-benefits-2.svg" alt="" width={80} height={80} /></div>
                      <div className="service-benefits-item-content">
                        <h3>Renovations &amp; Remodeling</h3>
                        <p>Upgrade your space with modern, functional renovations.</p>
                      </div>
                    </div>
                    <div className="service-benefits-item wow fadeInUp" data-wow-delay="0.4s">
                      <div className="icon-box"><Image src="/images/icon-service-entry-benefits-3.svg" alt="" width={80} height={80} /></div>
                      <div className="service-benefits-item-content">
                        <h3>Luxury Home Development</h3>
                        <p>Create elegant homes with premium finishes and refined details.</p>
                      </div>
                    </div>
                    <div className="service-benefits-item wow fadeInUp" data-wow-delay="0.6s">
                      <div className="icon-box"><Image src="/images/icon-service-entry-benefits-4.svg" alt="" width={80} height={80} /></div>
                      <div className="service-benefits-item-content">
                        <h3>Multi-Family Housing</h3>
                        <p>We build durable residential duplexes, townhouses, apartments.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-why-choose-box">
                  <h2 className="text-anime-style-3">Why choose our services</h2>
                  <p className="wow fadeInUp">With skilled professionals, premium materials, and a commitment to excellence, we ensure every home is built with precision, durability, and lasting value.</p>
                  <div className="service-why-choose-list wow fadeInUp" data-wow-delay="0.2s">
                    <ul>
                      <li>Transparent Rates with no hidden cost</li>
                      <li>Customized solutions for every client</li>
                      <li>Strict quality and safety standards</li>
                      <li>Premium materials &amp; trusted suppliers</li>
                    </ul>
                  </div>
                  <div className="service-why-choose-image">
                    <figure className="image-anime reveal"><Image src="/images/service-why-chhose-img.jpg" alt="" width={858} height={350} /></figure>
                  </div>
                </div>
                <div className="service-entry-process-box">
                  <h2 className="text-anime-style-3">Our construction process</h2>
                  <p className="wow fadeInUp">Learn how we manage every stage of your project with clear planning, expert execution, and a commitment to quality from start to finish for exceptional results every time.</p>
                  <div className="service-process-items-image">
                    <div className="service-process-items-list">
                      <div className="service-process-item wow fadeInUp">
                        <div className="service-process-item-no">
                          <h3>1</h3>
                        </div>
                        <div className="service-process-item-content">
                          <h3>Initial Consultation &amp; Planning</h3>
                          <p>We inspect every detail carefully completing the project and handing it over.</p>
                        </div>
                      </div>
                      <div className="service-process-item wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-process-item-no">
                          <h3>2</h3>
                        </div>
                        <div className="service-process-item-content">
                          <h3>Residential Services</h3>
                          <p>We inspect every detail carefully completing the project and handing it over.</p>
                        </div>
                      </div>
                      <div className="service-process-item wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-process-item-no">
                          <h3>3</h3>
                        </div>
                        <div className="service-process-item-content">
                          <h3>Final Inspection &amp; Handover</h3>
                          <p>We inspect every detail carefully completing the project and handing it over.</p>
                        </div>
                      </div>
                    </div>
                    <div className="service-entry-process-image">
                      <figure className="image-anime reveal"><Image src="/images/service-entry-process-Image.jpg" alt="" width={413} height={367} unoptimized /></figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-single-faqs">
                <SectionTitle
                  title="Frequently asked questions"
                />
                <FaqAccordion items={FAQS.general} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
