 codex/-yoso-o1ydi8
"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { CursorGlow } from "@/components/CursorGlow";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { contacts, services, works } from "@/components/site-data";

const stats = [
  ["6+", "服务方向"],
  ["20+", "商业视觉项目"],
  ["100%", "定制化设计"],
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  return (
    <motion.main
      className="overflow-hidden bg-paper text-ink"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <CursorGlow />
      <Header />
      <Hero />

      <section id="services" className="section-shell py-24 sm:py-32">
        <SectionTitle eyebrow="Services" title="不做模板化交付，用策略和审美组织品牌的每一次出现。" />
        <motion.div
          className="mt-14 grid auto-rows-[18rem] gap-4 md:grid-cols-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } }, hidden: {} }}
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.015 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-ink/10 bg-white/50 p-7 shadow-[0_20px_70px_rgba(13,13,13,0.06)] backdrop-blur transition-colors hover:bg-ink hover:text-paper ${index === 0 || index === 5 ? "md:col-span-3" : "md:col-span-2"}`}
            >
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gold/10 blur-2xl transition group-hover:bg-gold/30" />
              <span className="font-display text-6xl text-gold/100">0{index + 1}</span>
              <div className="absolute bottom-7 left-7 right-7 translate-y-5 transition duration-500 group-hover:translate-y-0">
                <h3 className="text-3xl font-medium tracking-[-0.03em]">{service.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-ink/60 opacity-70 transition duration-500 group-hover:text-paper/70 group-hover:opacity-100">{service.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="works" className="bg-ink py-24 text-paper sm:py-32">
        <div className="section-shell">
          <SectionTitle eyebrow="Works" title="作品不是陈列，而是品牌被看见的现场。" text="案例图片统一从 public/images 读取，悬停可查看项目标题、类别与行动按钮。" />
          <motion.div
            className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={{ visible: { transition: { staggerChildren: 0.09 } }, hidden: {} }}
          >
            {works.map((work, index) => (
              <motion.article
                key={work.title}
                variants={fadeUp}
                className={`group relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-paper/10 bg-paper/5 ${index === 0 || index === 3 ? "md:col-span-4" : "md:col-span-2"} ${index === 1 || index === 4 ? "md:min-h-[32rem]" : ""}`}
              >
                <Image src={work.image} alt={work.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 transition group-hover:opacity-[0.86]" />
                <motion.div className="absolute inset-x-0 bottom-0 p-7" initial={false}>
                  <p className="text-xs uppercase tracking-[0.32em] text-gold">{work.category}</p>
                  <div className="mt-3 flex translate-y-6 items-end justify-between gap-4 transition duration-500 group-hover:translate-y-0">
                    <h3 className="text-3xl font-medium tracking-[-0.04em]">{work.title}</h3>
                    <span className="rounded-full border border-paper/30 px-4 py-2 text-xs opacity-0 transition duration-500 group-hover:opacity-100">查看</span>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>


      <section id="about" className="section-shell py-24 sm:py-32">
 codex/-yoso-o1ydi8
        <div className="grid gap-10 rounded-[2.8rem] border border-ink/10 bg-white/60 p-8 shadow-[0_30px_100px_rgba(13,13,13,0.08)] backdrop-blur sm:p-12 lg:grid-cols-[0.85fr_1.15fr] lg:p-16">
          <SectionTitle eyebrow="About" title="有所取舍，才有所抵达。" />
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } }, hidden: {} }}
          >
            <motion.p variants={fadeUp} className="text-lg font-light leading-9 text-ink/70">
              YOSO·有所设计工作室相信，设计不是装饰，而是品牌与人发生关系的方式。我们以年轻的审美判断、清晰的策略梳理和高完成度的视觉执行，帮助新消费、生活方式与文化创意品牌建立更稳定的表达。
            </motion.p>
            <motion.div variants={fadeUp} className="grid gap-3 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-[1.6rem] bg-ink p-6 text-paper">
                  <p className="font-display text-5xl text-gold">{value}</p>
                  <p className="mt-3 text-sm text-paper/60">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32">
        <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />
        <div className="section-shell relative z-10 text-center">
          <p className="eyebrow">Contact</p>
          <h2 className="mx-auto mt-6 max-w-5xl font-display text-[clamp(4rem,12vw,9.5rem)] font-semibold leading-[0.86] tracking-[-0.07em]">让设计有所回应</h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-paper/70">如果你正在准备一个新品牌，或希望刷新一次表达，我们可以从一次简短沟通开始。</p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {contacts.map((contact) => (
              <motion.a
                key={contact.label}
                href={contact.label === "邮箱" ? `mailto:${contact.value}` : "#"}
                whileHover={{ y: -8, scale: 1.03 }}
                className="magnetic-button relative overflow-hidden rounded-[1.8rem] border border-paper/10 bg-paper/10 p-7 text-left backdrop-blur transition hover:border-gold/60 hover:shadow-[0_0_60px_rgba(184,155,94,0.18)]"
              >
                <span className="relative z-10 block text-xs uppercase tracking-[0.34em] text-gold">{contact.label}</span>
                <span className="relative z-10 mt-5 block text-2xl font-medium">{contact.value}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </motion.main>

}
