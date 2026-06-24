"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const title = "让品牌有所表达，让设计有所回应";
const serviceTags = ["品牌视觉", "包装设计", "IP形象", "商业海报", "AI创意"];

export function Hero() {
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.32], [0, 96]);
  const visualScale = useTransform(scrollYProgress, [0, 0.32], [1, 1.13]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.32], [0.36, 0.72]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-ink text-paper">
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-[url('/images/hero-cover.svg')] bg-cover bg-center opacity-80"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1.18 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        style={{ scale: visualScale }}
      />
      <motion.div aria-hidden className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-[14%] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-gold/20 blur-3xl"
        animate={{ x: [0, 42, -28, 0], y: [0, -20, 26, 0], opacity: [0.34, 0.52, 0.26, 0.34] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[8%] right-[8%] h-[22rem] w-[22rem] rounded-full border border-paper/20"
        animate={{ rotate: 360, scale: [1, 1.08, 1] }}
        transition={{ rotate: { duration: 38, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
      />
      <div aria-hidden className="hero-grid absolute inset-0 opacity-30" />

      <motion.div className="section-shell relative z-10 pt-24" style={{ y: titleY }}>
        <motion.div
          className="mx-auto flex max-w-6xl flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.055, delayChildren: 0.18 } }, hidden: {} }}
        >
          <motion.p
            className="rounded-full border border-paper/20 bg-paper/10 px-5 py-2 text-xs uppercase tracking-[0.34em] text-paper/75 backdrop-blur-md"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
          >
            Design Studio · Brand Visual · AI Creative
          </motion.p>
          <motion.p
            className="mt-8 text-sm uppercase tracking-[0.7em] text-gold/90 sm:text-base"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
          >
            YOSO·有所设计工作室
          </motion.p>
          <h1 className="pixel-title mt-6 max-w-6xl text-[clamp(3.4rem,10.8vw,10.4rem)] font-black leading-[0.92] tracking-[-0.08em]">
            {title.split("").map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                className="inline-block"
                variants={{ hidden: { opacity: 0, y: 24, filter: "blur(10px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } } }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="mt-8 max-w-3xl text-base font-light leading-8 text-paper/70 sm:text-xl"
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          >
            以策略理解品牌，以视觉回应商业，让每一次表达都更有识别度。
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          >
            <motion.a whileHover={{ y: -5, scale: 1.04 }} whileTap={{ scale: 0.98 }} href="#works" className="magnetic-button relative overflow-hidden rounded-full bg-paper px-8 py-4 text-sm font-semibold text-ink shadow-[0_0_46px_rgba(255,255,255,0.22)]">
              <span className="relative z-10">查看案例</span>
            </motion.a>
            <motion.a whileHover={{ y: -5, scale: 1.04 }} whileTap={{ scale: 0.98 }} href="#contact" className="magnetic-button relative overflow-hidden rounded-full border border-paper/25 bg-paper/10 px-8 py-4 text-sm font-semibold text-paper backdrop-blur-md">
              <span className="relative z-10">联系我们</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-8 z-10">
        <div className="section-shell flex flex-col gap-5 text-paper/70 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            {serviceTags.map((tag) => (
              <span key={tag} className="rounded-full border border-paper/20 bg-paper/10 px-4 py-2 text-xs backdrop-blur-md">{tag}</span>
            ))}
          </motion.div>
          <motion.a
            href="#services"
            className="group flex w-fit items-center gap-3 text-xs uppercase tracking-[0.32em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.35, duration: 0.7 }}
          >
            Scroll
            <span className="relative h-10 w-px overflow-hidden bg-paper/20">
              <motion.span className="absolute left-0 top-0 h-4 w-px bg-gold" animate={{ y: [0, 40, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
