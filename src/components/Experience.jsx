import { experiences } from "../data/experiences";

const Experience = () => {
  return (
    <section id="experience" className="mt-24 flex w-full flex-col">
      <h2 className="mb-10 text-lg font-bold tracking-widest text-white uppercase">
        Experience
      </h2>

      <div className="flex w-full flex-col gap-14">
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.date}`}
            className="flex w-full gap-10 max-lg:flex-col max-lg:items-center max-lg:gap-1 max-lg:text-center"
          >
            <p className="shrink-0 whitespace-nowrap text-light-gray">
              {exp.date}
            </p>

            <div className="flex flex-col">
              <p className="text-lg font-semibold text-white">{exp.title}</p>
              <p className="mb-4 text-light-gray">
                {exp.company} • {exp.type}
              </p>
              <p className="text-light-gray">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;