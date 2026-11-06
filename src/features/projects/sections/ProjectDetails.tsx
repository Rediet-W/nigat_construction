import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { FAQS } from "@/constants/faqs";
import { ROUTES } from "@/constants/routes";

export function ProjectDetails() {
  return (
    <div className="page-project-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="page-single-sidebar">
              <div className="page-category-list wow fadeInUp">
                <h2 className="page-category-list-title">Project Information</h2>
                <div className="project-category-item-list">
                  <div className="project-category-item">
                    <h3>Project Type:</h3>
                    <p>Residential</p>
                  </div>
                  <div className="project-category-item">
                    <h3>Client Name:</h3>
                    <p>The Johnson Family</p>
                  </div>
                  <div className="project-category-item">
                    <h3>Duration:</h3>
                    <p>10 Months</p>
                  </div>
                  <div className="project-category-item">
                    <h3>Location:</h3>
                    <p>Green Valley Estate</p>
                  </div>
                  <div className="project-category-item project-category-social-links">
                    <h3>Share Project:</h3>
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-pinterest-p" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-x-twitter" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
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
            <div className="project-single-content">
              <div className="page-single-image">
                <figure className="image-anime reveal"><Image src="/images/project-1.jpg" alt="" width={1200} height={800} /></figure>
              </div>
              <div className="project-entry">
                <div className="project-entry-info">
                  <h2 className="text-anime-style-3">Project overview</h2>
                  <p className="wow fadeInUp">The Modern Family Villa is a premium residential project designed to combine contemporary architecture with everyday comfort. Built for a growing family, this custom home features spacious living areas, elegant interiors, and energy-efficient construction that creates a perfect balance between style and functionality.</p>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">Every stage of the project was carefully managed to deliver exceptional quality and a comfortable experience. With a thoughtfully planned layout, refined finishes, and attention to architectural detail, the villa offers a modern lifestyle that feels both luxurious and practical.</p>
                </div>
                <div className="project-challenges-box">
                  <h2 className="text-anime-style-3">Challenges &amp; solutions</h2>
                  <p className="wow fadeInUp">Through efficient planning, regular site inspections, and proactive communication, every milestone was completed successfully without compromising quality or safety.</p>
                  <div className="project-challenges-image-list">
                    <div className="project-challenges-items-list">
                      <div className="project-challenges-item wow fadeInUp" data-wow-delay="0.2s">
                        <h3>Project Challenges</h3>
                        <p>The project required careful coordination of trades, deliveries, and quality control throughout every construction phase.</p>
                      </div>
                      <div className="project-challenges-item wow fadeInUp" data-wow-delay="0.4s">
                        <h3>Our Solutions</h3>
                        <p>We overcame these challenges planning, close supervision, and clear, delivering the home on time with excellent quality.</p>
                      </div>
                    </div>
                    <div className="project-challenges-image">
                      <figure className="image-anime reveal"><Image src="/images/project-challenges-image.jpg" alt="" width={413} height={348} unoptimized /></figure>
                    </div>
                  </div>
                  <div className="project-construction-process-box">
                    <h2 className="text-anime-style-3">Construction process</h2>
                    <p className="wow fadeInUp">From initial consultation to final handover, we manage every stage with careful planning, skilled execution, and consistent quality control to ensure a smooth and successful build.</p>
                    <div className="construction-process-item-list">
                      <div className="construction-process-item wow fadeInUp" data-wow-delay="0.2s">
                        <div className="construction-process-item-header">
                          <div className="icon-box"><Image src="/images/icon-construction-process-item-1.svg" alt="" width={40} height={40} /></div>
                          <div className="construction-process-item-no">
                            <h3>01</h3>
                          </div>
                        </div>
                        <div className="construction-process-item-body">
                          <h3>Planning &amp; Design</h3>
                          <p>Created architectural drawings, plans, project schedules.</p>
                        </div>
                      </div>
                      <div className="construction-process-item wow fadeInUp" data-wow-delay="0.4s">
                        <div className="construction-process-item-header">
                          <div className="icon-box"><Image src="/images/icon-construction-process-item-2.svg" alt="" width={40} height={40} /></div>
                          <div className="construction-process-item-no">
                            <h3>02</h3>
                          </div>
                        </div>
                        <div className="construction-process-item-body">
                          <h3>Additional Finishing</h3>
                          <p>Created architectural drawings, plans, project schedules.</p>
                        </div>
                      </div>
                      <div className="construction-process-item wow fadeInUp" data-wow-delay="0.6s">
                        <div className="construction-process-item-header">
                          <div className="icon-box"><Image src="/images/icon-construction-process-item-3.svg" alt="" width={40} height={40} /></div>
                          <div className="construction-process-item-no">
                            <h3>03</h3>
                          </div>
                        </div>
                        <div className="construction-process-item-body">
                          <h3>Final Inspection</h3>
                          <p>Created architectural drawings, plans, project schedules.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-entry-contact-info">
                    <h2 className="text-anime-style-3">Contact our construction team</h2>
                    <p className="wow fadeInUp">Explore the complete journey of this project—from initial planning and architectural design to expert construction and final completion. Discover how our commitment to ideas into exceptional spaces built to last.</p>
                    <div className="project-contact-item-list">
                      <div className="satisfy-client-box wow fadeInUp" data-wow-delay="0.2s">
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
                        <div className="satisfy-client-content">
                          <h3>Professionals committed to building better spaces</h3>
                        </div>
                      </div>
                      <div className="project-contact-item wow fadeInUp" data-wow-delay="0.4s">
                        <div className="project-contact-item-content">
                          <div className="project-contact-content">
                            <p>We turn your ideas into reality with quality workmanship every time.</p>
                          </div>
                          <div className="project-contact-btn"><Link href={ROUTES.contact} className="readmore-btn">Request a Consultation</Link></div>
                        </div>
                        <div className="project-contact-item-image">
                          <figure><Image src="/images/project-contact-item-image.jpg" alt="" width={414} height={157} unoptimized /></figure>
                        </div>
                      </div>
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
