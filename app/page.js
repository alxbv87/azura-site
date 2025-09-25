import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="font-sans text-gray-900">
      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Incorvia</div>
          <nav className="space-x-6 hidden md:flex">
            <Link href="/" className="text-white hover:text-brand-light">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-brand-light">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-brand-light">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-brand-light">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        {/* Background */}
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center brightness-50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Swift & Reliable Incorporations
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Simplify your business setup in Costa Rica and beyond with Incorvia.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-brand text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-emerald-600 transition"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-light transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 mb-12">
            Comprehensive business solutions tailored for entrepreneurs and
            companies in Costa Rica.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Company Formation",
                desc: "Quick and compliant incorporation services tailored to your needs.",
                link: "/services/company-formation",
              },
              {
                title: "Legal Support",
                desc: "Access expert guidance to ensure your business runs smoothly.",
                link: "/services/legal-support",
              },
              {
                title: "Tax & Compliance",
                desc: "Stay compliant with local regulations without the stress.",
                link: "/services/tax-compliance",
              },
              {
                title: "Residency & Work Permits",
                desc: "Secure legal residency and work permits with ease.",
                link: "/services/residency",
              },
              {
                title: "Virtual Office Solutions",
                desc: "Prestigious business address, mail handling, and virtual assistance.",
                link: "/services/virtual-office",
              },
              {
                title: "Business Consulting",
                desc: "Strategic advice on market entry, partnerships, and growth.",
                link: "/services/consulting",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-8 text-left"
              >
                <h3 className="text-xl font-semibold text-brand mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-600 mb-4">{s.desc}</p>
                <Link
                  href={s.link}
                  className="text-brand-dark font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-brand-dark">
            Why Choose Incorvia?
          </h2>
          <div className="grid md:grid-cols-2 gap-10 text-left">
            {[
              "Fast and efficient incorporation process.",
              "Experienced professionals at your service.",
              "Transparent pricing with no hidden fees.",
              "Comprehensive legal and compliance support.",
            ].map((point, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle className="text-brand w-6 h-6 mt-1" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-12">
            What Our Clients Say
          </h2>
          <div className="space-y-12">
            <blockquote className="text-gray-700 italic max-w-3xl mx-auto">
              “Incorvia made the entire incorporation process seamless. Their
              professionalism and speed exceeded my expectations.”
              <footer className="mt-4 not-italic font-semibold">
                — Jane Doe, Entrepreneur
              </footer>
            </blockquote>
            <blockquote className="text-gray-700 italic max-w-3xl mx-auto">
              “The team’s legal and compliance support gave us confidence to
              focus on growth.”
              <footer className="mt-4 not-italic font-semibold">
                — John Smith, CEO
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-brand-dark py-24 text-white text-center relative">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Incorporate Your Business?
          </h2>
          <p className="mb-8 text-lg text-gray-200">
            Get started today with Incorvia and make the process fast, simple,
            and secure.
          </p>
          <Link
            href="/contact"
            className="bg-brand text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-emerald-600 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
