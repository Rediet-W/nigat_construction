import Image from "next/image";

import { Counter } from "@/components/ui/Counter";
import { SkillBar } from "@/components/ui/SkillBar";
import { ContactForm, FormField, FormSubmit } from "@/features/contact/components/ContactForm";
import { RichText, splitSections } from "@/components/ui/RichText";
import { getDictionary } from "@/i18n/server";
import type { TeamMemberDetail } from "@/lib/cms/content";

const SOCIAL_ICONS: Record<string, string> = {
  Facebook: "fa-brands fa-facebook-f",
  Instagram: "fa-brands fa-instagram",
  LinkedIn: "fa-brands fa-linkedin-in",
  Telegram: "fa-brands fa-telegram",
  TikTok: "fa-brands fa-tiktok",
  WhatsApp: "fa-brands fa-whatsapp",
  X: "fa-brands fa-x-twitter",
  YouTube: "fa-brands fa-youtube",
};

const SKILL_PERCENTS = [95, 92, 96] as const;

/**
 * One team member. The CMS bio's opening text fills "About me"; its first "## " section
 * (e.g. "## Work experience") fills the experience block.
 */
export async function TeamMemberDetails({ member }: { member: TeamMemberDetail }) {
  const dict = await getDictionary();
  const t = dict.teamMember;
  const f = dict.form;
  const [intro, ...sections] = splitSections(member.bio);
  const about = intro?.heading ? null : intro;
  const experience = intro?.heading ? [intro, ...sections] : sections;
  return (
    <div className="page-team-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-team-single-box">
              <div className="team-member-about">
                <div className="team-single-image">
                  <figure className="image-anime reveal"><Image src={member.image} alt={member.name} width={400} height={491} unoptimized /></figure>
                </div>
                <div className="team-about-content">
                  <div className="section-title">
                    <h2 className="text-anime-style-3" data-cursor="-opaque">{t.aboutMe}</h2>
                    {about && <RichText text={about.body} />}
                  </div>
                  {(member.phone || member.email) && (
                    <div className="team-about-contact-list wow fadeInUp" data-wow-delay="0.2s">
                      <ul>
                        {member.phone && (
                          <li><span>{t.phone}</span> <a href={`tel:${member.phone.replace(/[^d+]/g, "")}`}>{member.phone}</a></li>
                        )}
                        {member.email && (
                          <li><span>{t.email}</span> <a href={`mailto:${member.email}`}>{member.email}</a></li>
                        )}
                      </ul>
                    </div>
                  )}
                  {member.socialLinks.length > 0 && (
                    <div className="team-member-social-list wow fadeInUp" data-wow-delay="0.4s">
                      <h2>{t.follow}</h2>
                      <ul>
                        {member.socialLinks.map((link) => (
                          <li key={link.url}>
                            <a href={link.url} aria-label={link.platform} target="_blank" rel="noopener noreferrer">
                              <i className={SOCIAL_ICONS[link.platform] ?? "fa-solid fa-link"} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              {experience.length > 0 && (
              <div className="member-experience-info">
                <div className="member-experience-content">
                  {experience.map((section, index) => (
                    <div className="section-title" key={index}>
                      {section.heading && <h2 className="text-anime-style-3" data-cursor="-opaque">{section.heading}</h2>}
                      <RichText text={section.body} listClassName="member-experience-list" />
                    </div>
                  ))}
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
              )}
              <div className="team-member-skill-box">
                <div className="contact-us-form">
                  <div className="contact-us-form-title wow fadeInUp">
                    <h2>{dict.contact.getInTouch}</h2>
                  </div>
                  <div className="contact-form">
                    <ContactForm className="wow fadeInUp" data-wow-delay="0.2s">
                      <div className="row">
                        <FormField className="form-group col-md-6" name="fname" id="fname" placeholder={f.firstName} required />
                        <FormField className="form-group col-md-6" name="lname" id="lname" placeholder={f.lastName} required />
                        <FormField className="form-group col-md-6" type="email" name="email" id="email" placeholder={f.email} required />
                        <FormField className="form-group col-md-6" name="phone" id="phone" placeholder={f.phone} required />
                        <FormField className="form-group col-md-12" as="textarea" name="message" id="message" placeholder={f.message} rows={4} />
                        <FormSubmit className="form-btn col-md-12" label={f.sendMessage} />
                      </div>
                    </ContactForm>
                  </div>
                </div>
                <div className="team-member-skill-content">
                  <div className="section-title">
                    <h2 className="text-anime-style-3" data-cursor="-opaque">{t.skillsTitle}</h2>
                    <p>{t.skillsText}</p>
                  </div>
                  <div className="member-skill-counter-list wow fadeInUp">
                    <div className="member-skill-counter-item">
                      <h2><Counter value="500" />+</h2>
                      <p>{t.completed}</p>
                    </div>
                    <div className="member-skill-counter-item">
                      <h2><Counter value="350" />+</h2>
                      <p>{t.satisfied}</p>
                    </div>
                  </div>
                  <div className="member-skill-list">
                    {t.skills.map((skill, index) => (
                      <div className="skills-progress-bar" key={skill}>
                        <SkillBar title={skill} percent={SKILL_PERCENTS[index]} />
                      </div>
                    ))}
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
