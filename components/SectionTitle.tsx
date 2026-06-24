export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
codex/-yoso-o1ydi8
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-current sm:text-6xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-current opacity-[0.65] sm:text-lg">{text}</p> : null}

  );
}
