'use client';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ParticleNetwork = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1B263B); // dark navy background

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

    // Particles
    const particlesCount = 500;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 12;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xD4AF37, // gold
      size: 0.05,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Lines between close particles
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x218380, transparent: true, opacity: 0.3 });
    const lineSegments = new THREE.Group();
    scene.add(lineSegments);

    const connectDistance = 1.5;

    const createLines = () => {
      lineSegments.clear();
      const positionsArray = particlesGeometry.attributes.position.array;
      for (let i = 0; i < particlesCount; i++) {
        for (let j = i + 1; j < particlesCount; j++) {
          const dx = positionsArray[i * 3] - positionsArray[j * 3];
          const dy = positionsArray[i * 3 + 1] - positionsArray[j * 3 + 1];
          const dz = positionsArray[i * 3 + 2] - positionsArray[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < connectDistance) {
            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute('position', new THREE.Float32BufferAttribute([
              positionsArray[i * 3], positionsArray[i * 3 + 1], positionsArray[i * 3 + 2],
              positionsArray[j * 3], positionsArray[j * 3 + 1], positionsArray[j * 3 + 2]
            ], 3));
            const line = new THREE.Line(geometry, lineMaterial);
            lineSegments.add(line);
          }
        }
      }
    };

    createLines();

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate particles
      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0004;
      lineSegments.rotation.y += 0.0008;
      lineSegments.rotation.x += 0.0004;

      // Slight camera movement with mouse
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const onResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (currentMount) currentMount.removeChild(renderer.domElement);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute top-0 left-0 right-0 bottom-0 z-0"
    />
  );
};

export default ParticleNetwork;
