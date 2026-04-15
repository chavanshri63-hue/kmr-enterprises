import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/70 bg-amber-300/10 text-base font-bold text-amber-200">
            KE
          </span>
          <span className="text-xl font-semibold tracking-wide text-slate-100 md:text-2xl">
            <span className="text-amber-200">KMR Enterprises</span>
          </span>
        </Link>
        <nav className="hidden gap-5 text-sm font-medium text-slate-200 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-amber-300">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full border border-amber-300/60 px-4 py-2 text-xs font-semibold text-amber-200 transition hover:bg-amber-300 hover:text-slate-950 md:text-sm"
        >
          Request Quote
        </Link>
      </div>
    </header>
  );
}
