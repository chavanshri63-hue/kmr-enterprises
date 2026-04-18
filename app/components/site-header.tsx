import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-400/15 bg-slate-950/90 backdrop-blur supports-[backdrop-filter]:bg-slate-950/75">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/kmr-logo.png"
            alt="KMR Enterprises logo"
            width={56}
            height={56}
            className="h-11 w-11 rounded-md bg-white object-contain md:h-14 md:w-14"
          />
          <span className="flex flex-col">
            <span className="text-xl font-semibold tracking-wide text-blue-300 md:text-2xl">
              KMR Enterprises
            </span>
            <span className="hidden text-[11px] font-medium tracking-wide text-slate-300 md:block">
              Infrastructure | Engineering | Real Estate
            </span>
          </span>
        </Link>
        <nav className="hidden gap-5 text-sm font-medium text-slate-200 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-red-500">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/quote"
          className="rounded-full border border-slate-500 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-red-500 hover:text-red-500 md:text-sm"
        >
          Request Quote
        </Link>
      </div>
    </header>
  );
}
