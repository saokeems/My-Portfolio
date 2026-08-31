import { Mail } from "lucide-react";
import { socialLinks } from "../data/socialLinks";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-white py-24 md:h-screen"
      style={{ "--accent-color": "#1d4ed8" }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 800px 1200px at 0% 0%, #1d4ed840 0%, #1d4ed825 20%, #1d4ed810 40%, rgba(255, 255, 255, 0.3) 70%, rgba(255, 255, 255, 0.8) 90%, white 100%)",
        }}
      />

      <div className="h-full mx-auto p-8 sm:p-12 md:p-24 flex items-center">
        <div>
          <h2 className="text-pretty text-xl sm:text-2xl md:text-5xl font-bold tracking-tight text-gray-700 animate-fade-in">
            Hello! 👋
          </h2>
          <h1 className="mt-6 sm:mt-8 md:mt-10 text-pretty text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-gray-800 animate-fade-in animation-delay-200">
            I'm <span style={{ color: "#1d4ed8" }}>Saokee Musor</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-pretty text-base sm:text-lg md:text-xl/8 font-medium text-gray-600 animate-fade-in animation-delay-400">
            Junior Full-Stack Developer
          </p>
          {/* Social icons */}
          <div className="mt-8 sm:mt-10 md:mt-12 flex gap-x-4 sm:gap-x-6 md:gap-x-8 text-gray-700 animate-fade-in animation-delay-600">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.target}
                rel={link.rel}
                aria-label={link.label}
                className="transition-colors duration-300 hover:text-[var(--accent-color)]"
              >
                {link.type === "lucide" ? (
                  <Mail className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                ) : (
                  <svg
                    className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href={link.hrefIcon} />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
