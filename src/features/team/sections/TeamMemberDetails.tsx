import Image from "next/image";

import { Counter } from "@/components/ui/Counter";
import { SkillBar } from "@/components/ui/SkillBar";
import { ContactForm, FormField, FormSubmit } from "@/features/contact/components/ContactForm";

export function TeamMemberDetails() {
  return (
    <div className="page-team-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-team-single-box">
              <div className="team-member-about">
                <div className="team-single-image">
                  <figure className="image-anime reveal"><Image src="/images/team-1.jpg" alt="" width={400} height={491} unoptimized /></figure>
                </div>
                <div className="team-about-content">
                  <div className="section-title">
                    <h2 className="text-anime-style-3" data-cursor="-opaque">About me</h2>
                    <p className="wow fadeInUp">Michael Anderson is the Founder &amp; Director of the company, bringing over 20 years of experience in the construction industry. His passion for quality craftsmanship, innovative building solutions, and client-focused service has shaped the company&apos;s reputation for excellence.</p>
                  </div>
                  <div className="team-about-contact-list wow fadeInUp" data-wow-delay="0.2s">
                    <ul>
                      <li><span>Phone Number:</span> +1 (800) 555-2486</li>
                      <li><span>Email Address:</span>info@domainname.com</li>
                      <li><span>Location:</span> New York, USA</li>
                      <li><span>Experience:</span> 20+ Years</li>
                      <li><span>Specialization:</span> Construction Management</li>
                    </ul>
                  </div>
                  <div className="team-member-social-list wow fadeInUp" data-wow-delay="0.4s">
                    <h2>Follow On Social:</h2>
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-pinterest-p" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-x-twitter" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="member-experience-info">
                <div className="member-experience-content">
                  <div className="section-title">
                    <h2 className="text-anime-style-3" data-cursor="-opaque">Work experience</h2>
                    <p className="wow fadeInUp">Throughout his career, Michael has successfully led residential, commercial, and industrial construction projects, ensuring every development is completed with precision, safety, and efficiency.</p>
                  </div>
                  <div className="member-experience-list wow fadeInUp" data-wow-delay="0.2s">
                    <ul>
                      <li>Residential &amp; Commercial Development Across Diverse Markets</li>
                      <li>Strategic Planning &amp; Execution for Complex Projects</li>
                      <li>Budget &amp; Resource Management for Optimal Efficiency</li>
                      <li>Client Relationship Management With Clear Communication</li>
                    </ul>
                  </div>
                </div>
                <div className="member-experience-image-box">
                  <div className="member-experience-image">
                    <figure className="image-anime reveal"><Image src="/images/team-experience-image-1.jpg" alt="" width={287} height={368} unoptimized /></figure>
                  </div>
                  <div className="member-experience-image">
                    <figure className="image-anime reveal"><Image src="/images/team-experience-image-2.jpg" alt="" width={287} height={368} unoptimized /></figure>
                  </div>
                </div>
              </div>
              <div className="team-member-skill-box">
                <div className="contact-us-form">
                  <div className="contact-us-form-title wow fadeInUp">
                    <h2>Get in touch</h2>
                  </div>
                  <div className="contact-form">
                    <ContactForm className="wow fadeInUp" data-wow-delay="0.2s">
                      <div className="row">
                        <FormField className="form-group col-md-6" name="fname" id="fname" placeholder="First Name" required />
                        <FormField className="form-group col-md-6" name="lname" id="lname" placeholder="Last Name" required />
                        <FormField className="form-group col-md-6" type="email" name="email" id="email" placeholder="E-mail Address" required />
                        <FormField className="form-group col-md-6" name="phone" id="phone" placeholder="Phone no." required />
                        <FormField className="form-group col-md-12" as="textarea" name="message" id="message" placeholder="Write Message Here......." rows={4} />
                        <FormSubmit className="form-btn col-md-12" label="Send Message" />
                      </div>
                    </ContactForm>
                  </div>
                </div>
                <div className="team-member-skill-content">
                  <div className="section-title">
                    <h2 className="text-anime-style-3" data-cursor="-opaque">Working skills</h2>
                    <p>A strong combination of leadership, technical expertise, and strategic thinking supports every project from planning to completion.</p>
                  </div>
                  <div className="member-skill-counter-list wow fadeInUp">
                    <div className="member-skill-counter-item">
                      <h2><Counter value="500" />+</h2>
                      <p>Completed Projects</p>
                    </div>
                    <div className="member-skill-counter-item">
                      <h2><Counter value="350" />+</h2>
                      <p>Satisfied Clients</p>
                    </div>
                  </div>
                  <div className="member-skill-list">
                    <div className="skills-progress-bar">
                      <SkillBar title="Construction Management" percent={95} />
                    </div>
                    <div className="skills-progress-bar">
                      <SkillBar title="Client Communication" percent={92} />
                    </div>
                    <div className="skills-progress-bar">
                      <SkillBar title="Strategic Decision Making" percent={96} />
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
