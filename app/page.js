'use client';
import { useEffect, useRef, useState } from 'react'; // Re-added useState
import * as THREE from 'three';

// CHANGE: Added a 'slideDesc' property to each service object with the new descriptions
const services = [
  {
    title: "Company Incorporation",
    desc: "End-to-end support for registering your business in Costa Rica, ensuring full compliance.",
    imageSrc: "/images/incorporation.jpg",
    slideDesc: "We streamline the entire incorporation process, transforming a complex bureaucratic challenge into a clear, straightforward path. Our team handles every detail, from name registration to final documentation, ensuring your Costa Rican entity is established swiftly and in full compliance with all local regulations."
  },
  {
    title: "Corporate Structuring",
    desc: "Tailored entity structuring solutions for multinational corporations and foreign investors.",
    imageSrc: "/images/structuring.jpg",
    slideDesc: "The right structure is the foundation of success. We specialize in designing bespoke corporate frameworks tailored to your international operations. Our focus is on creating tax-efficient, liability-protected, and operationally agile structures that support your long-term growth and investment goals in the region."
  },
  {
    title: "Regulatory Compliance",
    desc: "Ongoing compliance services to keep your operations aligned with Costa Rican law.",
    imageSrc: "/images/compliance.jpg",
    slideDesc: "Navigating Costa Rican corporate law requires constant vigilance. Our ongoing compliance services act as your proactive safeguard, managing all mandatory reporting, corporate governance, and regulatory updates. We ensure your business remains in impeccable legal standing, freeing you to focus on your core operations."
  },
  {
    title: "Real Estate Advisory",
    desc: "Expert guidance on real estate transactions and leveraging Costa Rica’s Free Trade Zones.",
    imageSrc: "/images/real-estate.jpg",
    slideDesc: "Unlock the full potential of your real estate investments with our expert guidance. We provide comprehensive advisory from due diligence and transaction support to maximizing benefits within Costa Rica’s Free Trade Zones. We help you navigate the market with confidence, ensuring every transaction is secure and strategically sound."
  },
  {
    title: "Accounting & Tax",
    desc: "Streamlined tax planning, accounting, and reporting services designed for global standards.",
    imageSrc: "/images/accounting.jpg",
    slideDesc: "Achieve financial clarity and efficiency with our integrated accounting and tax services. We operate according to global standards, providing meticulous bookkeeping, strategic tax planning, and transparent financial reporting. Our goal is to optimize your fiscal position while ensuring flawless compliance."
  },
  {
    title: "Immigration Support",
    desc: "End-to-end visa and residency support for executives, investors, and employees.",
    imageSrc: "/images/immigration.jpg",
    slideDesc: "Seamlessly relocate your key personnel and their families to Costa Rica with our end-to-end immigration support. We manage the entire visa and residency application process for executives, investors, and employees, ensuring a smooth and expedited transition so your team can get to work faster."
  },
];

// 3D Network Component (code is unchanged)
const ThreeNetwork = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // ... (rest of the Three.js code is the same)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 6;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);
    const hubCount = 150;
    const hubGeometry = new THREE.BufferGeometry();
    const hubPositions = new Float32Array(hubCount * 3);
    for (let i = 0; i < hubCount * 3; i++) {
      hubPositions[i] = (Math.random() - 0.5) * 12;
    }
    hubGeometry.setAttribute('position', new THREE.BufferAttribute(hubPositions, 3));
    const hubMaterial = new THREE.PointsMaterial({ color: 0xD4AF37, size: 0.05, });
    const hubs = new THREE.Points(hubGeometry, hubMaterial);
    scene.add(hubs);
    const linesGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x218380, transparent: true, opacity: 0.2, });
    for (let i = 0; i < hubCount; i++) {
      for (let j = i + 1; j < hubCount; j++) {
        const dx = hubPositions[i * 3] - hubPositions[j * 3];
        const dy = hubPositions[i * 3 + 1] - hubPositions[j * 3 + 1];
        const dz = hubPositions[i * 3 + 2] - hubPositions[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (distance < 3) {
          linePositions.push(hubPositions[i * 3], hubPositions[i * 3 + 1], hubPositions[i * 3 + 2], hubPositions[j * 3], hubPositions[j * 3 + 1], hubPositions[j * 3 + 2]);
        }
      }
    }
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const linesMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(linesMesh);
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);
    const animate = () => {
      requestAnimationFrame(animate);
      hubs.rotation.y += 0.0008;
      linesMesh.rotation.y += 0.0005;
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();
    const onWindowResize = () => {
      if (!currentMount) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);
    onWindowResize();
    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('mousemove', onMouseMove);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      hubGeometry.dispose();
      hubMaterial.dispose();
      linesGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 right-0 bottom-0 z-0" />;
};

// Main Page Component
export default function Home() {
  // CHANGE: Added state and effect for the new services slideshow
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#1B263B] font-sans text-[#F7F9FB]/90">
      <ThreeNetwork />
      
      <div className="relative z-10">
        <header className="fixed top-4 left-6 z-50">
          <h1 className="text-xl md:text-2xl font-bold text-white">Incorvia</h1>
        </header>

        {/* Hero and About Section Merged */}
        <section
          id="home"
          className="relative min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-12"
        >
          {/* Left side: Hero Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg mb-6">
              Seamless Business Incorporation <br /> in Costa Rica
            </h1>
            <p className="text-lg md:text-xl text-[#F7F9FB]/90 mb-8 max-w-md mx-auto md:mx-0">
              Your strategic partners for navigating the complexities of company formation and achieving ambitious growth in Costa Rica.
            </p>
            <a
              href="#services"
              className="bg-[#D4AF37] hover:bg-[#C49E2D] text-white px-8 py-4 rounded-lg font-semibold transition self-center md:self-start"
            >
              Explore Our Services
            </a>
          </div>

          {/* CHANGE: This is the new slideshow section */}
          <div className="w-full md:w-1/2 mt-16 md:mt-0 md:pl-12">
            <div className="relative h-64"> {/* Container to manage slide positioning and height */}
              {services.map((service, index) => (
                <div 
                  key={service.title} 
                  className={`absolute top-0 left-0 w-full transition-opacity duration-1000 ${index === currentServiceIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <p className="text-sm font-bold tracking-widest uppercase mb-4 text-[#218380]">Our Core Services</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{service.title}</h2>
                  <p className="text-base leading-relaxed">{service.slideDesc}</p>
                </div>
              ))}
            </div>
             {/* Navigation Dots */}
            <div className="flex justify-center md:justify-start space-x-3 mt-8">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentServiceIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentServiceIndex ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-32 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Our Core Services</h2>
              <p className="mt-4 text-lg">A comprehensive suite of services for establishing and managing your business in Costa Rica.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div 
                  key={service.title} 
                  className="p-8 rounded-lg border border-[#D4AF37]/40 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-end min-h-[300px]"
                  style={{
                    background: `linear-gradient(rgba(27, 38, 59, 0.9), rgba(27, 38, 59, 0.7)), url(${service.imageSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}