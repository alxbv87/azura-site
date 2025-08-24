import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand to-brand-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Fast & Reliable Incorporations
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Simplify your business setup in Costa Rica and beyond with Incorvia.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/contact"
              className="bg-white text-brand px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-light transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-brand mb-4">
                Company Formation
              </h3>
              <p className="text-gray-600 mb-4">
                Quick and compliant incorporation services tailored to your needs.
              </p>
              <Link
                href="/services/company-formation"
                className="text-brand font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-brand mb-4">
                Legal Support
              </h3>
              <p className="text-gray-600 mb-4">
                Access expert guidance to ensure your business runs smoothly.
              </p>
              <Link
                href="/services/legal-support"
                className="text-brand font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-brand mb-4">
                Tax & Compliance
              </h3>
              <p className="text-gray-600 mb-4">
                Stay compliant with local regulations without the stress.
              </p>
              <Link
                href="/services/tax-compliance"
                className="text-brand font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Extra Service 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-brand mb-4">
                Residency & Work Permits
              </h3>
              <p className="text-gray-600 mb-4">
                We help you and your team secure legal residency and work permits with ease.
              </p>
              <Link
                href="/services/residency"
                className="text-brand font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Extra Service 5 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-brand mb-4">
                Virtual Office Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Get a prestigious business address, mail handling, and virtual assistance.
              </p>
              <Link
                href="/services/virtual-office"
                className="text-brand font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Extra Service 6 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-brand mb-4">
                Business Consulting
              </h3>
              <p className="text-gray-600 mb-4">
                Strategic advice on market entry, partnerships, and growth in Costa Rica.
              </p>
              <Link
                href="/services/consulting"
                className="text-brand font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            Why Choose Incorvia?
          </h2>
          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-brand w-6 h-6 mt-1" />
              <p className="text-gray-700">
                Fast and efficient incorporation process.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-brand w-6 h-6 mt-1" />
              <p className="text-gray-700">
                Experienced professionals at your service.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-brand w-6 h-6 mt-1" />
              <p className="text-gray-700">
                Transparent pricing with no hidden fees.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-brand w-6 h-6 mt-1" />
              <p className="text-gray-700">
                Comprehensive legal and compliance support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-brand py-16 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Incorporate Your Business?
        </h2>
        <p className="mb-8 text-lg">
          Get started today with Incorvia and make the process fast, simple, and secure.
        </p>
        <Link
          href="/contact"
          className="bg-white text-brand px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
