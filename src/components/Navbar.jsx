import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site, navLinks } from "../data/site";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const goTo = (event, href) => {
    event.preventDefault();
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="w-full pt-5 pb-10">
      <nav className="flex w-full items-center justify-between">
        <a
          href="#hero"
          onClick={(event) => goTo(event, "#hero")}
          className="text-lg font-bold tracking-widest text-light-gray uppercase transition-colors hover:text-white"
        >
          {site.name}
        </a>

        <div className="hidden items-center gap-6 text-lg text-light-gray lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => goTo(event, link.href)}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden max-lg:flex">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="text-white"
          >
            <Menu className="h-7 w-7" />
          </button>

          <div
            className={`fixed inset-y-0 left-0 z-50 flex w-full flex-col bg-dark-bg px-6 py-11 transition-transform duration-300 ease-in-out ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="self-end text-white"
            >
              <X className="h-7 w-7" />
            </button>
            <ul className="mt-32 flex flex-col gap-5 text-center text-3xl font-semibold text-light-gray">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => goTo(event, link.href)}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;