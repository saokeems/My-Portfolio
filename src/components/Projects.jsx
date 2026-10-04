import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="section shell mt-24">
      <h2 className="section-title">Projects</h2>

      <div className="flex w-full flex-col gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;