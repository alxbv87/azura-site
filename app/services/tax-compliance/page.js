'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TaxCompliancePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand to-brand-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tax & Compliance
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Stay compliant with local regulations without the stress.
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
                Stress-Free Tax Compliance in Costa Rica
              </h2>
              <p className="text-gray-600 mb-6">
                Costa Rican tax regulations can be complex for foreign businesses. Our tax and compliance services ensure you meet all requirements while optimizing your tax position.
              </p>
              <p className="text-gray-600">
                From monthly filings to annual declarations, our team of tax experts handles everything, giving you peace of mind and allowing you to focus on growing your business.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-brand mb-4">Our Tax Services:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-brand mr-3">•</span>
                  Tax registration and setup
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3">•</span>
                  Monthly and quarterly tax filings
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3">•</span>
                  Annual tax declarations
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3">•</span>
                  Tax planning and optimization
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3">•</span>
                  Audit support and representation
                </li>
              </ul>
            </div>
          </div>

          {/* Costa Rican Tax System */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Understanding Costa Rica's Tax System
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-brand mb-4">Corporate Income Tax</h3>
                <p className="text-gray-600 mb-4">
                  Costa Rica operates on a territorial tax system, meaning only income generated within Costa Rica is taxed.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Standard rate:</strong> 30% on net profits</li>
                  <li>• <strong>Small business rate:</strong> 10-20% for qualifying small businesses</li>
                  <li>• <strong>Filing:</strong> Monthly provisional payments, annual declaration</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-brand mb-4">Sales Tax (IVA)</h3>
                <p className="text-gray-600 mb-4">
                  Value Added Tax applies to most goods and services sold in Costa Rica.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Standard rate:</strong> 13%</li>
                  <li>• <strong>Registration threshold:</strong> ₡10 million annual sales</li>
                  <li>• <strong>Filing:</strong> Monthly declarations and payments</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-brand mb-4">Withholding Taxes</h3>
                <p className="text-gray-600 mb-4">
                  Applicable on certain payments to non-residents and service providers.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Dividends:</strong> 15% (may be reduced by treaties)</li>
                  <li>• <strong>Interest:</strong> 15% (may be reduced by treaties)</li>
                  <li>• <strong>Services:</strong> 25% on payments to non-residents</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-brand mb-4">Payroll Taxes</h3>
                <p className="text-gray-600 mb-4">
                  Employers are responsible for various payroll-related contributions.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Social Security:</strong> 26.33% of salary (employer portion)</li>
                  <li>• <strong>Workmen's Compensation:</strong> 1.5-3.75% depending on industry</li>
                  <li>• <strong>Annual Bonus:</strong> Mandatory 13th-month payment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Compliance Packages */}
          <div className="mb-16 bg-brand-light/10 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-brand mb-6 text-center">
              Tax & Compliance Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Startup Package</h3>
                <div className="text-2xl font-bold text-brand mb-4">$250/month</div>
                <ul className="text-sm text-gray-700 space-y-2 mb-4">
                  <li>• Tax registration setup</li>
                  <li>• Monthly sales tax filing</li>
                  <li>• Quarterly income tax estimates</li>
                  <li>• Annual tax declaration</li>
                </ul>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Growth Package</h3>
                <div className="text-2xl font-bold text-brand mb-4">$450/month</div>
                <ul className="text-sm text-gray-700 space-y-2 mb-4">
                  <li>• All Startup Package services</li>
                  <li>• Payroll tax calculations and filings</li>
                  <li>• Withholding tax management</li>
                  <li>• Quarterly financial reporting</li>
                  <li>• Tax planning consultations</li>
                </ul>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Enterprise Package</h3>
                <div className="text-2xl font-bold text-brand mb-4">$800/month</div>
                <ul className="text-sm text-gray-700 space-y-2 mb-4">
                  <li>• All Growth Package services</li>
                  <li>• Transfer pricing documentation</li>
                  <li>• International tax compliance</li>
                  <li>• Audit representation</li>
                  <li>• Dedicated tax advisor</li>
                  <li>• Monthly financial analysis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tax Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Tax Benefits & Incentives
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-brand mb-4">Free Zone Benefits</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    0% income tax on exports for 8-12 years
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    0% import duties on raw materials and equipment
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    0% sales tax on exports
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    50% reduction on local sales income tax
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-brand mb-4">Other Incentives</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    R&D tax credits for innovative companies
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    Tourism industry tax incentives
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    Renewable energy project benefits
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    Double taxation treaties with 15+ countries
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Simplify Your Tax Compliance in Costa Rica?
            </h3>
            <p className="text-gray-600 mb-8">
              Let our tax experts handle your compliance while you focus on your business.
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