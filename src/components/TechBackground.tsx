
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useIsMobile } from '@/hooks/use-mobile';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 3D objects for the background
const FloatingObjects = () => {
  const isMobile = useIsMobile();
  const count = isMobile ? 15 : 30;
  
  // References to the 3D objects
  const cubeRefs = useRef<THREE.Mesh[]>([]);
  const sphereRefs = useRef<THREE.Mesh[]>([]);
  const torusRefs = useRef<THREE.Mesh[]>([]);
  
  // Animation loop
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    cubeRefs.current.forEach((cube, i) => {
      const t = time * 0.1 + i;
      cube.rotation.x += 0.01 * Math.sin(t * 0.2);
      cube.rotation.y += 0.01 * Math.cos(t * 0.3);
    });
    
    sphereRefs.current.forEach((sphere, i) => {
      const t = time * 0.15 + i * 100;
      sphere.position.y = Math.sin(t * 0.2) * 0.2;
      sphere.position.x = Math.cos(t * 0.1) * 0.1;
    });
    
    torusRefs.current.forEach((torus, i) => {
      const t = time * 0.2 + i * 50;
      torus.rotation.x += 0.005;
      torus.rotation.z += 0.005;
    });
  });
  
  // Generate random positions for the objects
  const positions = Array.from({ length: count }, () => [
    Math.random() * 20 - 10,
    Math.random() * 20 - 10,
    Math.random() * 10 - 15
  ]);
  
  // Materials with tech-themed colors
  const cubeMaterial = new THREE.MeshStandardMaterial({ 
    color: '#4f46e5', 
    transparent: true, 
    opacity: 0.6,
    wireframe: true,
  });
  
  const sphereMaterial = new THREE.MeshStandardMaterial({ 
    color: '#10b981', 
    transparent: true, 
    opacity: 0.7,
    wireframe: true,
  });
  
  const torusMaterial = new THREE.MeshStandardMaterial({ 
    color: '#8b5cf6', 
    transparent: true, 
    opacity: 0.8,
    wireframe: true,
  });
  
  return (
    <>
      {positions.slice(0, count / 3).map((position, i) => (
        <mesh 
          key={`cube-${i}`}
          position={[position[0], position[1], position[2]]}
          ref={(el: THREE.Mesh) => { if (el) cubeRefs.current[i] = el }}
          scale={0.3 + Math.random() * 0.5}
        >
          <boxGeometry args={[1, 1, 1]} />
          <primitive object={cubeMaterial} />
        </mesh>
      ))}
      
      {positions.slice(count / 3, 2 * count / 3).map((position, i) => (
        <mesh 
          key={`sphere-${i}`}
          position={[position[0], position[1], position[2]]}
          ref={(el: THREE.Mesh) => { if (el) sphereRefs.current[i] = el }}
          scale={0.2 + Math.random() * 0.4}
        >
          <sphereGeometry args={[1, 16, 16]} />
          <primitive object={sphereMaterial} />
        </mesh>
      ))}
      
      {positions.slice(2 * count / 3, count).map((position, i) => (
        <mesh 
          key={`torus-${i}`}
          position={[position[0], position[1], position[2]]}
          ref={(el: THREE.Mesh) => { if (el) torusRefs.current[i] = el }}
          scale={0.3 + Math.random() * 0.5}
        >
          <torusGeometry args={[1, 0.3, 16, 32]} />
          <primitive object={torusMaterial} />
        </mesh>
      ))}
    </>
  );
};

const TechBackground: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[0] opacity-30 dark:opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 10]} intensity={0.6} />
        <FloatingObjects />
        {!isMobile && <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.5}
        />}
      </Canvas>
    </div>
  );
};

export default TechBackground;
