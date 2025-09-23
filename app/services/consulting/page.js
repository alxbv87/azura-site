'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BusinessConsultingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand to-brand-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Business Consulting
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Strategic advice on market entry, partnerships, and growth in Costa Rica.
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
                Navigate the Costa Rican Market with Confidence
              </h2>
              <p className="text-gray-600 mb-6">
                Entering a new market can be challenging. Our business consulting services provide you with the local knowledge, strategic insights, and practical guidance you need to succeed in Costa Rica.
              </p>
              <p className="text-gray-600">
                With decades of combined experience helping international businesses establish and grow in Costa Rica, our team will help you avoid common pitfalls and capitalize on unique opportunities.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-brand mb-4">Our Expertise:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-brand mr-3">•</span>
                  Market entry strategy and feasibility studies
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3">•</span>
                  Regulatory compliance and legal requirements
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3">•</span>
                  Partnership and acquisition opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3">•</span>
                  Tax optimization and financial planning
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3">•</span>
                  Talent acquisition and HR best practices
                </li>
              </ul>
            </div>
          </div>

          {/* Consulting Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Our Consulting Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-brand mb-4">Market Entry Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive analysis and strategy for entering the Costa Rican market.
                </p>
                <ul className="text-sm text-gray-700 space-y-2 mb-4">
                  <li>• Market research and competitive analysis</li>
                  <li>• Regulatory landscape assessment</li>
                  <li>• Entry strategy development</li>
                  <li>• Risk assessment and mitigation</li>
                </ul>
                <div className="text-lg font-bold text-brand">Starting at $1,500</div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-brand mb-4">Business Setup Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Guidance through the entire business establishment process.
                </p>
                <ul className="text-sm text-gray-700 space-y-2 mb-4">
                  <li>• Entity selection and structure</li>
                  <li>• Licensing and permit requirements</li>
                  <li>• Banking and financial setup</li>
                  <li>• Tax registration and compliance</li>
                </ul>
                <div className="text-lg font-bold text-brand">Starting at $1,200</div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-brand mb-4">Growth Strategy Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Strategic planning to expand and scale your existing business.
                </p>
                <ul className="text-sm text-gray-700 space-y-2 mb-4">
                  <li>• Market expansion strategies</li>
                  <li>• Partnership and acquisition opportunities</li>
                  <li>• Operational efficiency improvements</li>
                  <li>• Financial optimization</li>
                </ul>
                <div className="text-lg font-bold text-brand">Starting at $2,000</div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-brand mb-4">Ongoing Advisory Services</h3>
                <p className="text-gray-600 mb-4">
                  Continuous support and guidance as your business grows.
                </p>
                <ul className="text-sm text-gray-700 space-y-2 mb-4">
                  <li>• Monthly strategy sessions</li>
                  <li>• Regulatory updates and compliance</li>
                  <li>• Performance monitoring and KPIs</li>
                  <li>• Crisis management and problem solving</li>
                </ul>
                <div className="text-lg font-bold text-brand">Starting at $800/month</div>
              </div>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="mb-16 bg-brand-light/10 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-brand mb-6 text-center">
              Industries We Specialize In
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Technology and Software</h3>
                <p className="text-sm text-gray-600">IT services, software development, SaaS companies</p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Tourism and Hospitality</h3>
                <p className="text-sm text-gray-600">Hotels, tour operators, eco-tourism, restaurants</p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Health and Wellness</h3>
                <p className="text-sm text-gray-600">Medical tourism, wellness centers, yoga retreats</p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Manufacturing</h3>
                <p className="text-sm text-gray-600">Light manufacturing, food processing, textiles</p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Agriculture and Sustainability</h3>
                <p className="text-sm text-gray-600">Organic farming, sustainable products, exports</p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Professional Services</h3>
                <p className="text-sm text-gray-600">Consulting, legal, accounting, marketing agencies</p>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-brand mb-3">European Software Company</h3>
                <p className="text-gray-600 mb-4">
                  &quot;Incorvia helped us establish our Latin American headquarters in Costa Rica. Their market insights and regulatory guidance saved us months of research and potential missteps.&quot;
                </p>
                <p className="text-sm font-medium text-gray-800">- Thomas Müller, CEO of TechFlow GmbH</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-brand mb-3">Asian Manufacturing Firm</h3>
                <p className="text-gray-600 mb-4">
                  &quot;From identifying the perfect Free Trade Zone location to navigating customs regulations, Incorvia&apos;s consulting services were invaluable to our successful Costa Rican expansion.&quot;
                </p>
                <p className="text-sm font-medium text-gray-800">- Yuki Tanaka, Director of Pacific Manufacturing</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Grow Your Business in Costa Rica?
            </h3>
            <p className="text-gray-600 mb-8">
              Schedule a free consultation with our business experts.
            </p>
            <Link
              href="/contact"
              className="bg-brand text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-dark transition inline-block"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}