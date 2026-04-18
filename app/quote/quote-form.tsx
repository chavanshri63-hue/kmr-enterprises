"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type SelectWithOtherProps = {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
};

function SelectWithOther({ label, name, options, required }: SelectWithOtherProps) {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-slate-200">
        {label}
        {required ? <span className="text-red-500"> *</span> : null}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
        <option value="Other">Other</option>
      </select>
      {value === "Other" ? (
        <input
          type="text"
          name={`${name}_other`}
          placeholder={`Please specify your ${label.toLowerCase()}`}
          required={required}
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
        />
      ) : null}
    </div>
  );
}

const inputClass =
  "rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500";

type Status = "idle" | "submitting" | "error";

export default function QuoteForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("form-name", "quote");

    setStatus("submitting");
    setErrorMsg("");

    try {
      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (response.ok || response.status === 0) {
        router.push("/quote/thank-you");
        return;
      }

      setStatus("error");
      setErrorMsg(
        "Submission failed. Please try again, or reach us on WhatsApp / phone directly."
      );
    } catch {
      setStatus("error");
      setErrorMsg(
        "Network error. Please try again, or reach us on WhatsApp / phone directly."
      );
    }
  }

  return (
    <form
      name="quote"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="mt-10 space-y-10"
    >
      <input type="hidden" name="form-name" value="quote" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>

      <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
        <h2 className="text-xl font-semibold text-blue-300">1. Your Details</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-200">
              Full Name<span className="text-red-500"> *</span>
            </label>
            <input id="name" name="name" type="text" required className={inputClass} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-medium text-slate-200">
              Phone<span className="text-red-500"> *</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              pattern="[0-9+\\s-]{7,}"
              placeholder="+91 98765 43210"
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-200">
              Email (optional)
            </label>
            <input id="email" name="email" type="email" className={inputClass} />
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
        <h2 className="text-xl font-semibold text-blue-300">2. Project Details</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <SelectWithOther
            label="Service Needed"
            name="service"
            required
            options={[
              "Civil Works",
              "Plumbing Works",
              "Fire Fighting Works",
              "Combined (Civil + Plumbing + Fire)",
            ]}
          />
          <SelectWithOther
            label="Project Type"
            name="project_type"
            required
            options={["Residential", "Commercial", "Industrial", "Bungalow"]}
          />
          <SelectWithOther
            label="Project Stage"
            name="project_stage"
            options={[
              "Planning",
              "Design Completed",
              "Ready to Execute",
              "Renovation",
            ]}
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="area" className="text-sm font-medium text-slate-200">
              Estimated Area (sq. ft.)
            </label>
            <input
              id="area"
              name="area"
              type="text"
              placeholder="e.g. 1200 sq ft"
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="location" className="text-sm font-medium text-slate-200">
              Project Location<span className="text-red-500"> *</span>
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              placeholder="City / Area"
              className={inputClass}
            />
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
        <h2 className="text-xl font-semibold text-blue-300">3. Timeline & Budget</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <SelectWithOther
            label="Preferred Start Timeline"
            name="timeline"
            options={["Immediate", "Within 1 Month", "2-3 Months", "Flexible"]}
          />
          <SelectWithOther
            label="Estimated Budget Range"
            name="budget"
            options={[
              "Below 5 Lakh",
              "5 - 15 Lakh",
              "15 - 50 Lakh",
              "50 Lakh - 1 Crore",
              "Above 1 Crore",
              "Not Sure",
            ]}
          />
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
        <h2 className="text-xl font-semibold text-blue-300">4. Additional Info</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <SelectWithOther
            label="Preferred Contact Method"
            name="contact_method"
            options={["Phone Call", "WhatsApp", "Email"]}
          />
          <SelectWithOther
            label="How Did You Hear About Us?"
            name="referral_source"
            options={["Google Search", "Instagram", "Referral / Word of Mouth", "Past Client"]}
          />
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-medium text-slate-200">Site Visit Required?</label>
            <div className="flex gap-6 text-sm text-slate-300">
              <label className="flex items-center gap-2">
                <input type="radio" name="site_visit" value="Yes" className="accent-red-500" /> Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="site_visit" value="No" className="accent-red-500" /> No
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="site_visit" value="Not Sure" className="accent-red-500" />{" "}
                Not Sure
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="description" className="text-sm font-medium text-slate-200">
              Project Description / Specific Requirements
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              placeholder="Briefly describe your project, materials preference, or any special requirements."
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="attachment" className="text-sm font-medium text-slate-200">
              Attach Drawings / Plans / Reference Photos (optional)
            </label>
            <input
              id="attachment"
              name="attachment"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.dwg"
              className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300 file:mr-3 file:rounded-md file:border-0 file:bg-slate-800 file:px-3 file:py-1 file:text-xs file:text-slate-200"
            />
            <p className="text-xs text-slate-400">PDF, JPG, PNG, DWG — max 8 MB</p>
          </div>
        </div>
      </section>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-full border border-slate-500 px-8 py-3 text-sm font-semibold text-slate-200 transition hover:border-red-500 hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting..." : "Submit Quote Request"}
          </button>
          <a
            href="https://wa.me/919822303371?text=Hi%20KMR%20Enterprises%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-500 px-8 py-3 text-sm font-semibold text-slate-200 transition hover:border-red-500 hover:text-red-500"
          >
            Or Ask on WhatsApp
          </a>
        </div>
        {status === "error" ? (
          <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {errorMsg}
          </p>
        ) : null}
      </div>
    </form>
  );
}
