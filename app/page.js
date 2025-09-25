import { useState, useEffect, useRef } from 'react';
import { CheckCircle, Briefcase, ShieldCheck, FileText, Building, Users, Lightbulb, ChevronDown, ArrowRight } from "lucide-react";

// Helper component for FAQ items
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-5">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-medium text-slate-800 hover:text-blue-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-6 h-6 transform transition-transform duration-300 text-slate-500 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen mt-4' : 'max-h-0'
        }`}
      >
        <p className="text-slate-600 pb-2 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

// Custom hook to detect when an element is in view and trigger an animation
const useAnimateOnScroll = (options) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isVisible];
};


export default function Home() {
  const services = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-800" />,
      title: "Corporate Structuring",
      description: "Optimized company formation (S.A. & S.R.L.) tailored for liability protection and tax efficiency.",
      href: "/services/company-formation",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-800" />,
      title: "Regulatory Compliance",
      description: "Navigate Costa Rica's legal landscape with expert guidance on annual filings and corporate governance.",
      href: "/services/legal-support",
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-800" />,
      title: "Tax Advisory",
      description: "Strategic tax planning and compliance services to ensure your business meets all fiscal obligations seamlessly.",
      href: "/services/tax-compliance",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-800" />,
      title: "Immigration & Residency",
      description: "Comprehensive support for securing residency, work permits, and visas for you and your key personnel.",
      href: "/services/residency",
    },
    {
      icon: <Building className="w-8 h-8 text-blue-800" />,
      title: "Real Estate Law",
      description: "Expert legal services for property acquisition, due diligence, and secure title transfers.",
      href: "/services/real-estate",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-800" />,
      title: "Market Entry Strategy",
      description: "In-depth consulting on local market dynamics, partnerships, and strategic growth opportunities.",
      href: "/services/consulting",
    },
  ];

  const faqData = [
    {
        question: "How long is the incorporation process?",
        answer: "Typically, a new corporation can be fully registered within 2-4 weeks, assuming all required documentation from the client is provided promptly. Our streamlined process minimizes delays."
    },
    {
        question: "What's the difference between an S.A. and an S.R.L.?",
        answer: "A Sociedad Anónima (S.A.) is similar to a traditional corporation with shares, ideal for multiple partners or seeking outside investment. A Sociedad de Responsabilidad Limitada (S.R.L.) is more like an LLC, offering a simpler structure for one or a few partners. We will advise on the best fit for you."
    },
    {
        question: "Can I manage my Costa Rican company from abroad?",
        answer: "Absolutely. We provide virtual office and registered agent services, allowing you to maintain full compliance and manage your operations from anywhere in the world."
    },
    {
        question: "What are the key annual compliance requirements?",
        answer: "The main requirements include the annual corporation tax payment, the Ultimate Beneficial Owner (UBO) declaration, and the annual income tax filing. Our team ensures you meet every deadline."
    }
  ];

  // Animation states for hero section
  const [h1Visible, setH1Visible] = useState(false);
  const [pVisible, setPVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
      setTimeout(() => setH1Visible(true), 200);
      setTimeout(() => setPVisible(true), 400);
      setTimeout(() => setButtonVisible(true), 600);
  }, []);

  // Hooks for scroll animations
  const [introRef, introIsVisible] = useAnimateOnScroll({ threshold: 0.1 });
  const [servicesRef, servicesIsVisible] = useAnimateOnScroll({ threshold: 0.1 });
  const [socialProofRef, socialProofIsVisible] = useAnimateOnScroll({ threshold: 0.1 });
  const [faqRef, faqIsVisible] = useAnimateOnScroll({ threshold: 0.1 });
  const [ctaRef, ctaIsVisible] = useAnimateOnScroll({ threshold: 0.1 });

  return (
    <main className="bg-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative text-white bg-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{backgroundImage: "url('https://placehold.co/1920x1080/0f172a/FFFFFF?text=.')"}}
        ></div>
        <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-48 text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight transition-all duration-1000 ease-out ${h1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Expert Corporate & Legal Services in Costa Rica
          </h1>
          <p className={`text-lg md:text-xl mb-10 text-slate-300 max-w-3xl mx-auto transition-all duration-1000 ease-out ${pVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Incorvia is your trusted partner for seamless business incorporation, compliance, and strategic legal advisory.
          </p>
          <div className={`transition-all duration-1000 ease-out ${buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <a
              href="/contact"
              className="bg-blue-700 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-600 transition duration-300 text-lg"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section ref={introRef} className={`py-20 md:py-24 bg-white transition-all duration-1000 ease-out ${introIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-6">
           <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-snug">
                        Your Strategic Partner for Success in Costa Rica
                    </h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        Navigating the complexities of a new market requires more than just a service provider; it requires a partner. At Incorvia, we integrate deep local expertise with a global business perspective to offer comprehensive solutions that drive growth and ensure compliance.
                    </p>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Our dedicated team of legal and financial professionals is committed to providing personalized, proactive, and transparent service. We don't just set up your company; we build the foundation for its long-term success.
                    </p>
                     <a href="/about" className="text-blue-700 font-semibold text-lg hover:underline">
                        Learn more about our firm <ArrowRight className="inline w-5 h-5 ml-1" />
                    </a>
                </div>
                 <div className="order-1 md:order-2">
                    <img 
                        src="https://placehold.co/600x600/e2e8f0/1e293b?text=Incorvia+Team&font=sans" 
                        alt="Professional team at Incorvia" 
                        className="rounded-lg shadow-2xl w-full h-auto"
                    />
                </div>
           </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className={`py-20 md:py-24 bg-slate-50 transition-all duration-1000 ease-out ${servicesIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Our Expertise
          </h2>
          <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
            We provide a full spectrum of legal and corporate services designed to protect and grow your business.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  {service.description}
                </p>
                <a
                  href={service.href}
                  className="text-blue-700 font-semibold hover:underline mt-auto"
                >
                  Explore Service <ArrowRight className="inline w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Social Proof */}
       <section ref={socialProofRef} className={`py-16 bg-white transition-all duration-1000 ease-out ${socialProofIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-6xl mx-auto px-6 text-center">
             <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">Trusted by industry leaders</h3>
             <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                 <span className="font-medium text-slate-400 text-2xl">FORBES</span>
                 <span className="font-medium text-slate-400 text-2xl">Bloomberg</span>
                 <span className="font-medium text-slate-400 text-2xl">TechCrunch</span>
                 <span className="font-medium text-slate-400 text-2xl">FastCompany</span>
                 <span className="font-medium text-slate-400 text-2xl">WIRED</span>
             </div>
          </div>
       </section>

      {/* FAQ Section */}
       <section ref={faqRef} className={`py-20 md:py-24 bg-slate-50 transition-all duration-1000 ease-out ${faqIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
            Common Questions
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12">
            Clear answers to help you get started with confidence.
          </p>
          <div className="space-y-2">
              {faqData.map((faq, index) => (
                  <FaqItem key={index} question={faq.question} answer={faq.answer} />
              ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section ref={ctaRef} className={`bg-blue-800 text-white transition-all duration-1000 ease-out ${ctaIsVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Establish Your Presence in Costa Rica?
            </h2>
            <p className="mb-10 text-lg max-w-2xl mx-auto text-blue-100">
                Our team is ready to provide the expert guidance you need. Schedule a complimentary, no-obligation consultation to discuss your specific objectives.
            </p>
            <a
                href="/contact"
                className="bg-white text-blue-800 px-10 py-4 rounded-md font-semibold hover:bg-slate-200 transition duration-300 text-lg"
            >
                Book a Free Consultation
            </a>
        </div>
      </section>
    </main>
  );
}

