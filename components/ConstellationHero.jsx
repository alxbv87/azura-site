import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ConstellationHero = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Escena de Three.js
    const scene = new THREE.Scene();

    // Cámara
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderizador
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    // Material de las partículas
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00ff00,
      size: 0.05,
    });

    // Cargar los puntos desde el archivo JSON
    fetch('/costaRicaPoints.json')
      .then((response) => response.json())
      .then((points) => {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(points.length * 3);

        points.forEach((point, index) => {
          positions[index * 3] = point.x;
          positions[index * 3 + 1] = point.y;
          positions[index * 3 + 2] = 0; // Z fijo para mantener las partículas en el plano
        });

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        // Crear el sistema de partículas
        const particles = new THREE.Points(geometry, particleMaterial);
        scene.add(particles);

        // Animación
        const animate = () => {
          requestAnimationFrame(animate);
          particles.rotation.y += 0.001;
          renderer.render(scene, camera);
        };
        animate();
      });

    // Manejo del redimensionamiento de la ventana
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('resize', onWindowResize);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default ConstellationHero;
