 codex/-yoso-o1ydi8
"use client";

import { motion, useScroll, useTransform } from "framer-motion";


const navItems = [
  ["首页", "#home"],
  ["服务", "#services"],
  ["案例", "#works"],
  ["关于", "#about"],
  ["联系", "#contact"],
];

export function Header() {
 codex/-yoso-o1ydi8
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 120], ["rgba(8, 8, 8, 0.26)", "rgba(8, 8, 8, 0.72)"]);
  const boxShadow = useTransform(scrollY, [0, 120], ["0 0 0 rgba(0,0,0,0)", "0 18px 60px rgba(0,0,0,0.32)"]);
  const borderColor = useTransform(scrollY, [0, 120], ["rgba(255,255,255,0.14)", "rgba(255,255,255,0.24)"]);

  return (
    <motion.header
      className="fixed inset-x-0 top-4 z-50 px-4 text-paper sm:top-6"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.nav
        className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border px-4 backdrop-blur-2xl sm:h-16 sm:px-6"
        style={{ backgroundColor, boxShadow, borderColor }}
      >
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-paper/20 bg-paper text-xs font-semibold text-ink transition group-hover:scale-105">有</span>
          <span className="hidden font-display text-lg font-semibold tracking-wide sm:block">YOSO</span>
        </a>

        <div className="hidden items-center gap-1 text-sm text-paper/70 md:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="group relative rounded-full px-4 py-2 transition hover:text-paper">
              <span>{label}</span>
              <span className="absolute bottom-1.5 left-4 h-px w-0 bg-gold transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
            </a>
          ))}
        </div>

        <a href="#contact" className="relative overflow-hidden rounded-full border border-paper/20 bg-paper px-4 py-2 text-xs font-medium text-ink shadow-[0_0_30px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_0_42px_rgba(184,155,94,0.34)] sm:px-5">
          预约咨询
        </a>
      </motion.nav>
    </motion.header>

}
