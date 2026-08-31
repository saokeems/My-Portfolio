import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="p-8 sm:p-12 md:p-16 lg:p-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">
            Projects
          </h2>
          <div className="w-[75px] h-[5px] mt-2 rounded-full bg-[#1d4ed8]" />
        </div>
        <div className="lg:col-span-8">
          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative p-4 sm:p-6 md:p-8 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-gray-300 hover:-translate-y-1"
                >
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center bg-gray-900 rounded-full text-white transition-all duration-300 group-hover:bg-gray-700">
                    <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-mono text-[#1d4ed8]">
                        {project.id}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed pr-12 sm:pr-14 md:pr-16">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-900 text-white rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 group-hover:bg-gray-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
