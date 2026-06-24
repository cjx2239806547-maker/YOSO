import Image from "next/image";
import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";
import { contacts, services, works } from "@/components/site-data";

export default function Home() {
  return (
    <main id="home" className="overflow-hidden text-ink">
      <Header />
      <section className="section-shell flex min-h-screen flex-col justify-center pb-20 pt-32">
        <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="animate-fadeUp">
            <p className="eyebrow">Young Strategy · Modern Design</p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(4.2rem,13vw,11rem)] font-semibold leading-[0.86] tracking-[-0.06em]">
              YOSO·有所设计工作室
            </h1>
            <p className="mt-8 max-w-2xl text-2xl font-light leading-relaxed text-ink/70 sm:text-3xl">
              让品牌有所表达，让设计有所回应
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#works" className="rounded-full bg-ink px-7 py-4 text-sm font-medium text-paper transition hover:scale-105 hover:bg-gold">查看案例</a>
              <a href="#contact" className="rounded-full border border-ink/30 px-7 py-4 text-sm font-medium transition hover:scale-105 hover:border-ink hover:bg-white/60">联系我们</a>
            </div>
          </div>
          <div className="animate-fadeUp rounded-[2rem] border border-ink/10 bg-white/35 p-6 shadow-2xl shadow-ink/5 [animation-delay:180ms]">
            <div className="aspect-[4/5] rounded-[1.5rem] border border-ink/10 bg-[linear-gradient(135deg,#111_0_48%,#b89b5e_48%_52%,#f6f3ee_52%)] p-5">
              <div className="flex h-full flex-col justify-between border border-paper/70 p-5 text-paper">
                <span className="font-display text-5xl">有</span>
                <span className="self-end text-right text-xs uppercase tracking-[0.5em]">Design with response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-shell py-24 sm:py-32">
        <SectionTitle eyebrow="Services" title="从策略到视觉，给品牌清晰而有质感的表达。" />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="reveal group bg-paper p-8 transition hover:bg-ink hover:text-paper" style={{ animationDelay: `${index * 60}ms` }}>
              <span className="font-display text-5xl text-gold">0{index + 1}</span>
              <h3 className="mt-12 text-2xl font-medium">{service.title}</h3>
              <p className="mt-4 leading-7 text-ink/60 transition group-hover:text-paper/70">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="works" className="section-shell py-24 sm:py-32">
        <SectionTitle eyebrow="Works" title="用克制的视觉语言，建立可被记住的品牌现场。" text="图片均从 public/images 读取，后期只需替换同名文件或更新数据即可完成案例维护。" />
        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {works.map((work, index) => (
            <article key={work.title} className="reveal group mb-6 break-inside-avoid overflow-hidden rounded-[1.8rem] border border-ink/10 bg-white/45 p-3" style={{ animationDelay: `${index * 70}ms` }}>
              <div className="overflow-hidden rounded-[1.35rem] bg-mist">
                <Image src={work.image} alt={work.title} width={900} height={index % 2 ? 1100 : 760} className="h-auto w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between px-2 py-5">
                <h3 className="text-lg font-medium">{work.title}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-ink/45">{work.category}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section-shell py-24 sm:py-32">
        <div className="grid gap-12 rounded-[2.5rem] bg-ink p-8 text-paper sm:p-12 lg:grid-cols-[0.85fr_1.15fr] lg:p-16">
          <SectionTitle eyebrow="About" title="有所取舍，才有所抵达。" />
          <div className="reveal space-y-6 text-lg font-light leading-9 text-paper/72">
            <p>YOSO·有所设计工作室相信，设计不是装饰，而是品牌与人发生关系的方式。我们以年轻的审美判断、清晰的策略梳理和高完成度的视觉执行，帮助新消费、生活方式与文化创意品牌建立更稳定的表达。</p>
            <p>我们偏爱黑白灰的秩序，也保留东方语境里的呼吸感：留白、尺度、克制与细节。每一次创作，都希望让品牌有所表达，让设计有所回应。</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell py-24 sm:py-32">
        <SectionTitle eyebrow="Contact" title="如果你正在准备一个新品牌，或希望刷新一次表达，我们可以聊聊。" />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {contacts.map((contact) => (
            <a key={contact.label} href={contact.label === "邮箱" ? `mailto:${contact.value}` : "#"} className="reveal rounded-[1.5rem] border border-ink/10 bg-white/40 p-7 transition hover:-translate-y-1 hover:border-gold hover:bg-white/75">
              <p className="eyebrow">{contact.label}</p>
              <p className="mt-5 text-2xl font-medium">{contact.value}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
