import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WhyCostaRicaPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand to-brand-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Why Costa Rica?
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Discover why Costa Rica is the ideal destination for international entrepreneurs and businesses from Europe and Asia.
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

      {/* Why Costa Rica Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-brand mb-4">
                Stable Democracy
              </h3>
              <p className="text-gray-600">
                Costa Rica has enjoyed over 70 years of uninterrupted democracy with a stable political environment, making it one of the safest investment destinations in Latin America.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-brand mb-4">
                Business-Friendly Environment
              </h3>
              <p className="text-gray-600">
                Ranked among the top countries in Latin America for ease of doing business, with streamlined processes for foreign investors and favorable tax structures.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-brand mb-4">
                Strategic Location
              </h3>
              <p className="text-gray-600">
                Perfectly positioned between North and South America with excellent connectivity to Europe and Asia through modern airports and shipping routes.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-brand mb-4">
                Highly Educated Workforce
              </h3>
              <p className="text-gray-600">
                Costa Rica boasts one of the highest literacy rates in Latin America (97.8%) and a multilingual workforce fluent in English, Spanish, and other languages.
              </p>
            </div>

            {/* Reason 5 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-brand mb-4">
                Free Trade Zones & Tax Incentives
              </h3>
              <p className="text-gray-600">
                Attractive tax benefits including corporate tax exemptions, duty-free imports, and special incentives for companies operating in Free Trade Zones.
              </p>
            </div>

            {/* Reason 6 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-brand mb-4">
                High Quality of Life
              </h3>
              <p className="text-gray-600">
                Consistently ranked among the happiest countries in the world, with excellent healthcare, beautiful natural surroundings, and a welcoming culture for expatriates.
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-brand-light/20 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-brand mb-6 text-center">
              Perfect for European & Asian Businesses
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold mb-3">For European Entrepreneurs:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand mr-2">•</span>
                    Similar business hours overlap with European markets
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">•</span>
                    Strong diplomatic relations with EU countries
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">•</span>
                    Growing number of European expat communities
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">For Asian Investors:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand mr-2">•</span>
                    Free Trade Agreement with China
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">•</span>
                    Strategic gateway to the Americas market
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2">•</span>
                    Growing Asian business community and support networks
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Business in Costa Rica?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let Incorvia handle your incorporation process while you focus on your business strategy.
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