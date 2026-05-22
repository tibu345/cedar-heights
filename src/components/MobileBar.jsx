import { Building2, CalendarDays, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { whatsappUrl } from "../data/siteData.js";

const mobileActions = [
  {
    label: "WhatsApp",
    href: whatsappUrl,
    icon: MessageCircle,
    className: "bg-[#9a7a35] text-white",
    external: true,
  },
  {
    label: "Units",
    href: "#units",
    icon: Building2,
    className: "bg-[#fffaf1] text-[#191714] border border-[#191714]/12",
  },
  {
    label: "Book Visit",
    href: "#contact",
    icon: CalendarDays,
    className: "bg-[#191714] text-[#f7f1e6]",
  },
];

export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#191714]/10 bg-[#f7f1e6]/95 p-1.5 pb-[calc(0.375rem+env(safe-area-inset-bottom))] shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-2 sm:pb-[calc(0.5rem+env(safe-area-inset-bottom))] lg:hidden">
      <div className="grid grid-cols-3 gap-2">
        {mobileActions.map((action) => {
          const Icon = action.icon;

          return (
            <motion.a
              key={action.label}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noreferrer" : undefined}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`mobile-action inline-flex h-11 items-center justify-center gap-1 rounded-sm px-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] sm:h-12 sm:gap-1.5 sm:px-2 sm:text-[11px] sm:tracking-[0.1em] ${action.className}`}
            >
              <Icon size={16} />
              {action.label}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
