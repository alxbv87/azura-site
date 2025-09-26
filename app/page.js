'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// CHANGE: Added an 'imageSrc' property to each service object
const services = [
  {
    title: "Company Incorporation",
    desc: "End-to-end support for registering your business in Costa Rica, ensuring full compliance.",
    imageSrc: "/images/incorporation.png",
  },
  {
    title: "Corporate Structuring",
    desc: "Tailored entity structuring solutions for multinational corporations and foreign investors.",
    imageSrc: "/images/structuring.png",
  },
  {
    title: "Regulatory Compliance",
    desc: "Ongoing compliance services to keep your operations aligned with Costa Rican law.",
    imageSrc: "/images/compliance.png",
  },
  {
    title: "Real Estate Advisory",
    desc: "Expert guidance on real estate transactions and leveraging Costa Rica’s Free Trade Zones.",
    imageSrc: "/images/real-estate.jpg",
  },
  {
    title: "Accounting & Tax",
    desc: "Streamlined tax planning, accounting, and reporting services designed for global standards.",
    imageSrc: "/images/accounting.jpg",
  },
  {
    title: "Immigration Support",
    desc: "End-to-end visa and residency support for executives, investors, and employees.",
    imageSrc: "/images/immigration.jpg",
  },
];

// 3D Network Component
const ThreeNetwork = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene
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

    // Hubs (points)
    const hubCount = 150;
    const hubGeometry = new THREE.BufferGeometry();
    const hubPositions = new Float32Array(hubCount * 3);
    for (let i = 0; i < hubCount * 3; i++) {
      hubPositions[i] = (Math.random() - 0.5) * 12;
    }
    hubGeometry.setAttribute('position', new THREE.BufferAttribute(hubPositions, 3));

    const hubMaterial = new THREE.PointsMaterial({
      color: 0xD4AF37, // gold
      size: 0.05,
    });

    const hubs = new THREE.Points(hubGeometry, hubMaterial);
    scene.add(hubs);

    // Connections (lines)
    const linesGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x218380, // teal
      transparent: true,
      opacity: 0.2,
    });

    for (let i = 0; i < hubCount; i++) {
      for (let j = i + 1; j < hubCount; j++) {
        const dx = hubPositions[i * 3] - hubPositions[j * 3];
        const dy = hubPositions[i * 3 + 1] - hubPositions[j * 3 + 1];
        const dz = hubPositions[i * 3 + 2] - hubPositions[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (distance < 3) {
          linePositions.push(
            hubPositions[i * 3],
            hubPositions[i * 3 + 1],
            hubPositions[i * 3 + 2],
            hubPositions[j * 3],
            hubPositions[j * 3 + 1],
            hubPositions[j * 3 + 2]
          );
        }
      }
    }

    linesGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    const linesMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(linesMesh);

    // Mouse interaction
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animate
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

    // Resize
    const onWindowResize = () => {
      if (!currentMount) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);
    onWindowResize();

    // Cleanup
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

          {/* Right side: About Section Content */}
          <div className="w-full md:w-1/2 mt-16 md:mt-0 md:pl-12">
            <div>
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-[#218380]">Our Company</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Local Expertise, Global Vision</h2>
              <p className="text-base leading-relaxed mb-8">
                Incorvia is a premier incorporation services company based in San José, dedicated to providing sophisticated solutions for international businesses and investors. We combine our deep-rooted understanding of Costa Rican corporate regulations with a global perspective, offering a strategic advantage to clients.
              </p>
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
                // CHANGE: This div now uses an inline style to set the background image with a dark overlay.
                // The solid background color class has been removed.
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