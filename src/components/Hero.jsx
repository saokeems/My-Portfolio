import BrandIcon from "./BrandIcon";
import { site } from "../data/site";
import { socialLinks } from "../data/socialLinks";

const Hero = () => {
  const firstName = site.name.split(" ")[0];

  return (
    <section
      id="hero"
      className="flex items-center gap-10 pt-16 pb-20 max-lg:flex-col max-lg:gap-6 max-lg:text-center"
    >
      <div className="relative h-44 w-44 min-h-44 min-w-44 shrink-0 overflow-hidden rounded-full">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 p-1">
          <div className="h-full w-full overflow-hidden rounded-full bg-dark-bg">
            <img
              src={site.avatar}
              alt={site.name}
              width="170"
              height="170"
              className="h-full w-full rounded-full border-white border-4 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-6 max-lg:items-center">
        <h1 className="text-[28px] font-bold tracking-[0.03em] text-balance text-light-gray">
          <span className="text-white">Hey, I'm {firstName}. </span>
          I'm a {site.role}
        </h1>

        <div className="flex w-full items-center justify-between gap-3 max-lg:flex-col">
          <span className="whitespace-nowrap text-light-gray">
            📍 {site.location}
          </span>

          <div className="flex w-full items-center justify-end gap-5 text-base text-light-gray max-lg:justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 transition-colors hover:text-white"
              >
                <BrandIcon name={link.icon} className="h-5 w-5" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;