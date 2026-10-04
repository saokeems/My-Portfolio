import { Mail } from "lucide-react";
import { site } from "../data/site";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="mt-5 flex w-full items-center justify-center border-t border-light-gray/20 pt-6 pb-8 lg:justify-start"
    >
      <a
        href={`mailto:${site.email}`}
        className="flex items-center gap-2 text-light-gray transition-colors hover:text-white"
      >
        <Mail className="h-5 w-5" strokeWidth={2} />
        {site.email}
      </a>
    </footer>
  );
};

export default Footer;