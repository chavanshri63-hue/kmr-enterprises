import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | KMR Enterprises",
  description: "Project sectors and execution capabilities of KMR Enterprises.",
};

const projectTypes = [
  {
    title: "Commercial Projects",
    description: "Offices, malls, shops, and business spaces with complete infrastructure and plumbing support.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Residential Projects",
    description: "Apartments, housing societies, and buildings for both new developments and upgrades.",
    image:
      "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Industrial Projects",
    description: "Factories, warehouses, and industrial infrastructure requiring durable execution.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Bungalow Projects",
    description: "Complete construction and plumbing solutions for independent homes.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">Project Expertise</p>
        <h1 className="mt-3 text-4xl font-bold">Execution Across Multiple Sectors</h1>
        <p className="mt-4 leading-8 text-slate-300">
          We handle all types of projects including new construction, renovation, and system upgrades with focus on quality, safety, and timeline discipline.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projectTypes.map((project) => (
          <article key={project.title} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
            <div className="relative h-56">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-amber-200">{project.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
        <h2 className="text-2xl font-semibold text-amber-200">Need sector-specific execution support?</h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          Share project scope and we will propose suitable construction, plumbing, and fire fighting execution plans.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-block rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
        >
          Contact Project Team
        </Link>
      </div>
    </div>
  );
}
