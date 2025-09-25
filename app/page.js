"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import * as THREE from "three";

// ✅ Correct Unsplash images
const teamData = [
  {
    name: "Johnathan Hayes",
    title: "Managing Director",
    bio: "With over two decades of experience in international business and corporate structuring, Johnathan provides strategic leadership to the company and its clients. His guidance is sought by multinational corporations and investors entering the Costa Rican market.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Samantha Carter",
    title: "Head of Corporate Services",
    bio: "Samantha is a leading authority on entity structuring for foreign-owned companies in Costa Rica. She guides clients through every step of the incorporation process, from initial filing to ongoing compliance.",
    img: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    title: "Lead, Real Estate & FTZ",
    bio: "Michael's expertise lies in navigating the complexities of Costa Rican real estate transactions and advising clients on leveraging the benefits of the country's Free Trade Zone (FTZ) regime.",
    img: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop",
  },
  {
    name: "Eleanor Vance",
    title: "Senior Compliance Specialist",
    bio: "Eleanor is adept at navigating the ever-evolving Costa Rican regulatory landscape. She ensures clients maintain perfect compliance, mitigating risk and ensuring operational integrity.",
    img: "https://images.unsplash.com/photo-1627541593348-41098675b399?q=80&w=1887&auto=format&fit=crop",
  },
];

// 🌍 Three.js Globe
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
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Sphere
    const geometry = new THREE.SphereGeometry(2.2, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 5000;
    const posArray = new Float32Array(particlesCnt * 3);
    for (let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0xd4af37,
    });
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    camera.position.z = 5;

    let mouseX = 0,
      mouseY = 0;
    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.0005;
      particlesMesh.rotation.y += 0.0002;
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    const onWindowResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("mousemove", onMouseMove);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute top-0 left-0 right-0 bottom-0 z-0"
    />
  );
};

export default function Home() {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  return (
    <main>
      {/* HERO */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      >
        <ThreeGlobe />
        <div className="relative z-10 p-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-brand-light leading-tight">
            Seamless Business Incorporation
            <br />
            in Costa Rica.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-light max-w-3xl mx-auto">
            Your strategic partners for navigating the complexities of company
            formation and achieving ambitious growth in Costa Rica.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-4">
              Our Company
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-light mb-6">
              Local Expertise, Global Vision
            </h2>
            <p className="text-lg text-brand-muted leading-relaxed mb-8">
              Incorvia is a premier incorporation services company based in San
              José, dedicated to providing sophisticated solutions for
              international businesses and investors. We combine our deep-rooted
              understanding of Costa Rican corporate regulations with a global
              perspective, offering a strategic advantage to clients looking to
              establish, operate, and thrive in this dynamic country. Our
              proactive approach ensures you are always ahead of regulatory
              changes and positioned for long-term success.
            </p>
          </div>
          <div className="relative h-[600px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1533167523448-420684094212?q=80&w=2070&auto=format&fit=crop"
              alt="Beautiful Costa Rican beach representing a prime location for business"
              fill
              className="object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-32 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-light">
              Our Core Services
            </h2>
            <p className="mt-4 text-lg text-brand-muted">
              A comprehensive suite of services for establishing and managing
              your business in Costa Rica.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 rounded-lg bg-white/5">
              <h3 className="text-2xl font-semibold font-display text-brand-light mb-3">
                Company Formation (S.A. &amp; S.R.L.)
              </h3>
              <p className="text-brand-muted">
                Seamless incorporation of Costa Rican entities, tailored for
                liability protection and tax efficiency.
              </p>
            </div>
            <div className="card p-8 rounded-lg bg-white/5">
              <h3 className="text-2xl font-semibold font-display text-brand-light mb-3">
                Regulatory &amp; Tax Compliance
              </h3>
              <p className="text-brand-muted">
                Ensuring your business adheres to all national regulations,
                including annual filings and tax obligations.
              </p>
            </div>
            <div className="card p-8 rounded-lg bg-white/5">
              <h3 className="text-2xl font-semibold font-display text-brand-light mb-3">
                Residency &amp; Work Permits
              </h3>
              <p className="text-brand-muted">
                Expert guidance for executives and investors seeking legal
                residency and work authorization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-light">
              Our Streamlined Process
            </h2>
            <p className="mt-4 text-lg text-brand-muted">
              A structured and transparent approach to ensure your objectives
              are met with precision and efficiency at every stage.
            </p>
          </div>
          <div className="relative process-timeline max-w-3xl mx-auto">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                desc: "We begin with a confidential discussion to understand your unique situation and business goals in Costa Rica.",
              },
              {
                step: "2",
                title: "Strategic Plan",
                desc: "Our team develops a bespoke incorporation strategy, outlining a clear roadmap and a transparent fee structure.",
              },
              {
                step: "3",
                title: "Execution &amp; Filing",
                desc: "We meticulously handle all necessary filings and interactions with Costa Rican government agencies on your behalf.",
              },
              {
                step: "4",
                title: "Ongoing Compliance",
                desc: "Beyond formation, we provide continuous support to ensure your business remains in good standing with all local regulations.",
              },
            ].map((item) => (
              <div key={item.step} className="relative pl-12 pb-16">
                <div className="process-item-dot">{item.step}</div>
                <h3 className="text-2xl font-bold font-display text-brand-light">
                  {item.title}
                </h3>
                <p className="mt-2 text-brand-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-20 md:py-32 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-light">
              Meet Our Leadership
            </h2>
            <p className="mt-4 text-lg text-brand-muted">
              A collective of seasoned experts dedicated to your success in
              Costa Rica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <ul className="space-y-2">
                {teamData.map((member, index) => (
                  <li
                    key={member.name}
                    onClick={() => setActiveTeamMember(index)}
                  >
                    <div
                      className={`p-6 border-l-4 text-brand-muted hover:text-brand-light cursor-pointer transition-all duration-300 ${
                        activeTeamMember === index
                          ? "border-brand-accent bg-white/5"
                          : "border-transparent"
                      }`}
                    >
                      <h4 className="text-2xl font-bold">{member.name}</h4>
                      <p>{member.title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Active member */}
            <div className="md:col-span-2">
              <div className="transition-opacity duration-500">
                <div className="relative w-full h-96 mb-6">
                  <Image
                    src={teamData[activeTeamMember].img}
                    alt={teamData[activeTeamMember].name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-3xl font-bold font-display text-brand-light">
                  {teamData[activeTeamMember].name}
                </h3>
                <p className="text-xl text-brand-accent mt-1">
                  {teamData[activeTeamMember].title}
                </p>
                <p className="text-brand-muted mt-4 leading-relaxed">
                  {teamData[activeTeamMember].bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 text-center">
        <h2 className="text-4xl md:text-6xl font-bold font-display text-brand-light">
          Begin Your Costa Rican Venture
        </h2>
        <p className="text-lg text-brand-muted max-w-2xl mx-auto my-8">
          Contact us to schedule a confidential consultation and discover how
          our strategic guidance can empower your business&apos;s success.
        </p>
        <a
          href="#"
          className="inline-block bg-brand-accent text-brand-light px-10 py-4 rounded-md font-bold hover:bg-opacity-90 transition duration-300 text-lg"
        >
          Let&apos;s Talk
        </a>
      </section>
    </main>
  );
}
