import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | KMR Enterprises",
  description: "Get in touch with KMR Enterprises for civil, plumbing, and fire fighting work.",
};

const address = `Shop No. 202, 2nd Floor, Sai Crystal Complex,
New DP Rd, Above Cafe Peter, Above HDFC Bank,
Vishal Nagar, Pimple Nilakh, Pune - 411027`;

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-red-500">Contact Us</p>
        <h1 className="mt-3 text-4xl font-bold">Let Us Build Your Next Project</h1>
        <p className="mt-4 leading-8 text-zinc-600">
          For civil construction, plumbing, or fire fighting work, connect with KMR Enterprises for consultation and execution support.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-blue-800">Office Address</h2>
          <p className="mt-4 whitespace-pre-line text-sm leading-7 text-zinc-600">{address}</p>
          <a
            href="https://maps.google.com/?q=Sai+Crystal+Complex+Vishal+Nagar+Pimple+Nilakh+Pune"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-800 transition hover:border-red-500 hover:text-red-500"
          >
            Open in Maps
          </a>
        </article>

        <article className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-blue-800">Direct Contact</h2>
          <div className="mt-4 space-y-3 text-sm text-zinc-600">
            <p>
              <span className="font-semibold text-zinc-900">Phone: </span>
              <a href="tel:+919822303371" className="hover:text-red-500">+91 9822303371</a>
              {" / "}
              <a href="tel:+919623069506" className="hover:text-red-500">+91 9623069506</a>
            </p>
            <p>
              <span className="font-semibold text-zinc-900">Email: </span>
              <a href="mailto:info@kmrenterprisesindia.com" className="hover:text-red-500">
                info@kmrenterprisesindia.com
              </a>
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+919822303371"
              className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-800 transition hover:border-red-500 hover:text-red-500"
            >
              Call Now
            </a>
            <a
              href="mailto:info@kmrenterprisesindia.com"
              className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-800 transition hover:border-red-500 hover:text-red-500"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/919822303371"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-800 transition hover:border-red-500 hover:text-red-500"
            >
              WhatsApp 9822303371
            </a>
            <a
              href="https://www.instagram.com/kmr.enterprises?igsh=MTFuNmNydGxyYTZ5Yg=="
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-800 transition hover:border-red-500 hover:text-red-500"
            >
              Instagram
            </a>
          </div>
        </article>
      </div>

      <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-blue-800">Explore Before Contact</h2>
        <p className="mt-3 text-sm leading-7 text-zinc-600">
          You can review our services and project sectors to share a more specific requirement with us.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/services"
            className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-800 transition hover:border-red-500 hover:text-red-500"
          >
            View Services
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-800 transition hover:border-red-500 hover:text-red-500"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
