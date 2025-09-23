import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function VirtualOfficeService() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand to-brand-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Virtual Office Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Get a prestigious business address, mail handling, and virtual assistance.
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
                Establish Your Business Presence
              </h2>
              <p className="text-gray-600 mb-6">
                Our virtual office solutions provide your business with a prestigious Costa Rican address without the overhead costs of a physical office. Perfect for international entrepreneurs who want to establish a local presence.
              </p>
              <p className="text-gray-600">
                Whether you&apos;re testing the market, running a remote business, or need a legal address for incorporation, our virtual office services have you covered.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <Image 
                src="https://placehold.co/400x300/brand/white?text=Virtual+Office" 
                alt="Virtual Office" 
                className="w-full h-auto rounded-lg mb-4"
                width={400}
                height={300}
              />
              <p className="text-center text-gray-600 text-sm">
                Professional business address in prime locations
              </p>
            </div>
          </div>

          {/* Service Packages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Virtual Office Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md border-t-4 border-brand">
                <h3 className="text-xl font-semibold text-brand mb-3">Basic Package</h3>
                <div className="text-2xl font-bold text-gray-800 mb-4">$99/month</div>
                <ul className="text-gray-700 space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    Business address in San José
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    Mail receipt and notification
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    Digital mail scanning (5 items/month)
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block text-center bg-brand text-white py-2 rounded-lg font-semibold hover:bg-brand-dark transition"
                >
                  Get Started
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-brand transform scale-105">
                <div className="bg-brand text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-semibold text-brand mb-3">Professional Package</h3>
                <div className="text-2xl font-bold text-gray-800 mb-4">$199/month</div>
                <ul className="text-gray-700 space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    Premium business address
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    Mail handling & forwarding
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    Unlimited digital mail scanning
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    Access to meeting rooms (4 hrs/month)
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    Local phone number & call forwarding
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block text-center bg-brand text-white py-2 rounded-lg font-semibold hover:bg-brand-dark transition"
                >
                  Get Started
                </Link>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md border-t-4 border-brand">
                <h3 className="text-xl font-semibold text-brand mb-3">Enterprise Package</h3>
                <div className="text-2xl font-bold text-gray-800 mb-4">$349/month</div>
                <ul className="text-gray-700 space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    Executive business address
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    Priority mail handling & international forwarding
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    Dedicated account manager
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    Meeting room access (10 hrs/month)
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    Local phone number with receptionist service
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">✓</span>
                    Virtual assistant (5 hrs/month)
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block text-center bg-brand text-white py-2 rounded-lg font-semibold hover:bg-brand-dark transition"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mb-16 bg-brand-light/10 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-brand mb-6 text-center">
              Additional Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Phone Answering</h3>
                <p className="text-sm text-gray-600">Professional receptionist to answer calls in your company name</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Meeting Rooms</h3>
                <p className="text-sm text-gray-600">Access to professional meeting spaces when you need them</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Billing Address</h3>
                <p className="text-sm text-gray-600">Use our address for official business registration and banking</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Mail Forwarding</h3>
                <p className="text-sm text-gray-600">We&apos;ll forward your mail anywhere in the world on your schedule</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Establish Your Business Presence in Costa Rica?
            </h3>
            <p className="text-gray-600 mb-8">
              Choose the perfect virtual office package for your needs.
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