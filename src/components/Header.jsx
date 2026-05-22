import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const leftNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "Residences", href: "#units" },
  { label: "Location", href: "#location" },
];

const rightNavItems = [
  { label: "Features", href: "#features" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navText = scrolled ? "text-[#191714]" : "text-white";
  const navMuted = scrolled ? "text-[#191714]/70" : "text-white/86";

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 border-b opacity-0 backdrop-blur-md transition-colors duration-500 ${
        scrolled
          ? "border-[#191714]/10 bg-[#f7f1e6]/92 shadow-sm shadow-black/[0.03]"
          : "border-white/18 bg-black/8"
      }`}
    >
      <div className="section-shell grid h-16 grid-cols-[1fr_auto_1fr] items-center sm:h-20">
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary left navigation">
          {leftNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative text-sm font-medium transition-colors hover:text-[#d8bd78] ${navMuted}`}
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-[#d8bd78] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a
          href="#overview"
          className={`font-display text-2xl italic tracking-wide transition-colors hover:text-[#d8bd78] sm:text-4xl ${navText}`}
        >
          Cedar Heights
        </a>

        <nav className="hidden items-center justify-end gap-8 lg:flex" aria-label="Primary right navigation">
          {rightNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative text-sm font-medium transition-colors hover:text-[#d8bd78] ${navMuted}`}
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-[#d8bd78] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`ml-auto inline-flex h-10 w-10 items-center justify-center rounded-sm border transition-colors sm:h-11 sm:w-11 lg:hidden ${
            scrolled ? "border-[#191714]/15 text-[#191714]" : "border-white/25 text-white"
          }`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#191714]/10 bg-[#f7f1e6] shadow-xl shadow-black/10 lg:hidden"
          >
            <nav className="section-shell flex max-h-[calc(100svh-4rem)] flex-col gap-1 overflow-y-auto py-4" aria-label="Mobile navigation">
              {[...leftNavItems, ...rightNavItems].map((item) => (
                <a
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium text-[#191714]/75 transition-colors hover:text-[#806328]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
