import Link from "next/link";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { TeamCard } from "@/features/team/components/TeamCard";
import { TEAM_MEMBERS } from "@/constants/team";
import { wowDelay } from "@/lib/animation";
import { ROUTES } from "@/constants/routes";

/** `className` adds the page-specific modifier class the template uses on some pages. */
export function TeamSection({ className }: { className?: string }) {
  return (
    <div className={className ? `our-team ${className}` : "our-team"}>
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-xl-6">
            <SectionTitle
              subtitle="Our Team"
              title="Professionals committed to building better spaces"
            />
          </div>
          <div className="col-xl-6">
            <div className="section-content-btn">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                <p>Our team of skilled professionals brings experience, precision, and dedication to every project we undertake, ensuring quality results and client satisfaction.</p>
              </div>
              <div className="section-btn wow fadeInUp" data-wow-delay="0.4s"><Link href={ROUTES.team} className="readmore-btn">View Our Team</Link></div>
            </div>
          </div>
        </div>
        <div className="row">
          {TEAM_MEMBERS.slice(0, 4).map((member, index) => (
            <div className="col-xl-3 col-md-6" key={member.id}>
              <TeamCard member={member} delay={wowDelay(index)} />
            </div>
          ))}
          <div className="col-lg-12">
            <div className="section-footer-text wow fadeInUp" data-wow-delay="0.4s">
              <p><span>Free</span>Strong, Stylish, and Durable Roofing Solutions - <Link href={ROUTES.team}>View all Members.</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
