import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-slate-100">
            <span className="text-amber-200">KMR</span> Enterprises
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Infrastructure | Engineering | Real Estate
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-100">Quick Links</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
            <Link href="/about" className="hover:text-amber-300">About Us</Link>
            <Link href="/services" className="hover:text-amber-300">Our Services</Link>
            <Link href="/projects" className="hover:text-amber-300">Projects</Link>
            <Link href="/contact" className="hover:text-amber-300">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-100">Contact</p>
          <div className="mt-3 space-y-2 text-sm text-slate-300">
            <p>Pune, Maharashtra</p>
            <p>
              <a href="tel:+919822303371" className="hover:text-amber-300">+91 9822303371</a>
              {" / "}
              <a href="tel:+919623069506" className="hover:text-amber-300">+91 9623069506</a>
            </p>
            <p>
              <a href="mailto:info@kmrenterprisesindia.com" className="hover:text-amber-300">
                info@kmrenterprisesindia.com
              </a>
            </p>
            <p>
              <a
                href="https://wa.me/919822303371"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300"
              >
                WhatsApp: +91 9822303371
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/kmr.enterprises?igsh=MTFuNmNydGxyYTZ5Yg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300"
              >
                Instagram: @kmr.enterprises
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
