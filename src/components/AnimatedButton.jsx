import { motion } from "motion/react";

const variants = {
  primary: "bg-[#191714] text-[#f7f1e6] hover:bg-[#2d2923]",
  gold: "bg-[#9a7a35] text-white hover:bg-[#87682b]",
  lightOutline:
    "border border-white/35 bg-white/10 text-white backdrop-blur-md hover:border-[#c6a75b] hover:bg-white/16 hover:text-white",
  outline:
    "border border-[#191714]/20 bg-white/20 text-[#191714] hover:border-[#9a7a35] hover:text-[#806328]",
};

export default function AnimatedButton({
  as = "a",
  href,
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const Component = motion[as] || motion.a;

  return (
    <Component
      href={href}
      whileHover={{ y: -2, boxShadow: "0 16px 34px rgba(25, 23, 20, 0.14)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.11em] transition-colors sm:px-5 sm:text-sm sm:tracking-[0.14em] ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
