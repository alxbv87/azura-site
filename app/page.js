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

// Realistic Globe Component
const ThreeGlobe = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Textures
    const loader = new THREE.TextureLoader();
    const earthTexture = loader.load("/textures/earth_daymap.jpg");
    const earthBump = loader.load("/textures/earth_bump.jpg");
    const earthSpecular = loader.load("/textures/earth_specular.jpg");
    const cloudTexture = loader.load("/textures/earth_clouds.png");

    // Earth mesh
    const earthGeometry = new THREE.SphereGeometry(3, 64, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: earthTexture,
      bumpMap: earthBump,
      bumpScale: 0.05,
      specularMap: earthSpecular,
      specular: new THREE.Color("grey"),
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earthMesh);

    // Cloud mesh
    const cloudGeometry = new THREE.SphereGeometry(3.05, 64, 64);
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
    });
    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(cloudMesh);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      earthMesh.rotation.y += 0.001;
      cloudMesh.rotation.y += 0.0012;
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const onResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", onResize);
      currentMount.removeChild(renderer.domElement);
      renderer.dispose();
      earthGeometry.dispose();
      earthMaterial.dispose();
      cloudGeometry.dispose();
      cloudMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

// Home Page
export default function Home() {
  const [activeTeamMember, setActiveTeamMember] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slideshow logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
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

      {/* About */}
      <section id="about" className="py-20 md:py-32 bg-[#F7F9FB]">
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
