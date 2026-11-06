import Image from "next/image";
import Link from "next/link";

import { Counter } from "@/components/ui/Counter";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { PROJECTS } from "@/constants/projects";
import { wowDelay } from "@/lib/animation";
import { ROUTES } from "@/constants/routes";

export function ProjectsSection() {
  return (
    <div className="our-project dark-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-xl-6">
            <SectionTitle
              subtitle="Our Projects"
              title="Creating landmark projects with superior quality"
            />
          </div>
          <div className="col-xl-6">
            <div className="section-content-btn">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                <p>Our team of skilled professionals brings experience, precision, and dedication to every project we undertake, ensuring quality results and client satisfaction.</p>
              </div>
              <div className="section-btn wow fadeInUp" data-wow-delay="0.4s"><Link href={ROUTES.projects} className="readmore-btn">View All Projects</Link></div>
            </div>
          </div>
        </div>
        <div className="row">
          {PROJECTS.slice(0, 4).map((project, index) => (
            <div className="col-xl-3 col-md-6" key={project.id}>
              <ProjectCard project={project} delay={wowDelay(index)} />
            </div>
          ))}
          <div className="col-lg-12">
            <div className="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.2s">
              <div className="satisfy-client-images">
                <div className="satisfy-client-image">
                  <figure><Image src="/images/author-1.jpg" alt="" width={50} height={50} unoptimized /></figure>
                </div>
                <div className="satisfy-client-image add-more"><Image src="/images/icon-phone-primary.svg" alt="" width={25} height={25} /></div>
              </div>
              <p>Let&apos;s connect and start building your project today. <Link href={ROUTES.contact}>Get Free Quote</Link></p>
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
