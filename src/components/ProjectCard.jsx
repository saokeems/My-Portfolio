import { ExternalLink, Play } from "lucide-react";
import { SiGithub } from "react-icons/si";
import ImageCarousel from "./ImageCarousel";
import { skillIcons } from "../data/skillIcons";

const ProjectCard = ({ project }) => {
  const projectLink = project.demo ?? project.repo;

  return (
    <div className="flex items-start gap-4">
      <div className="card">
        {project.images?.length > 0 && (
          <ImageCarousel
            images={project.images}
            alt={`${project.title} preview`}
          />
        )}

        <div className="flex flex-col">
          <p className="text-xl font-semibold tracking-widest text-white uppercase">
            {project.title}
          </p>

          {project.team?.length > 1 && (
            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-light-gray">
              <span className="badge">
                Group project · {project.team.length} members
              </span>
              <span>with</span>
              {project.team.map((member) => (
                <a
                  key={member.github}
                  href={`https://github.com/${member.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  {member.name}
                </a>
              ))}
            </div>
          )}

          <p className="mt-3 text-light-gray">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => {
              const { Icon, color } = skillIcons[tag] ?? {};

              return (
                <div key={tag} className="tag-pill" data-tag={tag}>
                  {Icon && (
                    <Icon className="h-4 w-4 shrink-0" style={{ color }} />
                  )}
                  <p className="text-xs whitespace-nowrap">{tag}</p>
                </div>
              );
            })}
          </div>

          {(project.repo || project.demo) && (
            <div className="mt-8 flex w-full flex-wrap items-center gap-2 max-lg:flex-col">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill"
                >
                  <SiGithub className="h-5 w-5" />
                  Source code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill"
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
          className="card-link"
        >
          <ExternalLink className="h-5 w-5" />
        </a>
      )}
    </div>
  );
};

export default ProjectCard;