"use client";

import Image from "next/image";
import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa"; // 👈 icons

export default function About() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
 <section className="relative bg-gradient-to-r from-brand to-brand-dark text-white py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About Incorvia</h1>
          <p className="text-lg max-w-2xl mx-auto text-white/90">
            We specialize in fast, reliable, and professional incorporation
            services for entrepreneurs and companies expanding into Costa Rica.
            Our mission is to simplify the process and ensure full compliance
            every step of the way.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4">
            Incorvia was founded with the vision of providing streamlined,
            transparent, and cost-effective incorporation services. We understand
            that starting a business in a new country can feel overwhelming —
            that’s why we’re here to make it simple.
          </p>
          <p className="text-gray-600">
            Our experienced team of legal experts, accountants, and business
            consultants have helped hundreds of companies establish their
            presence in Costa Rica. From the moment you contact us, you’ll have
            a dedicated partner guiding you through every step.
          </p>
        </div>
        <div className="relative h-80 w-full">
          <Image
            src="/about.jpg" // 👈 Place your image in /public/about.jpg
            alt="About Incorvia"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Our Core Principles
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 rounded-2xl shadow hover:shadow-lg transition">
              <FaBullseye className="text-brand text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-brand mb-3">Mission</h3>
              <p className="text-gray-600">
                To empower entrepreneurs and companies by providing seamless,
                professional incorporation and compliance solutions in Costa Rica.
              </p>
            </div>
            <div className="p-8 rounded-2xl shadow hover:shadow-lg transition">
              <FaEye className="text-brand text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-brand mb-3">Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and innovative partner for business
                incorporation and corporate services in the region.
              </p>
            </div>
            <div className="p-8 rounded-2xl shadow hover:shadow-lg transition">
              <FaHandshake className="text-brand text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-brand mb-3">Values</h3>
              <p className="text-gray-600">
                Integrity, transparency, efficiency, and customer-centric service
                are at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-4xl font-bold text-brand">10+</h3>
            <p className="text-gray-600 mt-2">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-brand">500+</h3>
            <p className="text-gray-600 mt-2">Companies Incorporated</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-brand">100%</h3>
            <p className="text-gray-600 mt-2">Client Satisfaction Rate</p>
          </div>
        </div>
      </section>
    </main>
  );
}
