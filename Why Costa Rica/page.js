{/* Why Costa Rica Section (Commercial Focus) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Your Gateway to Business in Costa Rica
            </h2>
            <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
              Costa Rica presents immense opportunities for foreign entrepreneurs. Here’s how Incorvia ensures you capitalize on them, seamlessly and efficiently.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1579762715118-695082162d41?q=80&w=1974&auto=format&fit=crop"
                alt="Business meeting in a modern office with a view of Costa Rican nature"
                className="rounded-xl shadow-lg object-cover w-full h-full"
              />
            </div>

            {/* Content Column with Service Tie-in */}
            <div className="space-y-8">
              {/* Feature 1: Territorial Tax System */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-brand-light p-3 rounded-full">
                  <BadgePercent className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Maximize Tax Advantages
                  </h3>
                  <p className="text-gray-600">
                    Costa Rica's territorial tax system is a major draw, but structuring your company to legally benefit requires expert knowledge. **We design your corporate structure from day one to ensure full compliance while maximizing your tax advantages** on foreign-sourced income.
                  </p>
                </div>
              </div>

              {/* Feature 2: Stability & Investment Security */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-brand-light p-3 rounded-full">
                  <ShieldCheck className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Incorporate with Confidence
                  </h3>
                  <p className="text-gray-600">
                    While Costa Rica’s legal framework is stable and protects foreign owners, the incorporation process has nuances. **Our legal team manages every step, from registration to compliance, ensuring your investment is secure** and your business is built on a solid legal foundation.
                  </p>
                </div>
              </div>

              {/* Feature 3: Path to Residency */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-brand-light p-3 rounded-full">
                  <Smile className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Seamless Transition to Residency
                  </h3>
                  <p className="text-gray-600">
                    Your business can be your key to living in paradise, but immigration bureaucracy is complex. **We specialize in residency applications for investors and entrepreneurs, linking your company formation directly to your immigration goals** for a smooth, stress-free process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
             <p className="text-lg text-gray-700 mb-6">
                Ready to make your move? Let our experts be your guide.
              </p>
            <Link
              href="/contact"
              className="bg-brand text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-dark transition"
            >
              Book a Free Consultation
            </Link>
          </div>

        </div>
      </section>