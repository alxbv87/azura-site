// app/page.tsx or pages/index.tsx
import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle, Menu, X } from "lucide-react";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const services = [
    {
      title: "Company Formation",
      desc: "Quick and compliant incorporation services tailored to your needs.",
      href: "/services/company-formation",
    },
    {
      title: "Legal Support",
      desc: "Access expert guidance to ensure your business runs smoothly.",
      href: "/services/legal-support",
    },
    {
      title: "Tax & Compliance",
      desc: "Stay compliant with local regulations without the stress.",
      href: "/services/tax-compliance",
    },
    {
      title: "Residency & Work Permits",
      desc: "We help you and your team secure legal residency and work permits with ease.",
      href: "/services/residency",
    },
    {
      title: "Virtual Office Solutions",
      desc: "Get a prestigious business address, mail handling, and virtual assistance.",
      href: "/services/virtual-office",
    },
    {
      title: "Business Consulting",
      desc: "Strategic advice on market entry, partnerships, and growth in Costa Rica.",
      href: "/services/consulting",
    },
  ];

  return (
    <main className="font-sans text-gray-900 antialiased">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Incorvia
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/services" className="text-white hover:text-white/80 transition">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-white/80 transition">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-white/80 transition">
              Contact
            </Link>
            <Link
              href="/contact"
              className="ml-4 bg-white text-brand px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu"
              className="text-white"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-gradient-to-r from-brand to-brand-dark px-6 pb-6">
            <nav className="flex flex-col gap-3">
              <Link href="/services" className="text-white block py-2">
                Services
              </Link>
              <Link href="/about" className="text-white block py-2">
                About
              </Link>
              <Link href="/contact" className="text-white block py-2">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative flex items-center justify-center text-center text-white h-[80vh] md:h-screen pt-20">
        {/* keep the gradient hero so nothing outside needs new assets */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand to-brand-dark"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Swift & Reliable Incorporations
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90">
            Simplify your business setup in Costa Rica and beyond with Incorvia.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-brand px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
            >
              Get Started
            </Link>

            <Link
              href="/services"
              className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-2 text-gray-600">
              Comprehensive business solutions tailored for entrepreneurs and companies in Costa Rica.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-brand mb-3">{s.title}</h3>
                <p className="text-gray-600 mb-4">{s.desc}</p>
                <Link href={s.href} className="text-brand-dark font-semibold hover:underline">
                  Learn More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Why Choose Incorvia?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            {[
              "Fast and efficient incorporation process.",
              "Experienced professionals at your service.",
              "Transparent pricing with no hidden fees.",
              "Comprehensive legal and compliance support.",
            ].map((p) => (
              <div key={p} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand mt-1 flex-shrink-0" />
                <p className="text-gray-700">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Clients Say</h2>

          <div className="space-y-10">
            <blockquote className="text-gray-700 italic max-w-3xl mx-auto">
              “Incorvia made the entire incorporation process seamless. Their professionalism and speed exceeded my expectations.”
              <footer className="mt-4 not-italic font-semibold">— Jane Doe, Entrepreneur</footer>
            </blockquote>

            <blockquote className="text-gray-700 italic max-w-3xl mx-auto">
              “The team’s legal and compliance support gave us confidence to focus on growth.”
              <footer className="mt-4 not-italic font-semibold">— John Smith, CEO</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Incorporate Your Business?</h2>
          <p className="mb-8 text-lg text-gray-200">
            Get started today with Incorvia and make the process fast, simple, and secure.
          </p>
          <Link
            href="/contact"
            className="bg-brand text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-emerald-600 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Contact</h4>
            <p className="mt-2 text-gray-600">
              +506 2103-7294<br />
              info@incorvia.com
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900">Offices</h4>
            <p className="mt-2 text-gray-600">
              San José, Costa Rica<br />
              Guanacaste Office
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900">Follow</h4>
            <div className="mt-3 flex gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="py-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} Incorvia • All rights reserved</div>
      </footer>
    </main>
  );
}
