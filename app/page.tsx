import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./components/hero-slider";

const keyHighlights = [
  "30+ years of civil and infrastructure experience",
  "Engineer-led planning with on-site execution strength",
  "Residential, commercial, industrial, and bungalow projects",
];

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <section className="relative isolate overflow-hidden border-b border-zinc-200">
        <Image
          src="/images/hero-construction.jpg"
          alt="Construction site infrastructure work"
          fill
          priority
          className="-z-20 object-cover"
        />
        <div className="-z-10 absolute inset-0 bg-gradient-to-br from-white/90 via-zinc-50/85 to-blue-50/90" />
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-24 md:grid-cols-2 md:py-28">
          <div className="space-y-6">
            <p className="inline-block rounded-full border border-red-500/50 bg-red-600/10 px-4 py-1 text-sm font-medium text-blue-800">
              KMR Enterprises | Building Infrastructure with Strength, Precision & 30+ Years of Experience
            </p>
            <h1 className="text-4xl font-bold leading-tight text-blue-800 md:text-5xl">
              KMR Enterprises for End-to-End Civil, Plumbing and Fire Fighting Solutions
            </h1>
            <p className="text-base leading-8 text-zinc-800 md:text-lg">
              KMR Enterprises is a trusted Pune-based contracting company delivering quality infrastructure work for new construction and renovation projects.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:border-red-500 hover:text-red-500"
              >
                View Services
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:border-red-500 hover:text-red-500"
              >
                Contact Team
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-xl shadow-zinc-900/10 backdrop-blur">
            <h2 className="text-xl font-semibold text-blue-800">Why KMR Enterprises</h2>
            <ul className="mt-4 space-y-3 text-zinc-800">
              {keyHighlights.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="text-red-500">●</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-blue-800">About KMR Enterprises</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Founded on a legacy that started in 1995 and now led by engineer Krishna Mohan Rathod.
            </p>
            <Link href="/about" className="mt-4 inline-block text-sm font-semibold text-red-500 hover:text-blue-800">
              Read full story →
            </Link>
          </article>
          <article className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-blue-800">Our Services</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Civil works, external and internal plumbing, and complete fire fighting piping support.
            </p>
            <Link href="/services" className="mt-4 inline-block text-sm font-semibold text-red-500 hover:text-blue-800">
              Explore services →
            </Link>
          </article>
          <article className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-blue-800">Project Expertise</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              We execute commercial, residential, industrial, and bungalow projects of varying scale.
            </p>
            <Link href="/projects" className="mt-4 inline-block text-sm font-semibold text-red-500 hover:text-blue-800">
              See project sectors →
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}
