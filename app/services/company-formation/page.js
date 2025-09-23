import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CompanyFormationPage() {
  return (
    <main>
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
      
      {/* Add your content here */}
      
    </main>
  );
}