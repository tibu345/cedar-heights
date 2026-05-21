import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";
import { Clock, MapPin, Navigation } from "lucide-react";
import AnimatedButton from "./AnimatedButton.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { locationHighlights } from "../data/siteData.js";
import { prefersReducedMotion, revealOnScroll } from "../utils/animation.js";

export default function Location() {
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      revealOnScroll(".location-item", root.current, { y: 28, stagger: 0.1, duration: 0.85, start: "top 76%" });
      revealOnScroll(".location-map", root.current, { y: 36, scale: 0.985, duration: 1, start: "top 74%" });
    },
    { scope: root }
  );

  return (
    <section id="location" ref={root} className="bg-[#efe3d0] py-16 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Location"
            title="Achrafieh positioning presented with sales-team clarity."
            copy="A good project website should make the neighborhood feel practical, not vague. This layout gives buyers the daily-life reasons to book a visit."
          />

          <div className="mt-9 space-y-4">
            {locationHighlights.map((item) => (
              <div key={item} className="location-item flex gap-4 border-b border-[#191714]/10 pb-4">
                <MapPin className="mt-1 shrink-0 text-[#9a7a35]" size={20} />
                <p className="leading-7 text-[#514a40]">{item}</p>
              </div>
            ))}
          </div>

          <div className="location-item mt-9 flex flex-col gap-3 sm:flex-row">
            <AnimatedButton href="#contact" variant="gold">
              Book a Site Visit <Navigation size={17} />
            </AnimatedButton>
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#514a40]">
              <Clock className="text-[#9a7a35]" size={18} />
              Visits by appointment
            </div>
          </div>
        </div>

        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="location-map relative min-h-[440px] overflow-hidden rounded-sm border border-[#191714]/10 bg-[#1d1a16] p-5 text-white"
        >
          <div className="absolute inset-0 opacity-65">
            <motion.img
              src="https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?auto=format&fit=crop&w=1300&q=82"
              alt="Beirut city streets and buildings"
              whileHover={{ scale: 1.035 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5" />
          <div className="relative flex h-full min-h-[400px] flex-col justify-end">
            <div className="max-w-sm border border-white/15 bg-black/25 p-5 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c6a75b]">
                Map preview
              </p>
              <h3 className="mt-3 font-display text-3xl">Cedar Heights, Achrafieh</h3>
              <p className="mt-4 leading-7 text-white/75">
                Replace this visual with a live map embed, site pin, and nearby landmarks for each client pitch.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
