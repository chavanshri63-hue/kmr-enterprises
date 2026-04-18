import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | KMR Enterprises",
  description: "Civil, plumbing, and fire fighting services offered by KMR Enterprises.",
};

const civilServices = [
  "Civil construction work",
  "Chamber construction",
  "Excavation work",
  "Core cutting work",
  "Fire pedestal construction",
  "Road and infrastructure development",
];

const externalPlumbing = [
  "Water supply piping",
  "Drainage systems",
  "Underground pipeline work",
];

const internalPlumbing = [
  "Water supply piping systems",
  "Drainage piping",
  "CP & sanitary installation",
];

const fireFightingServices = [
  "Fire fighting piping systems",
  "Complete installation support",
];

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-10 grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-red-500">Our Services</p>
          <h1 className="mt-3 text-4xl font-bold">Complete Contracting Solutions</h1>
          <p className="mt-4 leading-8 text-slate-300">
            We provide end-to-end civil, plumbing, and fire fighting execution for residential, commercial, industrial, and bungalow projects.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-red-500 hover:text-red-500"
          >
            Request Service Consultation
          </Link>
        </div>
        <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10 md:h-72">
          <Image
            src="/images/service-plumbing.jpg"
            alt="On-site plumbing and civil service work"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-blue-300">Infrastructure & Civil Works</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {civilServices.map((service) => (
              <li key={service}>• {service}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-blue-300">Plumbing Works</h2>
          <p className="mt-4 text-sm font-semibold text-slate-100">External Plumbing</p>
          <ul className="mt-2 space-y-2 text-sm text-slate-300">
            {externalPlumbing.map((service) => (
              <li key={service}>• {service}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-semibold text-slate-100">Internal Plumbing</p>
          <ul className="mt-2 space-y-2 text-sm text-slate-300">
            {internalPlumbing.map((service) => (
              <li key={service}>• {service}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-blue-300">Fire Fighting Works</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {fireFightingServices.map((service) => (
              <li key={service}>• {service}</li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}
