import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { navItems } from "../data/siteData.js";
import { prefersReducedMotion, revealOnScroll } from "../utils/animation.js";

export default function Footer() {
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      revealOnScroll(".footer-item", root.current, { y: 28, stagger: 0.09, duration: 0.85, start: "top 88%" });
    },
    { scope: root }
  );

  return (
    <footer ref={root} className="bg-[#191714] pb-24 pt-12 text-white lg:pb-12">
      <div className="section-shell">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div className="footer-item">
            <p className="font-display text-4xl">Cedar Heights</p>
            <p className="mt-4 max-w-xl leading-7 text-white/65">
              A polished real estate and construction website concept for selling units,
              presenting completed work, and turning visitors into qualified leads.
            </p>
          </div>
          <nav className="footer-item flex flex-wrap gap-x-6 gap-y-3 lg:justify-end" aria-label="Footer navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/65 transition hover:text-[#c6a75b]">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-item flex flex-col gap-4 pt-7 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>Demo concept for Lebanese developers, contractors, and property agencies.</p>
          <a href="#overview" className="inline-flex items-center gap-2 transition hover:text-[#c6a75b]">
            Back to top <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
