import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { PROJECTS } from "@/constants/projects";
import { wowDelay } from "@/lib/animation";

export function ProjectsGrid() {
  return (
    <div className="page-projects">
      <div className="container">
        <div className="row">
          {PROJECTS.slice(0, 8).map((project, index) => (
            <div className="col-xl-3 col-md-6" key={project.id}>
              <ProjectCard project={project} delay={wowDelay(index)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
