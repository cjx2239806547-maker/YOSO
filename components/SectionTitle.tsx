export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="reveal max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-6xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-ink/62 sm:text-lg">{text}</p> : null}
    </div>
  );
}
