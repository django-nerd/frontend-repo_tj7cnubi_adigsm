import { Clock, Building, Globe2, Users, Phone, Mail } from "lucide-react";

export default function ImpactAndContact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Impact */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Numbers That Define Us
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <Stat icon={Users} label="Candidates Placed" value="1,000+" />
              <Stat icon={Building} label="Domestic Firms Served" value="300+" />
              <Stat icon={Globe2} label="International Corporates" value="50+" />
              <Stat icon={Clock} label="Avg. Shortlist Turnaround" value="72 hrs" />
            </div>
            <p className="mt-6 text-gray-700">
              At Horizon, every number tells a story — of trust, growth, and lasting relationships.
            </p>
          </div>

          {/* Contact */}
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900">Let’s Build the Future Together</h3>
            <p className="mt-2 text-gray-700">Paldi, Ahmedabad, Gujarat, India</p>
            <div className="mt-6 space-y-4 text-gray-800">
              <a href="tel:+919429460311" className="flex items-center gap-3 hover:text-blue-700">
                <Phone className="h-5 w-5 text-blue-700" /> Employers: +91 94294 60311
              </a>
              <a href="tel:+918849765988" className="flex items-center gap-3 hover:text-blue-700">
                <Phone className="h-5 w-5 text-blue-700" /> Candidates: +91 88497 65988
              </a>
              <a href="mailto:info@horizontncs.com" className="flex items-center gap-3 hover:text-blue-700">
                <Mail className="h-5 w-5 text-blue-700" /> info@horizontncs.com
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-md bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition">Hire Talent</a>
              <a href="#contact" className="rounded-md bg-gray-900 px-5 py-3 text-white font-medium hover:bg-black transition">Submit Your Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-gray-200 p-5">
      <div className="flex items-center gap-3">
        <div className="rounded-md bg-blue-600/10 p-2 text-blue-700">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className="text-sm text-gray-600">{label}</div>
        </div>
      </div>
    </div>
  );
}
