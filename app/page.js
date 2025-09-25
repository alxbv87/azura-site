import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Corporate Structuring',
    description: 'Expert S.A. & S.R.L. formation for optimal liability protection and tax efficiency.',
    href: '/services/corporate-structuring',
  },
  {
    title: 'Compliance & Tax',
    description: 'Navigate fiscal obligations and corporate governance with our expert advisory services.',
    href: '/services/compliance-tax',
  },
  {
    title: 'Immigration & Residency',
    description: 'Seamless support for securing residency, work permits, and visas for you and your team.',
    href: '/services/immigration-residency',
  },
];

const values = [
    {
        title: 'Proven Track Record',
        description: 'Decades of combined experience in corporate law.',
    },
    {
        title: 'Client-Centric Approach',
        description: 'Tailored solutions that align with your specific business objectives.',
    },
    {
        title: 'Unwavering Integrity',
        description: 'Upholding the highest standards of professionalism and transparency.',
    },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-brand-blue text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')" }}></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-6 leading-tight max-w-4xl mx-auto">
            Strategic Corporate & Legal Expertise in Costa Rica
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Your trusted partner for seamless incorporation, compliance, and strategic business advisory.
          </p>
          <Link href="/services" className="inline-block bg-brand-accent text-white px-10 py-4 rounded-md font-semibold hover:opacity-90 transition duration-300 text-lg">
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 bg-brand-light-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
            <p className="text-center md:text-left text-sm font-semibold text-brand-text-light uppercase tracking-wider">Trusted By Global Leaders:</p>
            <Image src="https://placehold.co/150x50/cccccc/999999?text=FORBES" alt="Forbes Logo" width={150} height={50} className="mx-auto opacity-60" />
            <Image src="https://placehold.co/150x50/cccccc/999999?text=BLOOMBERG" alt="Bloomberg Logo" width={150} height={50} className="mx-auto opacity-60" />
            <Image src="https://placehold.co/150x50/cccccc/999999?text=TECHCRUNCH" alt="TechCrunch Logo" width={150} height={50} className="mx-auto opacity-60" />
            <Image src="https://placehold.co/150x50/cccccc/999999?text=WIRED" alt="Wired Logo" width={150} height={50} className="mx-auto opacity-60 hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-brand-blue">Our Core Practice Areas</h2>
            <p className="text-lg text-brand-text-light mt-4">We provide a comprehensive suite of services designed to ensure your success in the Costa Rican market.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-brand-light-bg p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-brand-blue mb-3">{service.title}</h3>
                <p className="text-brand-text-light mb-6">{service.description}</p>
                <Link href={service.href} className="font-semibold text-brand-accent hover:underline">Learn More &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-brand-light-bg">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-brand-blue mb-6">A Foundation of Trust and Unparalleled Expertise</h2>
              <p className="text-lg text-brand-text-light mb-8 leading-relaxed">
                At Incorvia, we are more than just service providers; we are your strategic partners. We are committed to navigating the complexities of the Costa Rican legal system on your behalf, allowing you to focus on growing your business with confidence.
              </p>
              <ul className="space-y-4">
                {values.map((value) => (
                    <li key={value.title} className="flex items-start">
                        <svg className="w-6 h-6 text-brand-accent flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span className="text-brand-text-dark"><strong>{value.title}:</strong> {value.description}</span>
                    </li>
                ))}
              </ul>
            </div>
            <div>
              <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" alt="Incorvia Professional Team" width={600} height={600} className="rounded-lg shadow-xl w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-blue">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-serif font-semibold text-white mb-4">Ready to Establish Your Presence?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Our team is ready to provide the expert guidance you need. Schedule a complimentary, no-obligation consultation to discuss your specific objectives.
          </p>
          <Link href="/contact" className="inline-block bg-brand-accent text-white px-10 py-4 rounded-md font-semibold hover:opacity-90 transition duration-300 text-lg">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}

