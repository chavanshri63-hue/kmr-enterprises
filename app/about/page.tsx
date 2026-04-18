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
        <p className="text-sm font-semibold uppercase tracking-wider text-red-500">About Us</p>
        <h1 className="text-4xl font-bold leading-tight">
          The <span className="text-blue-800">KMR Enterprises</span> Legacy
        </h1>
        <p className="leading-8 text-zinc-600">
          KMR Enterprises is a Pune-based contracting company built on practical expertise and long-term industry commitment.
        </p>
        <div className="space-y-4 leading-8 text-zinc-600">
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
          className="inline-block rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:border-red-500 hover:text-red-500"
        >
          Discuss Your Project
        </Link>
      </div>
      <div className="space-y-6">
        <div className="relative h-64 overflow-hidden rounded-2xl border border-zinc-200 md:h-72">
          <Image
            src="/images/about-team.jpg"
            alt="Civil construction site team"
            fill
            className="object-cover"
          />
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-blue-800">Mission & Vision</h2>
          <p className="mt-3 text-sm leading-7 text-zinc-600">
            Our mission is to deliver high-quality, reliable, and cost-effective construction and plumbing solutions while building long-term client relationships.
          </p>
          <p className="mt-3 text-sm leading-7 text-zinc-600">
            Our vision is to become a recognized and trusted name in civil, plumbing, and fire fighting works across Maharashtra.
          </p>
        </div>
      </div>
    </div>
  );
}
