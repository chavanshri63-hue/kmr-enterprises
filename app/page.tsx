import Image from "next/image";
import Link from "next/link";

const keyHighlights = [
  "30+ years of civil and infrastructure experience",
  "Engineer-led planning with on-site execution strength",
  "Residential, commercial, industrial, and bungalow projects",
];

export default function Home() {
  return (
    <div>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
          alt="Construction site infrastructure work"
          fill
          priority
          className="-z-20 object-cover"
        />
        <div className="-z-10 absolute inset-0 bg-slate-950/70" />
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-24 md:grid-cols-2 md:py-28">
          <div className="space-y-6">
            <p className="inline-block rounded-full border border-amber-300/50 bg-amber-300/10 px-4 py-1 text-sm font-medium text-amber-200">
              KMR Enterprises | Building Infrastructure with Strength, Precision & 30+ Years of Experience
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              <span className="text-amber-200">KMR Enterprises</span> for End-to-End Civil, Plumbing and Fire Fighting Solutions
            </h1>
            <p className="text-base leading-8 text-slate-200 md:text-lg">
              KMR Enterprises is a trusted Pune-based contracting company delivering quality infrastructure work for new construction and renovation projects.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
              >
                View Services
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-300/50 px-6 py-3 text-sm font-semibold transition hover:border-amber-200 hover:text-amber-200"
              >
                Contact Team
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold text-amber-200">Why KMR Enterprises</h2>
            <ul className="mt-4 space-y-3 text-slate-200">
              {keyHighlights.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="text-amber-300">●</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <h3 className="text-xl font-semibold text-amber-200">About KMR Enterprises</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Founded on a legacy that started in 1995 and now led by engineer Krishna Mohan Rathod.
            </p>
            <Link href="/about" className="mt-4 inline-block text-sm font-semibold text-amber-300 hover:text-amber-200">
              Read full story →
            </Link>
          </article>
          <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <h3 className="text-xl font-semibold text-amber-200">Our Services</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Civil works, external and internal plumbing, and complete fire fighting piping support.
            </p>
            <Link href="/services" className="mt-4 inline-block text-sm font-semibold text-amber-300 hover:text-amber-200">
              Explore services →
            </Link>
          </article>
          <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <h3 className="text-xl font-semibold text-amber-200">Project Expertise</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              We execute commercial, residential, industrial, and bungalow projects of varying scale.
            </p>
            <Link href="/projects" className="mt-4 inline-block text-sm font-semibold text-amber-300 hover:text-amber-200">
              See project sectors →
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}
