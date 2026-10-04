import { Code2 } from "lucide-react";
import { skills } from "../data/skills";
import { skillIcons } from "../data/skillIcons";

const TechStack = () => {
  return (
    <section className="mt-7 flex w-full flex-col">
      <h2 className="mb-10 text-lg font-bold tracking-widest text-white uppercase">
        Tech stack
      </h2>

      <div className="grid grid-cols-2 gap-5 text-white lg:grid-cols-4">
        {skills.map((skill) => {
          const Icon = skillIcons[skill] ?? Code2;

          return (
            <div
              key={skill}
              className="group flex h-24 flex-col items-center justify-center gap-1.5 rounded-lg border border-light-gray/50 p-3 text-light-gray transition-all ease-in-out duration-300 hover:bg-light-gray/10 hover:text-white"
            >
              <Icon className="h-8 w-8 transition-transform duration-300 group-hover:-translate-y-1" />
              <p className="text-center">{skill}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;