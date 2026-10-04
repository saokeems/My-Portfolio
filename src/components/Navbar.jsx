import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { site, navLinks } from "../data/site";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="shell pt-5 pb-10">
      <nav className="flex w-full items-center justify-between">
        <a
          href="#hero"
          className="link text-lg font-bold tracking-widest text-light-gray uppercase"
        >
          {site.name}
        </a>

        <div className="hidden items-center gap-6 text-lg text-light-gray lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="link">
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
            aria-controls="mobile-menu"
            className="text-white"
          >
            <Menu className="h-7 w-7" />
          </button>

          <MobileMenu open={open} onClose={() => setOpen(false)} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;