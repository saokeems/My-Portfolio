import { site } from "../data/site";
import { socialLinks } from "../data/socialLinks";

const Hero = () => {
  return (
    <section
      id="hero"
      className="shell flex items-center gap-10 pt-16 pb-20 max-lg:flex-col max-lg:gap-6 max-lg:text-center"
    >
      <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 p-1">
          <div className="h-full w-full overflow-hidden rounded-full bg-dark-bg">
            <img
              src={site.avatar}
              alt={site.name}
              width={176}
              height={176}
              className="h-full w-full rounded-full border-white border-4 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-6 max-lg:items-center">
        <h1 className="text-hero font-bold tracking-hero text-balance text-light-gray">
          <span className="text-white">Hey, I'm {site.firstName}. </span>
          I'm a {site.role}
        </h1>

        <div className="flex w-full items-center justify-between gap-3 max-lg:flex-col">
          <span className="whitespace-nowrap text-light-gray">
            📍 {site.location}
          </span>

          <div className="flex w-full items-center justify-end gap-5 text-base text-light-gray max-lg:justify-center">
            {socialLinks.map(({ id, label, href, icon: Icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="link flex items-center gap-1"
              >
                <Icon className="h-5 w-5" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;