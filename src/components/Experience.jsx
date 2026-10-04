import { experiences } from "../data/experiences";

const Experience = () => {
  return (
    <section id="experience" className="section shell mt-24">
      <h2 className="section-title">Experience</h2>

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
              <ul className="flex flex-col gap-2 text-light-gray">
                {exp.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;