import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { navLinks } from "../data/site";

const FOCUSABLE = 'a[href], button:not([disabled])';

const MobileMenu = ({ open, onClose }) => {
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll(FOCUSABLE);
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <div
      ref={panelRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
      inert={!open}
      className={`fixed inset-y-0 left-0 z-50 flex w-full flex-col bg-dark-bg px-6 py-11 transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        className="self-end text-white"
      >
        <X className="h-7 w-7" />
      </button>

      <ul className="mt-32 flex flex-col gap-5 text-center text-3xl font-semibold text-light-gray">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={onClose} className="link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;