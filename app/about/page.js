'use client';

import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { FaBullseye, FaEye, FaHandshake, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from 'three';

// Particle Network Background
const ParticleNetwork = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    const particleCount = 600;
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) posArray[i] = (Math.random() - 0.5) * 10;
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({ color: 0xD4AF37, size: 0.03 });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const maxDistance = 1.5;
    const linesMaterial = new THREE.LineBasicMaterial({ color: 0x218380, transparent: true, opacity: 0.3 });
    const geometryLines = new THREE.BufferGeometry();
    const lineMesh = new THREE.LineSegments(geometryLines, linesMaterial);
    scene.add(lineMesh);

    let mouseX = 0, mouseY = 0;
    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.001 + mouseX * 0.001;
      particles.rotation.x += 0.0005 + mouseY * 0.001;

      const positions = [];
      const p = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = p[i * 3] - p[j * 3];
          const dy = p[i * 3 + 1] - p[j * 3 + 1];
          const dz = p[i * 3 + 2] - p[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < maxDistance) {
            positions.push(p[i * 3], p[i * 3 + 1], p[i * 3 + 2]);
            positions.push(p[j * 3], p[j * 3 + 1], p[j * 3 + 2]);
          }
        }
      }
      geometryLines.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
      geometryLines.computeBoundingSphere();

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      if (currentMount) currentMount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};

// Legal Lead Slideshow
const photos = [
  { src: "/JJ1.jpg", alt: "Juan J. Acuna Leandro - Photo 1" },
  { src: "/JJ2.jpg", alt: "Juan J. Acuna Leandro - Photo 2" },
  { src: "/JJ3.jpg", alt: "Juan J. Acuna Leandro - Photo 3" },
  { src: "/JJ4.jpg", alt: "Juan J. Acuna Leandro - Photo 4" },
];

