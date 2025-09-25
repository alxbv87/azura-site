'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import * as THREE from 'three';

// Team Data (using local /public images)
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
    bio: "Michael&apos;s expertise lies in navigating the complexities of Costa Rican real estate transactions and advising clients on leveraging the benefits of the country&apos;s Free Trade Zone (FTZ) regime.",
    img: "/team3.jpg",
  },
  {
    name: "Eleanor Vance",
    title: "Senior Compliance Specialist",
    bio: "Eleanor is adept at navigating the ever-evolving Costa Rican regulatory landscape. She ensures clients maintain perfect compliance, mitigating risk and ensuring operational integrity.",
    img: "/team4.jpg",
  },
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

    // Globe (wireframe sphere)
    const geometry = new THREE.SphereGeometry(2.2, 64, 64);
    const material = new THREE.MeshBasicMaterial({
      color: 0x0a2540, // dark navy
      wireframe: true,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Glow Effect (slightly larger transparent sphere)
    const glowGeometry = new THREE.SphereGeometry(2.4, 64, 64);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xc5a15a, // muted gold
      transparent: true,
      opacity: 0.15,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    // Orbiting particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 1000;
    const posArray = new Float32Array(particlesCnt * 3);
    for (let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: 0xc5a15a,
    });
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

    // Resize
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

  return (
    <main className="bg-gray-50">
      {/* Header with brand name */}
      <header className="fixed top-4 left-6 z-100">
        <h1 className="text-xl md:text-2xl font-bold font-sans text-gray-800">
          Incorvia
        </h1>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-700/40 to-gray-900"
      >
        <ThreeGlobe />
        <div className="relative z-10 p-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-gray-100 leading-tight drop-shadow-lg">
            Seamless Business Incorporation <br /> in Costa Rica.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200/90 max-w-3xl mx-auto">
            Your strategic partners for navigating the complexities of company formation and achieving ambitious growth in Costa Rica.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-sm font-bold text-camber tracking-widest uppercase mb-4 text-gray-600">
              Our Company
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6">
              Local Expertise, Global Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Incorvia is a premier incorporation services company based in San José, dedicated to providing sophisticated solutions for international businesses and investors. We combine our deep-rooted understanding of Costa Rican corporate regulations with a global perspective, offering a strategic advantage to clients looking to establish, operate, and thrive in this dynamic country. Our proactive approach ensures you are always ahead of regulatory changes and positioned for long-term success.
            </p>
          </div>
          <div className="relative h-[300px] w-full">
            <Image
              src="/city.jpg"
              alt="San Jose"
              fill
              className="object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-32 bg-gray-100/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900">
              Our Core Services
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              A comprehensive suite of services for establishing and managing your business in Costa Rica.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...].map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold font-display text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continue for Process, Team, Contact sections, replacing colors only similarly */}
    </main>
  );
}
