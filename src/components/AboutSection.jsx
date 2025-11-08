export default function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Building Careers. Empowering Businesses.
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Welcome to Horizon Recruitment Services, a premier recruitment agency based in Paldi, Ahmedabad (Gujarat, India). We specialize in domestic and international hiring across multiple industries — helping businesses find exceptional professionals for Accounting, Taxation, Audit, FP&A, Engineering, Marketing, and Corporate roles.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              With over <strong>1,000+</strong> successful placements across <strong>300+</strong> Indian firms and <strong>50+</strong> international corporates, Horizon has become a trusted name in recruitment excellence. We are continuously expanding and scaling our presence in GIFT City and Dubai, strengthening our reach and enabling companies to access top global talent.
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                <p className="mt-2 text-gray-700">To become a globally recognized recruitment partner, known for reliability, precision, and long-term relationships.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                <p className="mt-2 text-gray-700">To deliver tailored recruitment solutions that empower businesses to succeed and individuals to reach their full potential.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Founder’s Profile — Mr. Preet Shah</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Founder & CEO, Horizon Recruitment Services & Horizon Learning Academy. With over 8 years of diversified experience across Accounts, Tax, Finance, Sales, Marketing, and HR, Mr. Preet Shah brings a unique combination of strategic thinking and people expertise to recruitment.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              An MBA in Finance, Preet’s career journey is built on the belief that recruitment isn’t just about filling positions — it’s about building futures. His entrepreneurial vision led to the creation of Horizon Recruitment Services and Horizon Learning Academy in 2022.
            </p>
            <blockquote className="mt-4 rounded-lg bg-gray-50 p-4 text-gray-800 border-l-4 border-blue-600">
              “My vision is simple — to help every candidate find the right job and every company hire the right talent, efficiently and effectively.” — <span className="font-medium">Preet Shah</span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
