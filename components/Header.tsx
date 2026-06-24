const navItems = [
  ["首页", "#home"],
  ["服务", "#services"],
  ["案例", "#works"],
  ["关于", "#about"],
  ["联系", "#contact"],
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/80 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-xl font-semibold tracking-wide">YOSO</a>
        <div className="hidden items-center gap-8 text-sm text-ink/70 md:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-ink">{label}</a>
          ))}
        </div>
        <a href="#contact" className="rounded-full border border-ink px-4 py-2 text-xs font-medium transition hover:bg-ink hover:text-paper">预约咨询</a>
      </nav>
    </header>
  );
}
