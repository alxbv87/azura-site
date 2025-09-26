'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import costaRicaPoints from './costaRicaPoints.json'; // ruta a tu archivo JSON

export default function ConstellationHero() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    scene.background = new THREE.Color(0x1B263B);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(costaRicaPoints.length * 3);

    costaRicaPoints.forEach((p, i) => {
      positions[i * 3] = (p.x - 50) / 10;
      positions[i * 3 + 1] = (p.y - 50) / 10;
      positions[i * 3 + 2] = 0;
    });

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ color: 0xD4AF37, size: 0.05 });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute top-0 left-0 right-0 bottom-0 z-0" />;
}
