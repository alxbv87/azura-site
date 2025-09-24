'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CompanyFormationPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand to-brand-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Company Formation
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Quick and compliant incorporation services tailored to your needs.
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
                Streamlined Company Formation in Costa Rica
              </h2>
              <p className="text-gray-600 mb-6">
                We handle all aspects of company formation in Costa Rica, ensuring your business is established quickly, efficiently, and in full compliance with local regulations.
              </p>
              <p className="text-gray-600">
                Whether you&apos;re an individual entrepreneur or an international corporation, our tailored approach ensures your company structure aligns with your business goals and tax optimization strategy.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-brand mb-4">Our Process:</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">1</span>
                  <span>Consultation to determine optimal company structure</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">2</span>
                  <span>Preparation of articles of incorporation and bylaws</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">3</span>
                  <span>Notarization and registration with Public Registry</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">4</span>
                  <span>Tax ID registration and compliance setup</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Company Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Company Structures We Form
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-brand mb-3">S.A. (Sociedad An&oacute;nima)</h3>
                <p className="text-gray-600 mb-4">
                  The most common corporate structure in Costa Rica, similar to a corporation.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Limited liability protection</li>
                  <li>• Requires board of directors</li>
                  <li>• Ideal for medium to large businesses</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-brand mb-3">S.R.L. (Sociedad de Responsabilidad Limitada)</h3>
                <p className="text-gray-600 mb-4">
                  Similar to an LLC, perfect for small to medium businesses.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Limited liability protection</li>
                  <li>• More flexible management structure</li>
                  <li>• Fewer formal requirements</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-brand mb-3">Free Zone Entity</h3>
                <p className="text-gray-600 mb-4">
                  Special structure for businesses operating in Costa Rica&apos;s Free Trade Zones.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Significant tax advantages</li>
                  <li>• Import/export benefits</li>
                  <li>• Ideal for export-oriented businesses</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline & Pricing */}
          <div className="mb-16 bg-brand-light/10 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-brand mb-6 text-center">
              Formation Timeline &amp; Investment
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Typical Timeline</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>1-2 weeks:</strong> Document preparation</p>
                  <p><strong>2-3 weeks:</strong> Notarization &amp; registration</p>
                  <p><strong>1 week:</strong> Tax ID &amp; bank account setup</p>
                  <p><strong>Total:</strong> 4-6 weeks on average</p>
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Investment Required</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Legal fees:</strong> Starting at $1,500</p>
                  <p><strong>Registration fees:</strong> $300-$500</p>
                  <p><strong>Minimum capital:</strong> No legal minimum</p>
                  <p><strong>Bank account:</strong> $1,000+ deposit</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Form Your Company in Costa Rica?
            </h3>
            <p className="text-gray-600 mb-8">
              Let our experts handle the entire incorporation process for you.
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