import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading.jsx";
import { features, services } from "../data/siteData.js";
import { prefersReducedMotion, revealOnScroll } from "../utils/animation.js";

export default function Features() {
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      revealOnScroll(".service-card", root.current, { y: 24, stagger: 0.08, duration: 0.75, start: "top 78%" });
      revealOnScroll(".feature-card", ".features-grid", { y: 34, stagger: 0.08, duration: 0.85, start: "top 76%" });
    },
    { scope: root }
  );

  return (
    <section id="features" ref={root} className="bg-[#1d1a16] py-16 text-white sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <SectionHeading
            eyebrow="Features and sales tools"
            title="A project presentation that feels premium and works commercially."
            copy="The same structure can pitch a new development, a contractor portfolio, or a renovation offer while keeping the visitor focused on booking a conversation."
            inverted
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.label}
                  whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.075)" }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="service-card border border-white/10 bg-white/[0.04] p-4"
                >
                  <Icon className="text-[#c6a75b]" size={20} />
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/75">
                    {service.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="features-grid mt-12 grid gap-px overflow-hidden bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                whileHover={{ y: -5, backgroundColor: "#242018" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="feature-card bg-[#1d1a16] p-6 sm:p-8"
              >
                <Icon className="text-[#c6a75b]" size={26} />
                <h3 className="mt-8 font-display text-2xl text-white">{feature.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