const LegalLead = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  const prev = () => setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
  const next = () => setCurrent((prev) => (prev + 1) % photos.length);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-start relative z-10">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B263B]">Meet Our Legal Lead</h2>
        <p className="text-[#D4AF37] font-semibold">Our team is led by seasoned professionals with deep expertise in Costa Rican law and international business.</p>
        <h3 className="text-2xl font-bold mt-4 text-[#1B263B]">Msc Juan J. Acuna Leandro</h3>
        <p className="text-[#D4AF37] font-semibold mb-2">Attorney Specialist & Notary Public</p>
        <p className="text-[#2E3B4E]">
          With extensive international training and over a decade of professional experience, Msc Juan J. Acuna Leandro offers trusted legal counsel backed by advanced specialization in Criminal Law, Notarial and Registry Law, and Real Estate.
        </p>
        <p className="text-[#2E3B4E]">
          He holds a Master’s Degree in Criminal Law from Universidad Latina de Costa Rica, and has pursued advanced postgraduate studies across Latin America and Europe, including:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-[#2E3B4E]">
          <li>Criminal Evidence Law (Universidad Castilla-La Mancha, Toledo, Spain)</li>
          <li>Advanced Criminal Law (Universidad Nacional de Mar del Plata, Argentina)</li>
          <li>Notarial and Registry Law (Universidad Internacional de las Américas)</li>
        </ul>
        <p className="text-[#2E3B4E]">
          Recognized as an international speaker, he has shared his expertise on organized crime, anti-corruption, compliance, and anti-money laundering in global forums. His professional contributions have earned him the honor of serving as a member of several commissions of the Judiciary of Costa Rica.
        </p>
        <p className="text-[#2E3B4E]">
          In addition to his legal practice, Msc Juan J. Acuna Leandro is a trusted television contributor and legal analyst, frequently invited to provide expert commentary on high-profile legal matters. His comprehensive knowledge of real estate law further enhances his ability to protect clients’ interests with precision and integrity.
        </p>
        <p className="text-[#2E3B4E]">
          A results-driven attorney and notary public, Msc Juan J. Acuna Leandro is committed to providing clients with strategic, ethical, and effective legal solutions.
        </p>
      </div>

      <div 
        className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <Image
              src={photos[current].src}
              alt={photos[current].alt}
              fill
              className="object-cover w-full h-full rounded-xl"
            />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-20"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-20"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default function About() {
  return (
    <main className="bg-[#F7F9FB] font-sans text-[#2E3B4E] relative z-0">
      {/* Particle Background */}
      <ParticleNetwork />

      {/* Hero Section (Redesigned) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#1B263B] via-[#2E3B4E]/80 to-[#1B263B] text-white py-12 z-10">
        <div className="relative z-10 px-6 max-w-6xl grid md:grid-cols-2 gap-8 items-center">
          
          {/* Left Column */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">About Incorvia</h1>
            <p className="text-lg md:text-xl text-white/90">
              We specialize in fast, reliable, and professional incorporation services for entrepreneurs and companies expanding into Costa Rica.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            <p className="text-md md:text-lg text-white/80 border-l-4 border-[#D4AF37] pl-4">
              Our mission is to simplify the process and ensure full compliance every step of the way.
            </p>
          </div>

        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center z-10 relative">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B263B] mb-4">Who We Are</h2>
          <p className="text-[#2E3B4E] mb-4">
            Incorvia was founded with the vision of providing streamlined, transparent, and cost-effective incorporation services. We understand that starting a business in a new country can feel overwhelming — that’s why we’re here to make it simple.
          </p>
          <p className="text-[#2E3B4E]">
            Our experienced team of legal experts, accountants, and business consultants have helped
 </p>
      </div>
      <div className="relative h-80 w-full">
        <Image
          src="/about.jpg"
          alt="About Incorvia"
          fill
          className="object-cover rounded-2xl shadow-2xl"
        />
      </div>
    </section>

    {/* Redesigned Legal Lead Section */}
    <LegalLead />

    {/* Core Principles (Improved Design) */}
    <section className="bg-[#F7F9FB] py-20 border-t border-[#D4AF37]/20 z-10 relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B263B] mb-12">Our Core Principles</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-8 rounded-2xl shadow-md hover:shadow-lg transition bg-white/60 backdrop-blur-md">
            <FaBullseye className="text-[#D4AF37] text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#1B263B] mb-3">Mission</h3>
            <p className="text-[#2E3B4E]">To empower entrepreneurs and companies by providing seamless, professional incorporation and compliance solutions in Costa Rica.</p>
          </div>
          <div className="p-8 rounded-2xl shadow-md hover:shadow-lg transition bg-white/60 backdrop-blur-md">
            <FaEye className="text-[#D4AF37] text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#1B263B] mb-3">Vision</h3>
            <p className="text-[#2E3B4E]">To be the most trusted and innovative partner for business incorporation and corporate services in the region.</p>
          </div>
          <div className="p-8 rounded-2xl shadow-md hover:shadow-lg transition bg-white/60 backdrop-blur-md">
            <FaHandshake className="text-[#D4AF37] text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#1B263B] mb-3">Values</h3>
            <p className="text-[#2E3B4E]">Integrity, transparency, efficiency, and customer-centric service are at the heart of everything we do.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Trust Stats Section */}
    <section className="py-20 bg-[#E0E6ED] relative z-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
        <div className="p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-4xl font-bold text-[#D4AF37]">10+</h3>
          <p className="text-[#2E3B4E] mt-2">Years of Experience</p>
        </div>
        <div className="p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-4xl font-bold text-[#D4AF37]">500+</h3>
          <p className="text-[#2E3B4E] mt-2">Companies Incorporated</p>
        </div>
        <div className="p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-4xl font-bold text-[#D4AF37]">100%</h3>
          <p className="text-[#2E3B4E] mt-2">Client Satisfaction Rate</p>
        </div>
      </div>
    </section>

  </main>
);
}