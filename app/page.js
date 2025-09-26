'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import * as THREE from 'three';

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

/* -------------------- 3D Animations -------------------- */

// 1. Hero: Globe with Orbiting Icons
const ThreeGlobe = () => {
  const mountRef = useRef(null);
  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth/currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Central Globe
    const globeGeom = new THREE.SphereGeometry(2,64,64);
    const globeMat = new THREE.MeshStandardMaterial({ color: 0x1B263B, roughness: 1 });
    const globe = new THREE.Mesh(globeGeom, globeMat);
    scene.add(globe);

    // Orbiting Icons (small spheres)
    const orbitCount = 12;
    const orbitGroup = new THREE.Group();
    for(let i=0;i<orbitCount;i++){
      const iconGeom = new THREE.SphereGeometry(0.1,16,16);
      const iconMat = new THREE.MeshStandardMaterial({ color: 0xD4AF37 });
      const icon = new THREE.Mesh(iconGeom, iconMat);
      const angle = (i/orbitCount)*Math.PI*2;
      icon.position.set(Math.cos(angle)*3,Math.sin(angle)*1.5,Math.sin(angle)*2);
      orbitGroup.add(icon);
    }
    scene.add(orbitGroup);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff,0.6);
    const point = new THREE.PointLight(0xffffff,0.8);
    point.position.set(5,5,5);
    scene.add(ambient, point);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.002;
      orbitGroup.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = ()=>{camera.aspect=currentMount.clientWidth/currentMount.clientHeight;camera.updateProjectionMatrix();renderer.setSize(currentMount.clientWidth,currentMount.clientHeight);};
    window.addEventListener('resize', onResize);

    return ()=>{
      window.removeEventListener('resize', onResize);
      currentMount.removeChild(renderer.domElement);
      globeGeom.dispose();
      globeMat.dispose();
    }
  },[]);
  return <div ref={mountRef} className="absolute top-0 left-0 right-0 bottom-0 z-0" />;
};

