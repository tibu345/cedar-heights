import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Send } from "lucide-react";
import AnimatedButton from "./AnimatedButton.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { whatsappUrl } from "../data/siteData.js";
import { prefersReducedMotion, revealOnScroll } from "../utils/animation.js";

const inputClass =
  "w-full rounded-sm border border-[#191714]/12 bg-white/70 px-4 py-3 text-[#191714] outline-none transition focus:border-[#9a7a35] focus:bg-white";

export default function LeadForm() {
  const root = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      revealOnScroll(".contact-aside", root.current, { y: 32, duration: 0.9, start: "top 78%" });
      revealOnScroll(".lead-form", root.current, { y: 42, scale: 0.985, duration: 1, start: "top 76%" });
    },
    { scope: root }
  );

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" ref={root} className="section-shell py-16 pb-28 sm:py-24 lg:pb-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="contact-aside">
          <SectionHeading
            eyebrow="Lead capture"
            title="Convert visitor attention into site visits and quote requests."
            copy="The form is frontend-only for the demo. In production it can connect to WhatsApp, email, a CRM, Google Sheets, or a contractor's sales dashboard."
          />

          <motion.div
            whileHover={{ y: -5, boxShadow: "0 22px 50px rgba(25, 23, 20, 0.1)" }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="mt-10 border border-[#191714]/10 bg-[#fffaf1] p-6"
          >
            <p className="font-display text-3xl text-[#191714]">WhatsApp-ready CTA</p>
            <p className="mt-4 leading-7 text-[#5e5549]">
              Lebanese property buyers often prefer quick messaging. This site keeps WhatsApp visible without making the design feel cheap.
            </p>
            <AnimatedButton
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              variant="gold"
              className="mt-6"
            >
              Ask on WhatsApp <Send size={17} />
            </AnimatedButton>
          </motion.div>
        </div>

        <form onSubmit={handleSubmit} className="lead-form border border-[#191714]/10 bg-[#fffaf1] p-5 shadow-xl shadow-black/5 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#514a40]">Full name</span>
              <input className={inputClass} name="name" type="text" autoComplete="name" required />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#514a40]">Phone number</span>
              <input className={inputClass} name="phone" type="tel" autoComplete="tel" required />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#514a40]">Interested in</span>
              <select className={inputClass} name="interest" defaultValue="2 Bedrooms">
                <option>1 Bedroom</option>
                <option>2 Bedrooms</option>
                <option>Duplex</option>
                <option>Construction website</option>
                <option>Renovation portfolio</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#514a40]">Preferred contact method</span>
              <select className={inputClass} name="contact" defaultValue="WhatsApp">
                <option>WhatsApp</option>
                <option>Phone call</option>
                <option>Email</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-[#514a40]">Message</span>
              <textarea
                className={`${inputClass} min-h-36 resize-y`}
                name="message"
                placeholder="Tell us what you are looking for..."
              />
            </label>
          </div>

          <AnimatedButton as="button" type="submit" variant="primary" className="mt-6 w-full">
            Send Request <Send size={17} />
          </AnimatedButton>

          <AnimatePresence>
            {submitted && (
            <motion.div
              initial={{ autoAlpha: 0, y: 14 }}
              animate={{ autoAlpha: 1, y: 0 }}
              exit={{ autoAlpha: 0, y: 10 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="mt-5 flex items-start gap-3 border border-[#9a7a35]/25 bg-[#9a7a35]/10 p-4 text-[#514a40]"
            >
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#806328]" size={20} />
              <p>
                Request received. This demo message can be replaced with a CRM handoff,
                WhatsApp redirect, or email notification.
              </p>
            </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}
