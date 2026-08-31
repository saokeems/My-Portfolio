import { Mail } from "lucide-react";
import { socialLinks } from "../data/socialLinks";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

const Footer = () => {
  return (
    <footer className="relative bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-gray-800">Saokee Musor</h3>
            <p className="text-base text-gray-600">
              Junior Full-Stack Developer
            </p>
            <div className="flex gap-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.target}
                  rel={link.rel}
                  aria-label={link.label}
                  className="text-gray-600 transition-colors duration-300 hover:text-[var(--accent-color)]"
                  style={{ "--accent-color": "#1d4ed8" }}
                >
                  {link.type === "lucide" ? (
                    <Mail className="h-6 w-6" />
                  ) : (
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                      <use href={link.hrefIcon} />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-col md:items-end gap-4">
            <nav className="flex gap-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <p className="text-sm text-gray-500">
              &copy; 2026 Saokee Musor. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full h-24 text-gray-100"
        >
          <pattern
            id="footer-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 50 Q 25 40, 50 50 T 100 50"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              opacity="0.4"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
