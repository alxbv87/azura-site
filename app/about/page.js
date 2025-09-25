'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa';
import * as THREE from 'three';

// ThreeGlobe component (3D globe animation)
const ThreeGlobe = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Globe
    const geometry = new THREE.SphereGeometry(2.2, 64, 64);
    const material = new THREE.MeshBasicMaterial({
      color: 0x1b263b,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Glow
    const glowGeometry = new THREE.SphereGeometry(2.4, 64, 64);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.15,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 1000;
    const posArray = new Float32Array(particlesCnt * 3);
    for (let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({ size: 0.01, color: 0x218380 });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Mouse interactivity
    let mouseX = 0,
      mouseY = 0;
    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);

      sphere.rotation.y += 0.001;
      particlesMesh.rotation.y += 0.0005;

      camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    const onWindowResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('mousemove', onMouseMove);
      if (currentMount) currentMount.removeChild(renderer.domElement);

      geometry.dispose();
      material.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute top-0 left-0 right-0 bottom-0 z-0" />;
};

export default function About() {
  return (
    <main className="bg-[#F7F9FB] font-sans text-[#2E3B4E] relative">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#1B263B] via-[#2E3B4E]/80 to-[#1B263B]">
        <ThreeGlobe />
        <div className="relative z-10 p-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
            About Incorvia
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            We specialize in fast, reliable, and professional incorporation services for entrepreneurs and companies expanding into Costa Rica. Our mission is to simplify the process and ensure full compliance every step of the way.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B263B] mb-4">
            Who We Are
          </h2>
          <p className="text-[#2E3B4E] mb-4">
            Incorvia was founded with the vision of providing streamlined, transparent, and cost-effective incorporation services. We understand that starting a business in a new country can feel overwhelming — that’s why we’re here to make it simple.
          </p>
          <p className="text-[#2E3B4E]">
            Our experienced team of legal experts, accountants, and business consultants have helped hundreds of companies establish their presence in Costa Rica. From the moment you contact us, you’ll have a dedicated partner guiding you through every step.
          </p>
        </div>
        <div className="relative h-80 w-full">
          <Image src="/about.jpg" alt="About Incorvia" fill className="object-cover rounded-2xl shadow-2xl" />
        </div>
      </section>

      {/* Lawyer Profile */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-[#F7F9FB]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B263B]">Meet Our Legal Lead</h2>
          <p className="text-[#2E3B4E] max-w-3xl mx-auto">
            Our team is led by seasoned professionals with deep expertise in Costa Rican law and international business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Photo 1 */}
          <div className="lg:col-span-3">
            <Image src="/JJ1.jpg" alt="Professional Photo 1" width={300} height={300} className="w-full h-auto rounded-xl shadow-lg" />
          </div>

          {/* Bio */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-2xl font-bold text-[#1B263B]">Msc Juan J. Acuna Leandro</h3>
            <p className="text-[#D4AF37] font-semibold">Attorney Specialist & Notary Public</p>
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

          {/* Other photos */}
          <div className="lg:col-span-3"><Image src="/JJ2.jpg" alt="Professional Photo 2" width={300} height={300} className="w-full h-auto rounded-xl shadow-lg" /></div>
          <div className="lg:col-span-3 mt-8 lg:mt-0"><Image src="/JJ3.jpg" alt="Professional Photo 3" width={300} height={300} className="w-full h-auto rounded-xl shadow-lg" /></div>
          <div className="lg:col-span-6"></div>
          <div className="lg:col-span-3 mt-8 lg:mt-0"><Image src="/JJ4.jpg" alt="Professional Photo 4" width={300} height={300} className="w-full h-auto rounded-xl shadow-lg" /></div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-[#F7F9FB] py-20 border-t border-[#D4AF37]/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B263B] mb-12">Our Core Principles</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <FaBullseye className="text-[#D4AF37] text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#1B263B] mb-3">Mission</h3>
              <p className="text-[#2E3B4E]">
                To empower entrepreneurs and companies by providing seamless, professional incorporation and compliance solutions in Costa Rica.
              </p>
            </div>
            <div className="p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <FaEye className="text-[#D4AF37] text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#1B263B] mb-3">Vision</h3>
              <p className="text-[#2E3B4E]">
                To be the most trusted and innovative partner for business incorporation and corporate services in the region.
              </p>
            </div>
            <div className="p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <FaHandshake className="text-[#D4AF37] text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#1B263B] mb-3">Values</h3>
              <p className="text-[#2E3B4E]">
                Integrity, transparency, efficiency, and customer-centric service are at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-20 bg-[#E0E6ED]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-4xl font-bold text-[#D4AF37]">10+</h3>
            <p className="text-[#2E3B4E] mt-2">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#D4AF37]">500+</h3>
            <p className="text-[#2E3B4E] mt-2">Companies Incorporated</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#D4AF37]">100%</h3>
            <p className="text-[#2E3B4E] mt-2">Client Satisfaction Rate</p>
          </div>
        </div>
      </section>
    </main>
  );
}