// 2. About: Flowing Documents
const ThreeDocs = () => {
  const mountRef = useRef(null);
  useEffect(()=>{
    const currentMount = mountRef.current;
    if(!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75,currentMount.clientWidth/currentMount.clientHeight,0.1,1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({alpha:true,antialias:true});
    renderer.setSize(currentMount.clientWidth,currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Documents as planes
    const docCount = 30;
    const docs = [];
    const docGeom = new THREE.PlaneGeometry(0.5,0.3);
    const docMat = new THREE.MeshStandardMaterial({ color:0x218380, side: THREE.DoubleSide });
    for(let i=0;i<docCount;i++){
      const doc = new THREE.Mesh(docGeom,docMat);
      doc.position.set((Math.random()-0.5)*6,(Math.random()-0.5)*3,(Math.random()-0.5)*3);
      doc.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);
      docs.push(doc);
      scene.add(doc);
    }

    const ambient = new THREE.AmbientLight(0xffffff,0.6);
    const point = new THREE.PointLight(0xffffff,0.8);
    point.position.set(5,5,5);
    scene.add(ambient, point);

    const animate = ()=>{
      requestAnimationFrame(animate);
      docs.forEach(d=>{
        d.rotation.x += 0.005;
        d.rotation.y += 0.005;
        d.position.y -= 0.01;
        if(d.position.y<-2) d.position.y=2;
      });
      renderer.render(scene,camera);
    };
    animate();

    const onResize = ()=>{camera.aspect=currentMount.clientWidth/currentMount.clientHeight;camera.updateProjectionMatrix();renderer.setSize(currentMount.clientWidth,currentMount.clientHeight);};
    window.addEventListener('resize',onResize);

    return ()=>{
      window.removeEventListener('resize',onResize);
      currentMount.removeChild(renderer.domElement);
      docGeom.dispose();
      docMat.dispose();
    }

  },[]);
  return <div ref={mountRef} className="absolute top-0 left-0 right-0 bottom-0 z-0"/>;
};

// 3. Services: Orbiting Service Icons
const ThreeServices = () => {
  const mountRef = useRef(null);
  useEffect(()=>{
    const currentMount = mountRef.current;
    if(!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75,currentMount.clientWidth/currentMount.clientHeight,0.1,1000);
    camera.position.z=5;
    const renderer = new THREE.WebGLRenderer({alpha:true,antialias:true});
    renderer.setSize(currentMount.clientWidth,currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Central sphere
    const centerGeom = new THREE.SphereGeometry(0.5,32,32);
    const centerMat = new THREE.MeshStandardMaterial({color:0xD4AF37});
    const center = new THREE.Mesh(centerGeom,centerMat);
    scene.add(center);

    // Orbiting service icons
    const orbitCount = services.length;
    const orbitGroup = new THREE.Group();
    for(let i=0;i<orbitCount;i++){
      const iconGeom = new THREE.SphereGeometry(0.15,16,16);
      const iconMat = new THREE.MeshStandardMaterial({color:0x218380});
      const icon = new THREE.Mesh(iconGeom,iconMat);
      const angle = (i/orbitCount)*Math.PI*2;
      icon.position.set(Math.cos(angle)*2,Math.sin(angle)*1,Math.sin(angle)*0.5);
      orbitGroup.add(icon);
    }
    scene.add(orbitGroup);

    const ambient = new THREE.AmbientLight(0xffffff,0.6);
    const point = new THREE.PointLight(0xffffff,0.8);
    point.position.set(5,5,5);
    scene.add(ambient, point);

    const animate = ()=>{
      requestAnimationFrame(animate);
      orbitGroup.rotation.y += 0.005;
      center.rotation.y += 0.002;
      renderer.render(scene,camera);
    };
    animate();

    const onResize = ()=>{camera.aspect=currentMount.clientWidth/currentMount.clientHeight;camera.updateProjectionMatrix();renderer.setSize(currentMount.clientWidth,currentMount.clientHeight);};
    window.addEventListener('resize',onResize);

    return ()=>{
      window.removeEventListener('resize',onResize);
      currentMount.removeChild(renderer.domElement);
      centerGeom.dispose();
      centerMat.dispose();
    }
  },[]);
  return <div ref={mountRef} className="absolute top-0 left-0 right-0 bottom-0 z-0"/>;
};

/* -------------------- Main Page -------------------- */
export default function Home(){
  const [currentIndex,setCurrentIndex] = useState(0);
  useEffect(()=>{
    const interval = setInterval(()=>{setCurrentIndex(prev=>(prev+1)%aboutImages.length)},4000);
    return ()=>clearInterval(interval);
  },[]);
  
  return (
    <main className="bg-[#F7F9FB] font-sans text-[#2E3B4E]">

      {/* Header */}
      <header className="fixed top-4 left-6 z-50">
        <h1 className="text-xl md:text-2xl font-bold text-[#1B263B]">Incorvia</h1>
      </header>

      {/* Hero */}
      <section className="relative h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left overflow-hidden bg-gradient-to-b from-[#1B263B] via-[#2E3B4E]/60 to-[#1B263B]">
        <div className="relative z-10 px-6 md:px-12 md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg mb-6">
            Seamless Business Incorporation <br/> in Costa Rica
          </h1>
          <p className="text-lg md:text-xl text-[#F7F9FB]/90 mb-8 max-w-md">
            Your strategic partners for navigating the complexities of company formation and achieving ambitious growth in Costa Rica.
          </p>
          <a href="#services" className="bg-[#D4AF37] hover:bg-[#C49E2D] text-white px-8 py-4 rounded-lg font-semibold transition">
            Explore Our Services
          </a>
        </div>
        <div className="relative w-full md:w-1/2 h-[400px] md:h-[600px] mt-12 md:mt-0">
          <ThreeGlobe />
        </div>
      </section>

      {/* About */}
      <section className="relative py-20 md:py-32 bg-[#F7F9FB]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-sm font-bold tracking-widest uppercase mb-4 text-[#218380]">Our Company</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-6">Local Expertise, Global Vision</h2>
            <p className="text-lg leading-relaxed mb-8 text-[#2E3B4E]">
              Incorvia is a premier incorporation services company based in San José, dedicated to providing sophisticated solutions for international businesses and investors. We combine our deep-rooted understanding of Costa Rican corporate regulations with a global perspective, offering a strategic advantage to clients looking to establish, operate, and thrive in this dynamic country. Our proactive approach ensures you are always ahead of regulatory changes and positioned for long-term success.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-lg shadow-2xl">
            <ThreeDocs />
            {aboutImages.map((src,idx)=>(
              <Image key={idx} src={src} alt="About Incorvia" fill className={`object-cover transition-opacity duration-1000 ${idx===currentIndex?'opacity-100':'opacity-0'}`}/>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B]">Our Core Services</h2>
          <p className="mt-4 text-lg text-[#2E3B4E]">A comprehensive suite of services for establishing and managing your business in Costa Rica.</p>
        </div>
        <div className="relative h-[400px] md:h-[500px] w-full mb-20">
          <ThreeServices />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(s=>(
            <div key={s.title} className="p-8 rounded-lg bg-[#F7F9FB] border border-[#D4AF37]/40 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-[#1B263B] mb-3">{s.title}</h3>
              <p className="text-[#2E3B4E]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
