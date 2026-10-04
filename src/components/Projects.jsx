import { ExternalLink, Play } from "lucide-react";
import BrandIcon from "./BrandIcon";
import { projects } from "../data/projects";
import { skillIcons, pillColors } from "../data/skillIcons";

const buttonClass =
  "flex w-1/3 items-center justify-center gap-2 rounded-full bg-light-gray/10 px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-300 hover:bg-light-gray/20 max-lg:w-full";

const Projects = () => {
  return (
    <section id="projects" className="mt-24 flex w-full flex-col">
      <h2 className="mb-10 text-lg font-bold tracking-widest text-white uppercase">
        Projects
      </h2>

      <div className="flex w-full flex-col gap-8">
        {projects.map((project) => {
          const projectLink = project.demo ?? project.repo;

          return (
            <div key={project.id} className="flex items-start gap-8">
              <div className="flex w-full flex-col gap-5 rounded-lg border border-light-gray/50 p-5">
                {project.image && (
                  <a href={projectLink} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full rounded-md object-cover"
                    />
                  </a>
                )}

                <div className="flex flex-col">
                  <p className="text-xl font-semibold tracking-widest text-white uppercase">
                    {project.title}
                  </p>

                  <p className="mt-3 text-light-gray">
                    <span className="text-white">{project.title}</span> —{" "}
                    {project.description}
                  </p>

                  <div className="mt-5 grid grid-cols-2 items-center gap-2 lg:grid-cols-4">
                    {project.tags.map((tag) => {
                      const Icon = skillIcons[tag];

                      return (
                        <div
                          key={tag}
                          className={`flex h-6 items-center justify-center gap-1.5 rounded-full px-4 ${
                            pillColors[tag] ?? "bg-white/20 text-white"
                          }`}
                        >
                          {Icon && <Icon className="h-4 w-4 shrink-0" />}
                          <p className="text-xs whitespace-nowrap">{tag}</p>
                        </div>
                      );
                    })}
                  </div>

                  {(project.repo || project.demo) && (
                    <div className="mt-8 flex w-full items-center gap-2 max-lg:flex-col">
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonClass}
                        >
                          <BrandIcon name="github" className="h-5 w-5" />
                          Source code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonClass}
                        >
                          <Play className="h-5 w-5" />
                          Live demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {projectLink && (
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="flex flex-col rounded-full bg-light-gray/20 p-2 text-sm font-medium text-white max-lg:hidden"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;