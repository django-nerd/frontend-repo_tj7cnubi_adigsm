import { ArrowRight, Phone, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-indigo-700 text-white">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-cyan-300/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32 relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Empowering Businesses. Building Careers.
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Connecting Talent with Opportunity — Across India & Beyond
          </h1>

          <p className="mt-5 text-lg text-white/90">
            Your trusted partner in professional recruitment for Accounting, Finance, Engineering, and Corporate roles — across India and international markets.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-medium text-blue-700 shadow hover:bg-blue-50 transition"
            >
              Hire Talent Now
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-blue-500/20 px-5 py-3 font-medium text-white ring-1 ring-inset ring-white/40 hover:bg-blue-500/30 transition"
            >
              Submit Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-white/90">
            <div className="inline-flex items-center gap-2"><Phone className="h-5 w-5"/> Employers: +91 94294 60311</div>
            <div className="inline-flex items-center gap-2"><Phone className="h-5 w-5"/> Candidates: +91 88497 65988</div>
            <div className="inline-flex items-center gap-2"><Mail className="h-5 w-5"/> info@horizontncs.com</div>
          </div>
        </div>
      </div>
    </section>
  );
}
