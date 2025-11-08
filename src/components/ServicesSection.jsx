import { Building2, Factory, Gem, Wallet, Globe2, Users, Briefcase, Cog, LineChart } from "lucide-react";

const services = [
  {
    title: "Domestic Recruitment",
    points: [
      "Builders & Real Estate Developers",
      "Manufacturers & Industrial Firms",
      "Chartered Accountants & Accounting Firms",
      "Jewellers & Retail Enterprises",
      "Startups & SMEs",
    ],
    icon: Building2,
  },
  {
    title: "International Recruitment",
    points: [
      "United States – Accounting, Bookkeeping, and Taxation",
      "United Kingdom – Year-End Accounts, VAT, CT600, Payroll",
      "United Arab Emirates – Audit, Taxation, and Finance",
      "Australia & Canada – FP&A, Accounts, and Compliance",
    ],
    icon: Globe2,
  },
  {
    title: "Specialized Roles",
    points: [
      "Accountants & Chartered Accountants (CA)",
      "Finance, Taxation & Audit Professionals",
      "FP&A Analysts",
      "Business Development Executives (BDE) & Managers (BDM)",
      "Social Media Managers, Designers, Civil & Mechanical Engineers",
    ],
    icon: Users,
  },
];

const industries = [
  { name: "Accounting & Finance", icon: Wallet },
  { name: "Engineering & Manufacturing", icon: Cog },
  { name: "Construction & Real Estate", icon: Factory },
  { name: "Retail & Jewellery", icon: Gem },
  { name: "Marketing & Creative", icon: Briefcase },
  { name: "Technology & Professional Services", icon: LineChart },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Recruitment Solutions Tailored to Your Needs
          </h2>
          <p className="mt-3 text-gray-700">
            We provide end-to-end hiring support across India and international markets.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, points, icon: Icon }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-blue-600/10 p-2 text-blue-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
                {points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900">Industries We Serve</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ name, icon: Icon }) => (
              <div key={name} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4">
                <div className="rounded-md bg-indigo-600/10 p-2 text-indigo-700">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-gray-800">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
