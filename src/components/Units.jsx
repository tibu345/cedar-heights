import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import AnimatedButton from "./AnimatedButton.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { units, whatsappUrl } from "../data/siteData.js";
import { prefersReducedMotion, revealOnScroll } from "../utils/animation.js";

export default function Units() {
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      revealOnScroll(".unit-card", root.current, { y: 40, stagger: 0.13, duration: 0.95, ease: "power3.out" });
    },
    { scope: root }
  );

  return (
    <section id="units" ref={root} className="section-shell py-16 sm:py-24">
      <SectionHeading
        eyebrow="Available residences"
        title="Unit pages built to turn interest into qualified inquiries."
        copy="Each apartment type gives buyers the essentials immediately: size, price range, layout promise, and a direct path to contact the sales team."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {units.map((unit) => {
          const Icon = unit.icon;
          return (
            <motion.article
              key={unit.title}
              whileHover={{ y: -8, boxShadow: "0 24px 54px rgba(25, 23, 20, 0.12)" }}
              whileTap={{ scale: 0.995 }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="unit-card flex min-h-[360px] flex-col border border-[#191714]/10 bg-[#fffaf1] p-6 shadow-sm shadow-black/5"
            >
              <div className="flex h-13 w-13 items-center justify-center rounded-sm bg-[#9a7a35]/10 text-[#806328]">
                <Icon size={25} />
              </div>
              <h3 className="mt-8 font-display text-3xl text-[#191714]">{unit.title}</h3>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#806328]">
                {unit.size}
              </p>
              <p className="mt-5 leading-7 text-[#5e5549]">{unit.detail}</p>
              <div className="mt-auto pt-8">
                <p className="mb-5 text-xl font-semibold text-[#191714]">{unit.price}</p>
                <AnimatedButton
                  href={`${whatsappUrl}?text=${encodeURIComponent(`Hello, I want to ask about the ${unit.title} unit at Cedar Heights.`)}`}
                  variant="outline"
                  className="w-full"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ask About This Unit <MessageCircle size={17} />
                </AnimatedButton>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
