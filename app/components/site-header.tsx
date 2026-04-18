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
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
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
            <span className="text-xl font-semibold tracking-wide text-blue-800 md:text-2xl">
              KMR Enterprises
            </span>
            <span className="text-[10px] font-medium tracking-wide text-zinc-600 md:text-xs">
              Infrastructure | Engineering | Real Estate
            </span>
          </span>
        </Link>
        <nav className="hidden gap-5 text-sm font-medium text-zinc-800 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-red-500">
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+919822303371"
          className="rounded-full border border-zinc-300 px-4 py-2 text-xs font-semibold text-zinc-800 transition hover:border-red-500 hover:text-red-500 md:text-sm"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}
