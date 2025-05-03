
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useIsMobile } from '@/hooks/use-mobile';
import { OrbitControls, Text3D, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Android mascot component
const AndroidMascot = ({ position = [0, 0, -5] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3 + position[1];
    }
  });
  
  return (
    <mesh ref={meshRef} position={position} scale={0.5}>
      {/* Android head */}
      <group>
        {/* Body */}
        <mesh>
          <boxGeometry args={[1.2, 1.4, 0.7]} />
          <meshStandardMaterial color="#a4c639" />
        </mesh>
        
        {/* Head */}
        <mesh position={[0, 1, 0]}>
          <sphereGeometry args={[0.7, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.85]} />
          <meshStandardMaterial color="#a4c639" />
        </mesh>
        
        {/* Eyes */}
        <mesh position={[-0.25, 1.05, 0.5]} scale={[0.15, 0.15, 0.15]}>
          <sphereGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[0.25, 1.05, 0.5]} scale={[0.15, 0.15, 0.15]}>
          <sphereGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
        
        {/* Antennas */}
        <mesh position={[-0.3, 1.5, 0]} rotation={[0, 0, Math.PI/12]}>
          <cylinderGeometry args={[0.03, 0.03, 0.3]} />
          <meshStandardMaterial color="#a4c639" />
        </mesh>
        <mesh position={[0.3, 1.5, 0]} rotation={[0, 0, -Math.PI/12]}>
          <cylinderGeometry args={[0.03, 0.03, 0.3]} />
          <meshStandardMaterial color="#a4c639" />
        </mesh>
        
        {/* Arms */}
        <mesh position={[-0.8, 0.3, 0]} rotation={[0, 0, -Math.PI/6]}>
          <cylinderGeometry args={[0.1, 0.1, 0.5]} />
          <meshStandardMaterial color="#a4c639" />
        </mesh>
        <mesh position={[0.8, 0.3, 0]} rotation={[0, 0, Math.PI/6]}>
          <cylinderGeometry args={[0.1, 0.1, 0.5]} />
          <meshStandardMaterial color="#a4c639" />
        </mesh>
        
        {/* Legs */}
        <mesh position={[-0.35, -0.9, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.5]} />
          <meshStandardMaterial color="#a4c639" />
        </mesh>
        <mesh position={[0.35, -0.9, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.5]} />
          <meshStandardMaterial color="#a4c639" />
        </mesh>
      </group>
    </mesh>
  );
};

// ML Neural Network visualization
const NeuralNetwork = ({ position = [0, 0, 0] }) => {
  const groupRef = useRef<THREE.Group>(null);
  const nodeCount = 20;
  const connectionCount = 30;
  
  // Generate random positions for nodes
  const nodePositions = Array.from({ length: nodeCount }, () => [
    (Math.random() - 0.5) * 8,
    (Math.random() - 0.5) * 8,
    (Math.random() - 0.5) * 4
  ]);
  
  // Generate random connections between nodes
  const connections = Array.from({ length: connectionCount }, () => {
    const start = Math.floor(Math.random() * nodeCount);
    let end = Math.floor(Math.random() * nodeCount);
    // Ensure we don't connect a node to itself
    while (end === start) end = Math.floor(Math.random() * nodeCount);
    return { start, end };
  });
  
  // Animation for the neural network
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });
  
  return (
    <group ref={groupRef} position={position}>
      {/* Nodes */}
      {nodePositions.map((pos, i) => (
        <mesh key={`node-${i}`} position={pos}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial 
            color={i % 3 === 0 ? "#4f46e5" : i % 3 === 1 ? "#10b981" : "#8b5cf6"} 
            transparent 
            opacity={0.8} 
          />
        </mesh>
      ))}
      
      {/* Connections */}
      {connections.map((conn, i) => {
        const start = nodePositions[conn.start];
        const end = nodePositions[conn.end];
        
        // Calculate direction and distance
        const direction = new THREE.Vector3(
          end[0] - start[0],
          end[1] - start[1],
          end[2] - start[2]
        );
        const length = direction.length();
        
        // Normalize direction and create center position
        direction.normalize();
        const center = [
          (start[0] + end[0]) / 2,
          (start[1] + end[1]) / 2,
          (start[2] + end[2]) / 2
        ];
        
        // Calculate rotation to point cylinder from start to end
        const arrow = new THREE.ArrowHelper(
          direction,
          new THREE.Vector3(0, 0, 0)
        );
        const rotation = new THREE.Euler().setFromQuaternion(arrow.quaternion);
        
        return (
          <mesh 
            key={`connection-${i}`} 
            position={center} 
            rotation={[rotation.x, rotation.y, rotation.z]}
          >
            <cylinderGeometry args={[0.02, 0.02, length, 6]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#4f46e5" : "#10b981"} 
              transparent 
              opacity={0.4} 
            />
          </mesh>
        );
      })}
    </group>
  );
};

// 3D objects for the background
const FloatingObjects = () => {
  const isMobile = useIsMobile();
  const count = isMobile ? 10 : 20;
  
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

// Code blocks and data structures to represent ML concepts
const CodeBlocks = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });
  
  return (
    <group ref={groupRef} position={[5, -3, -8]}>
      <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[2, 3, 0.1]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      <mesh position={[0, 0, 0.06]} rotation={[0, Math.PI / 4, 0]}>
        <Text3D
          size={0.3}
          height={0.02}
          position={[-0.8, 0.8, 0]}
          font="/fonts/Inter_Regular.json"
        >
          import tensorflow as tf
          <meshStandardMaterial color="#38bdf8" />
        </Text3D>
        <Text3D
          size={0.3}
          height={0.02}
          position={[-0.8, 0.4, 0]}
          font="/fonts/Inter_Regular.json"
        >
          model = tf.keras.Sequential()
          <meshStandardMaterial color="#a5b4fc" />
        </Text3D>
        <Text3D
          size={0.3}
          height={0.02}
          position={[-0.8, 0, 0]}
          font="/fonts/Inter_Regular.json"
        >
          model.add(tf.keras.layers)
          <meshStandardMaterial color="#a5b4fc" />
        </Text3D>
        <Text3D
          size={0.3}
          height={0.02}
          position={[-0.8, -0.4, 0]}
          font="/fonts/Inter_Regular.json"
        >
          model.compile()
          <meshStandardMaterial color="#c4b5fd" />
        </Text3D>
        <Text3D
          size={0.3}
          height={0.02}
          position={[-0.8, -0.8, 0]}
          font="/fonts/Inter_Regular.json"
        >
          model.fit(x_train, y_train)
          <meshStandardMaterial color="#34d399" />
        </Text3D>
      </mesh>
    </group>
  );
};

const TechBackground: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[0] opacity-30 dark:opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 10]} intensity={0.6} />
        <spotLight position={[-10, -10, -10]} intensity={0.4} />
        
        {/* Android Mascot */}
        <AndroidMascot position={[-5, 0, -3]} />
        
        {/* Neural Network visualization */}
        <NeuralNetwork position={[3, 2, -10]} />
        
        {/* Original floating objects */}
        <FloatingObjects />
        
        {/* Code blocks for ML */}
        <CodeBlocks />
        
        {/* Controls */}
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
