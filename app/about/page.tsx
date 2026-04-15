import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | KMR Enterprises",
  description: "Know the history and leadership behind KMR Enterprises.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">About Us</p>
        <h1 className="text-4xl font-bold leading-tight">
          The <span className="text-amber-200">KMR Enterprises</span> Legacy
        </h1>
        <p className="leading-8 text-slate-300">
          KMR Enterprises is a Pune-based contracting company built on practical expertise and long-term industry commitment.
        </p>
        <div className="space-y-4 leading-8 text-slate-300">
          <p>
            The journey began in 1995 when Shivaji Rathod worked on road construction in Khandala, Lonavala, and Hinjewadi.
          </p>
          <p>
            The work expanded under Mohan Rathod, who became a trusted labour contractor in civil and infrastructure projects.
          </p>
          <p>
            KMR Enterprises is now led by Krishna Mohan Rathod, a qualified engineer with 7+ years of site experience, combining field wisdom with modern engineering execution.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-block rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
        >
          Discuss Your Project
        </Link>
      </div>
      <div className="space-y-6">
        <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10 md:h-72">
          <Image
            src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1200&q=80"
            alt="Civil construction site team"
            fill
            className="object-cover"
          />
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-amber-200">Mission & Vision</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Our mission is to deliver high-quality, reliable, and cost-effective construction and plumbing solutions while building long-term client relationships.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Our vision is to become a recognized and trusted name in civil, plumbing, and fire fighting works across Maharashtra.
          </p>
        </div>
      </div>
    </div>
  );
}
