import type { Metadata } from "next";
import QuoteForm from "./quote-form";

export const metadata: Metadata = {
  title: "Request a Quote | KMR Enterprises",
  description:
    "Share your project requirements and our team will prepare a customized quotation for civil, plumbing, and fire fighting works.",
};

export default function QuotePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-red-500">Request a Quote</p>
        <h1 className="mt-3 text-4xl font-bold">
          Let&apos;s Plan Your Next <span className="text-blue-300">Project</span>
        </h1>
        <p className="mt-4 leading-8 text-slate-300">
          Fill this form with as much detail as you can. Our team at KMR Enterprises
          will review your requirement and get back to you within 24 hours with a
          tailored quotation.
        </p>
        <p className="mt-2 text-sm text-slate-400">
          Fields marked <span className="text-red-500">*</span> are required. Every
          dropdown has an <span className="text-slate-200">&quot;Other&quot;</span> option
          so you can describe your own requirement.
        </p>
      </div>

      <QuoteForm />
    </div>
  );
}
