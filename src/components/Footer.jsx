import { Mail } from "lucide-react";
import { site } from "../data/site";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="shell safe-bottom mt-5 flex items-center justify-center border-t border-light-gray/20 pt-6 lg:justify-start"
    >
      <a
        href={`mailto:${site.email}`}
        className="link flex items-center gap-2 text-light-gray"
      >
        <Mail className="h-5 w-5" strokeWidth={2} />
        {site.email}
      </a>
    </footer>
  );
};

export default Footer;