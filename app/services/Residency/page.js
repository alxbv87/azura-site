'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ResidencyPermitsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand to-brand-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Residency &amp; Work Permits
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            We help you and your team secure legal residency and work permits with ease.
          </p>
          <Link
            href="/"
            className="inline-flex items-center border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-light transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Choose Costa Rica for Residency?
              </h2>
              <p className="text-gray-600 mb-6">
                Costa Rica offers one of the most accessible residency programs in Latin America for entrepreneurs and investors. With a stable democracy, excellent healthcare, and a high quality of life, it&apos;s the perfect destination for international professionals.
              </p>
              <p className="text-gray-600">
                Our team guides you through every step of the process, ensuring a smooth transition for you and your family.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-brand mb-4">Our Process:</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">1</span>
                  <span>Initial consultation to determine the best residency category for you</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">2</span>
                  <span>Document preparation and notarization</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">3</span>
                  <span>Submission to immigration authorities</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">4</span>
                  <span>Follow-up and status updates until approval</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Residency Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Residency Options
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-brand mb-3">Investor Residency</h3>
                <p className="text-gray-600 mb-4">
                  For those investing $150,000+ in a Costa Rican business or property.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Permanent residency option</li>
                  <li>• Family members included</li>
                  <li>• Path to citizenship</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-brand mb-3">Rentista Residency</h3>
                <p className="text-gray-600 mb-4">
                  For individuals with guaranteed monthly income of $2,500+.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• No investment required</li>
                  <li>• Renewable every 2 years</li>
                  <li>• Work permit available</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-brand mb-3">Pensionado Residency</h3>
                <p className="text-gray-600 mb-4">
                  For retirees with $1,000+ monthly pension income.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Tax benefits on imports</li>
                  <li>• Discounts on services</li>
                  <li>• Family members eligible</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Work Permits */}
          <div className="mb-16 bg-brand-light/10 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-brand mb-6 text-center">
              Work Permits for Your Team
            </h2>
            <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
              We also handle work permits for your employees, ensuring your business can operate with the talent you need.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">For Company Owners:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand mr-2">•</span>
                    Work permit included with investor residency
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">•</span>
                    No additional requirements
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">For Employees:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand mr-2">•</span>
                    Specialized skills requirement
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">•</span>
                    1-2 year processing time
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits of Costa Rican Residency */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Benefits of Costa Rican Residency
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Stable Democracy</h3>
                <p className="text-sm text-gray-600">Over 70 years of peaceful democratic governance</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Healthcare System</h3>
                <p className="text-sm text-gray-600">Universal healthcare with high-quality private options</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Natural Beauty</h3>
                <p className="text-sm text-gray-600">Beaches, mountains, rainforests, and volcanoes</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Expat Community</h3>
                <p className="text-sm text-gray-600">Large international community for easy integration</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Secure Your Residency in Costa Rica?
            </h3>
            <p className="text-gray-600 mb-8">
              Let our experts guide you through the process.
            </p>
            <Link
              href="/contact"
              className="bg-brand text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-dark transition inline-block"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}