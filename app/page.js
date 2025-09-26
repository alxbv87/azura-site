'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import * as THREE from 'three';

// Team Data
const teamData = [
  {
    name: "Johnathan Hayes",
    title: "Managing Director",
    bio: "With over two decades of experience in international business and corporate structuring, Johnathan provides strategic leadership to the company and its clients. His guidance is sought by multinational corporations and investors entering the Costa Rican market.",
    img: "/team1.jpg",
  },
  {
    name: "Samantha Carter",
    title: "Head of Corporate Services",
    bio: "Samantha is a leading authority on entity structuring for foreign-owned companies in Costa Rica. She guides clients through every step of the incorporation process, from initial filing to ongoing compliance.",
    img: "/team2.jpg",
  },
  {
    name: "Michael Chen",
    title: "Lead, Real Estate & FTZ",
    bio: "Michael's expertise lies in navigating the complexities of Costa Rican real estate transactions and advising clients on leveraging the benefits of the country's Free Trade Zone (FTZ) regime.",
    img: "/team3.jpg",
  },
  {
    name: "Eleanor Vance",
    title: "Senior Compliance Specialist",
    bio: "Eleanor is adept at navigating the ever-evolving Costa Rican regulatory landscape. She ensures clients maintain perfect compliance, mitigating risk and ensuring operational integrity.",
    img: "/team4.jpg",
  },
];

// Services Data
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

// Images for About slideshow
const aboutImages = [
  "/city.jpg",
  "/business.jpg",
  "/teamwork.jpg",
  "/skyline.jpg",
];

// Globe Component
const ThreeGlobe = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Globe
    const geometry = new THREE.SphereGeometry(2.2, 64, 64);
    const material = new THREE.MeshBasicMaterial({
      color: 0x1B263B, // dark blue
      wireframe: true,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Glow
    const glowGeometry = new THREE.SphereGeometry(2.4, 64, 64);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xD4AF37, // gold
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
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: 0x218380, // teal
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Mouse interactivity
    let mouseX = 0, mouseY = 0;
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

    // Resize
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

      geometry.dispose();
      material.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      id="hero-canvas-container"
      className="absolute top-0 left-0 right-0 bottom-0 z-0"
    />
  );
};

export default function Home() {
  const [activeTeamMember, setActiveTeamMember] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slideshow logic for About images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aboutImages.length);
    }, 4000); // 2s per image
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#F7F9FB] font-sans text-[#2E3B4E]">
      {/* Header */}
      <header className="fixed top-4 left-6 z-50">
        <h1 className="text-xl md:text-2xl font-bold text-[#1B263B]">
          Incorvia
        </h1>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#1B263B] via-[#2E3B4E]/60 to-[#1B263B]"
      >
        <ThreeGlobe />
        <div className="relative z-10 p-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight drop-shadow-lg">
            Seamless Business Incorporation <br /> in Costa Rica.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#F7F9FB]/90 max-w-3xl mx-auto">
            Your strategic partners for navigating the complexities of company
            formation and achieving ambitious growth in Costa Rica.
          </p>
        </div>
      </section>

      {/* About with slideshow */}
      <section id="about" className="py-20 md:py-32 bg-[#F7F9FB]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          {/* Text */}
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

          {/* Slideshow */}
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
      <section id="services" className="py-20 md:py-32 bg-white">
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
