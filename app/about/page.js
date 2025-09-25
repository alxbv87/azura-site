'use client';

import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";
import * as THREE from 'three';

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
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({ color: 0xD4AF37, size: 0.03 });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Lines connecting close particles
    const maxDistance = 1.5;
    const linesMaterial = new THREE.LineBasicMaterial({ color: 0x218380, transparent: true, opacity: 0.3 });
    const positions = new Float32Array(particleCount * particleCount * 3);
    const geometryLines = new THREE.BufferGeometry();
    const lineMesh = new THREE.LineSegments(geometryLines, linesMaterial);
    scene.add(lineMesh);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;

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

    // Resize
    const onResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (currentMount) currentMount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute top-0 left-0 right-0 bottom-0 z-0" />;
};

export default function About() {
  return (
    <main className="bg-[#F7F9FB] font-sans text-[#2E3B4E]">

      {/* Hero Section with Particle Network */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#1B263B] via-[#2E3B4E]/80 to-[#1B263B] text-white py-24">
        <ParticleNetwork />
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Incorvia</h1>
          <p className="text-lg md:text-xl text-white/90">
            We specialize in fast, reliable, and professional incorporation
            services for entrepreneurs and companies expanding into Costa Rica.
            Our mission is to simplify the process and ensure full compliance
            every step of the way.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B263B] mb-4">Who We Are</h2>
          <p className="text-[#2E3B4E] mb-4">
            Incorvia was founded with the vision of providing streamlined,
            transparent, and cost-effective incorporation services. We understand
            that starting a business in a new country can feel overwhelming —
            that’s why we’re here to make it simple.
          </p>
          <p className="text-[#2E3B4E]">
            Our experienced team of legal experts, accountants, and business
            consultants have helped hundreds of companies establish their
            presence in Costa Rica. From the moment you contact us, you’ll have
            a dedicated partner guiding you through every step.
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

      {/* ...rest of your content remains unchanged, including Lawyer Profile, Mission/Vision/Values, Trust Stats... */}

    </main>
  );
}
