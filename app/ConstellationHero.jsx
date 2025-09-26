'use client';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ConstellationHero = () => {
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
    camera.position.z = 15;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Constellation particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 3000;
    const posArray = new Float32Array(particlesCnt * 3);

    for (let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 30;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffffff,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.0005;
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
      if (currentMount) currentMount.removeChild(renderer.domElement);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
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

export default ConstellationHero;
