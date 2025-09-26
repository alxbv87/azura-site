'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import * as THREE from 'three';

// --- DATA ---
const services = [
  {
    title: "Company Incorporation",
    desc: "End-to-end support for registering your business in Costa Rica, ensuring full compliance.",
  },
  {
    title: "Corporate Structuring",
    desc: "Tailored entity structuring solutions for multinational corporations and foreign investors.",
  },
  {
    title: "Regulatory Compliance",
    desc: "Ongoing compliance services to keep your operations aligned with Costa Rican law.",
  },
  {
    title: "Real Estate Advisory",
    desc: "Expert guidance on real estate transactions and leveraging Costa Rica’s Free Trade Zones.",
  },
  {
    title: "Accounting & Tax",
    desc: "Streamlined tax planning, accounting, and reporting services designed for global standards.",
  },
  {
    title: "Immigration Support",
    desc: "End-to-end visa and residency support for executives, investors, and employees.",
  },
];

const aboutImages = [
  "/city.jpg",
  "/business.jpg",
  "/teamwork.jpg",
  "/skyline.jpg",
];

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
];

// --- 3D Animation Component ---
const ThreeNetwork = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 6;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Hubs (Points)
    const hubCount = 150;
    const hubGeometry = new THREE.BufferGeometry();
    const hubPositions = new Float32Array(hubCount * 3);
    for (let i = 0; i < hubCount * 3; i++) {
      hubPositions[i] = (Math.random() - 0.5) * 12;
    }
    hubGeometry.setAttribute('position', new THREE.BufferAttribute(hubPositions, 3));
    const hubMaterial = new THREE.PointsMaterial({ color: 0xD4AF37, size: 0.05 });
    const hubs = new THREE.Points(hubGeometry, hubMaterial);
    scene.add(hubs);

    // Connections (Lines)
    const linesGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x218380, transparent: true, opacity: 0.2 });
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

    // Mouse Interaction
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animation Loop
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

    // Resize Handler
    const onWindowResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', onWindowResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('mousemove', onMouseMove);
      if (currentMount) currentMount.removeChild(renderer.domElement);
      hubGeometry.dispose();
      hubMaterial.dispose();
      linesGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute top-0 left-0 right-0 bottom-0 z-0" />;
};

// --- SECTION COMPONENTS ---

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 bg-transparent text-white">
    <h1 className="text-xl md:text-2xl font-bold">Incorvia</h1>
    <nav className="hidden md:flex space-x-8">
      {navLinks.map((link) => (
        <a key={link.label} href={link.href} className="text-white/80 hover:text-white transition">
          {link.label}
        </a>
      ))}
    </nav>
  </header>
);

const HeroSection = () => (
  <section id="home" className="relative h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left overflow-hidden bg-gradient-to-b from-[#1B263B] via-[#2E3B4E]/60 to-[#1B263B]">
    <div className="relative z-10 px-6 md:px-12 md:w-1/2 flex flex-col items-center md:items-start">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg mb-6">
        Seamless Business Incorporation <br /> in Costa Rica
      </h1>
      <p className="text-lg md:text-xl text-[#F7F9FB]/90 mb-8 max-w-md">
        Your strategic partners for navigating the complexities of company formation and achieving ambitious growth in Costa Rica.
      </p>
      <a href="#services" className="bg-[#D4AF37] hover:bg-[#C49E2D] text-white px-8 py-4 rounded-lg font-semibold transition">
        Explore Our Services
      </a>
    </div>
    <div className="relative w-full md:w-1/2 h-[400px] md:h-[600px] mt-12 md:mt-0">
      <ThreeNetwork />
    </div>
  </section>
);

const AboutSection = ({ images, currentIndex }) => (
  <section id="about" className="py-20 md:py-32 bg-[#F7F9FB]">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
      <div>
        <p className="text-sm font-bold tracking-widest uppercase mb-4 text-[#218380]">Our Company</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-6">Local Expertise, Global Vision</h2>
        <p className="text-lg leading-relaxed mb-8 text-[#2E3B4E]">
          Incorvia is a premier incorporation services company based in San José, dedicated to providing sophisticated solutions for international businesses and investors. We combine our deep-rooted understanding of Costa Rican corporate regulations with a global perspective, offering a strategic advantage to clients looking to establish, operate, and thrive in this dynamic country. Our proactive approach ensures you are always ahead of regulatory changes and positioned for long-term success.
        </p>
      </div>
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-lg shadow-2xl">
        {images.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt="About Incorvia"
            fill
            className={`object-cover transition-opacity duration-1000 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    </div>
  </section>
);

const ServicesSection = ({ servicesData }) => (
  <section id="services" className="py-20 md:py-32 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B]">Our Core Services</h2>
        <p className="mt-4 text-lg text-[#2E3B4E]">A comprehensive suite of services for establishing and managing your business in Costa Rica.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div key={service.title} className="p-8 rounded-lg bg-[#F7F9FB] border border-[#D4AF37]/40 shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-[#1B263B] mb-3">{service.title}</h3>
            <p className="text-[#2E3B4E]">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);


// --- MAIN PAGE COMPONENT ---
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slideshow logic for About images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#F7F9FB] font-sans text-[#2E3B4E]">
      <Header />
      <HeroSection />
      <AboutSection images={aboutImages} currentIndex={currentIndex} />
      <ServicesSection servicesData={services} />
    </main>
  );
}