import { educations } from "../data/educations";

const Education = () => {
  return (
    <section id="education" className="p-8 sm:p-12 md:p-16 lg:p-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">
            Education
          </h2>
          <div className="w-[75px] h-[5px] mt-2 rounded-full bg-[#1d4ed8]" />
        </div>
        <div className="lg:col-span-8">
          <div className="space-y-8">
            {educations.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5 md:p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                      {edu.degree}
                    </h3>
                    <p className="text-base sm:text-lg text-[#1d4ed8]">
                      {edu.school}
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">
                    {edu.date}
                  </span>
                </div>
                <ul className="space-y-2">
                  {edu?.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-600">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
