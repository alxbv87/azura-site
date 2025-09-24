'use client';

import Image from "next/image";
import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";

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
            src="/about.jpg"
            alt="About Incorvia"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Lawyer Profile with Photos Around Text */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Meet Our Legal Lead</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our team is led by seasoned professionals with deep expertise in Costa Rican law and international business.
          </p>
        </div>

        {/* Responsive Grid: Photos + Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Photo 1 (Top Left) */}
          <div className="lg:col-span-3">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/JJ1.jpg"
                alt="Juan J. Acuna Leandro - Professional Photo 1"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bio (Center) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Msc Juan J. Acuna Leandro
            </h3>
            <p className="text-lg text-brand font-semibold">
              Attorney Specialist & Notary Public
            </p>

            <p>
              With extensive international training and over a decade of professional experience, Msc Juan J. Acuna Leandro offers trusted legal counsel backed by advanced specialization in Criminal Law, Notarial and Registry Law, and Real Estate.
            </p>

            <p>
              He holds a Master’s Degree in Criminal Law from Universidad Latina de Costa Rica, and has pursued advanced postgraduate studies across Latin America and Europe, including:
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Criminal Evidence Law (Universidad Castilla-La Mancha, Toledo, Spain)</li>
              <li>Advanced Criminal Law (Universidad Nacional de Mar del Plata, Argentina)</li>
              <li>Notarial and Registry Law (Universidad Internacional de las Américas)</li>
            </ul>

            <p>
              Recognized as an international speaker, he has shared his expertise on organized crime, anti-corruption, compliance, and anti-money laundering in global forums. His professional contributions have earned him the honor of serving as a member of several commissions of the Judiciary of Costa Rica.
            </p>

            <p>
              In addition to his legal practice, Msc Juan J. Acuna Leandro is a trusted television contributor and legal analyst, frequently invited to provide expert commentary on high-profile legal matters. His comprehensive knowledge of real estate law further enhances his ability to protect clients’ interests with precision and integrity.
            </p>

            <p>
              A results-driven attorney and notary public, Msc Juan J. Acuna Leandro is committed to providing clients with strategic, ethical, and effective legal solutions.
            </p>
          </div>

          {/* Photo 2 (Top Right) */}
          <div className="lg:col-span-3">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/JJ2.jpg"
                alt="Juan J. Acuna Leandro - Professional Photo 2"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Photo 3 (Bottom Left) */}
          <div className="lg:col-span-3 mt-4 lg:mt-0">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/JJ3.jpg"
                alt="Juan J. Acuna Leandro - Professional Photo 3"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Empty spacer to center bottom photo */}
          <div className="lg:col-span-6"></div>

          {/* Photo 4 (Bottom Right) */}
          <div className="lg:col-span-3 mt-4 lg:mt-0">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/JJ4.jpg"
                alt="Juan J. Acuna Leandro - Professional Photo 4"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-white py-20 border-t border-gray-200">
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