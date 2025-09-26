'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import * as THREE from 'three';

// Team Data
const teamData = [
  { name: "Johnathan Hayes", title: "Managing Director", bio: "With over two decades...", img: "/team1.jpg" },
  { name: "Samantha Carter", title: "Head of Corporate Services", bio: "Samantha is a leading authority...", img: "/team2.jpg" },
  { name: "Michael Chen", title: "Lead, Real Estate & FTZ", bio: "Michael's expertise lies in...", img: "/team3.jpg" },
  { name: "Eleanor Vance", title: "Senior Compliance Specialist", bio: "Eleanor is adept at navigating...", img: "/team4.jpg" },
];

// Services Data
const services = [
  { title: "Company Incorporation", desc: "End-to-end support for registering your business in Costa Rica, ensuring full compliance." },
  { title: "Corporate Structuring", desc: "Tailored entity structuring solutions for multinational corporations and foreign investors." },
  { title: "Regulatory Compliance", desc: "Ongoing compliance services to keep your operations aligned with Costa Rican law." },
  { title: "Real Estate Advisory", desc: "Expert guidance on real estate transactions and leveraging Costa Rica’s Free Trade Zones." },
  { title: "Accounting & Tax", desc: "Streamlined tax planning, accounting, and reporting services designed for global standards." },
  { title: "Immigration Support", desc: "End-to-end visa and residency support for executives, investors, and employees." },
];

// Images for About slideshow
const aboutImages = ["/city.jpg","/business.jpg","/teamwork.jpg","/skyline.jpg"];

// Fullscreen Constellation Background
const ConstellationBG = () => {
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
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Particles (nodes)
    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xD4AF37,
      size: 0.15,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lines between close particles
    const maxDistance = 3;
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x218380, transparent: true, opacity: 0.4 });
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * particleCount * 3); // max, will trim later
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    const updateLines = () => {
      const positionsArray = particleGeometry.attributes.position.array;
      let ptr = 0;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = positionsArray[i*3] - positionsArray[j*3];
          const dy = positionsArray[i*3+1] - positionsArray[j*3+1];
          const dz = positionsArray[i*3+2] - positionsArray[j*3+2];
          const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
          if (dist < maxDistance) {
            linePositions[ptr++] = positionsArray[i*3];
            linePositions[ptr++] = positionsArray[i*3+1];
            linePositions[ptr++] = positionsArray[i*3+2];
            linePositions[ptr++] = positionsArray[j*3];
            linePositions[ptr++] = positionsArray[j*3+1];
            linePositions[ptr++] = positionsArray[j*3+2];
          }
        }
      }
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions.slice(0, ptr), 3));
      lineGeometry.computeBoundingSphere();
      lineGeometry.attributes.position.needsUpdate = true;
    };

    updateLines();

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.0008;
      lines.rotation.y += 0.0008;
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
      if (currentMount) currentMount.removeChild(renderer.domElement);
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-screen -z-10" />;
};

export default function Home() {
  const [activeTeamMember, setActiveTeamMember] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slideshow logic for About images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#F7F9FB] font-sans text-[#2E3B4E] relative">
      <ConstellationBG />

      {/* Header */}
      <header className="fixed top-4 left-6 z-50">
        <h1 className="text-xl md:text-2xl font-bold text-[#1B263B]">
          Incorvia
        </h1>
      </header>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight drop-shadow-lg">
            Seamless Business Incorporation <br /> in Costa Rica.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Your strategic partners for navigating the complexities of company
            formation and achieving ambitious growth in Costa Rica.
          </p>
        </div>
      </section>

      {/* About with slideshow */}
      <section id="about" className="py-20 md:py-32 bg-[#F7F9FB] relative z-10">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-sm font-bold tracking-widest uppercase mb-4 text-[#218380]">
              Our Company
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-6">
              Local Expertise, Global Vision
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-[#2E3B4E]">
              Incorvia is a premier incorporation services company based in San
              José, dedicated to providing sophisticated solutions for
              international businesses and investors. We combine our deep-rooted
              understanding of Costa Rican corporate regulations with a global
              perspective, offering a strategic advantage to clients looking to
              establish, operate, and thrive in this dynamic country. Our proactive
              approach ensures you are always ahead of regulatory changes and
              positioned for long-term success.
            </p>
          </div>

          <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-lg shadow-2xl">
            {aboutImages.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt="About Incorvia"
                fill
                className={`object-cover transition-opacity duration-1000 ${
                  idx === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-32 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B]">
              Our Core Services
            </h2>
            <p className="mt-4 text-lg text-[#2E3B4E]">
              A comprehensive suite of services for establishing and managing
              your business in Costa Rica.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-lg bg-[#F7F9FB] border border-[#D4AF37]/40 shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-[#1B263B] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#2E3B4E]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
