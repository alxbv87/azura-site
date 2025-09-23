'use client';

import Link from "next/link";

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Business Consulting</h1>
          <p className="text-xl mb-8">Strategic advice for your Costa Rican business</p>
          <Link 
            href="/" 
            className="text-white border border-white px-6 py-3 rounded-lg hover:bg-blue-500 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
      
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Page is working!</h2>
          <p className="text-gray-600 mb-8">
            This minimal version confirms the route is working correctly.
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}