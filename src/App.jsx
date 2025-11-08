import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ImpactAndContact from "./components/ImpactAndContact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#home" className="text-xl font-semibold text-blue-700">Horizon Recruitment Services</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ImpactAndContact />
      </main>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p>Horizon Recruitment Services — Empowering Businesses. Building Careers.</p>
            <p>© 2025 Horizon Recruitment Services | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
