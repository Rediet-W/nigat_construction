import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { getProjects } from "@/lib/cms/content";
import { wowDelay } from "@/lib/animation";

export async function ProjectsGrid() {
  const projects = await getProjects();
  return (
    <div className="page-projects">
      <div className="container">
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-xl-3 col-md-6" key={project.id}>
              <ProjectCard project={project} delay={wowDelay(index)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
