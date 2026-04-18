import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | KMR Enterprises",
  description: "We have received your quote request and will contact you shortly.",
};

export default function ThankYouPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-red-500">
        Request Received
      </p>
      <h1 className="mt-3 text-4xl font-bold">
        Thank You for Reaching Out to{" "}
        <span className="text-blue-300">KMR Enterprises</span>
      </h1>
      <p className="mt-5 leading-8 text-slate-300">
        Your quote request has been received successfully. Our team will review
        the details and get back to you within 24 hours on your preferred contact
        method.
      </p>
      <p className="mt-3 text-sm text-slate-400">
        For urgent queries, feel free to call or WhatsApp us directly.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="tel:+919822303371"
          className="rounded-full border border-slate-500 px-6 py-2 text-sm font-semibold text-slate-200 transition hover:border-red-500 hover:text-red-500"
        >
          Call +91 9822303371
        </a>
        <a
          href="https://wa.me/919822303371"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-slate-500 px-6 py-2 text-sm font-semibold text-slate-200 transition hover:border-red-500 hover:text-red-500"
        >
          WhatsApp Us
        </a>
        <Link
          href="/"
          className="rounded-full border border-slate-500 px-6 py-2 text-sm font-semibold text-slate-200 transition hover:border-red-500 hover:text-red-500"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
