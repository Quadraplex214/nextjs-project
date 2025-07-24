"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type * as THREE from "three";

function FloatingCube({
  position,
  scale,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.x = time * speed;
      meshRef.current.rotation.y = time * speed * 0.7;
      meshRef.current.position.y =
        position[1] + Math.sin(time * 0.5 + position[0]) * 2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#60a5fa"
        transparent
        opacity={0.15}
        wireframe
      />
    </mesh>
  );
}

function FloatingSphere({
  position,
  scale,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.y = time * speed;
      meshRef.current.position.x =
        position[0] + Math.cos(time * 0.3 + position[2]) * 3;
      meshRef.current.position.z =
        position[2] + Math.sin(time * 0.4 + position[0]) * 2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial
        color="#a78bfa"
        transparent
        opacity={0.2}
        wireframe
      />
    </mesh>
  );
}

export function FloatingElements() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#60a5fa" />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#a78bfa" />

      {/* Floating Cubes */}
      <FloatingCube position={[-15, 5, -10]} scale={2} speed={0.3} />
      <FloatingCube position={[12, -8, -15]} scale={1.5} speed={0.4} />
      <FloatingCube position={[-8, -5, 5]} scale={1.8} speed={0.25} />

      {/* Floating Spheres */}
      <FloatingSphere position={[20, 3, -5]} scale={1.2} speed={0.2} />
      <FloatingSphere position={[-18, -10, -8]} scale={1.6} speed={0.35} />
      <FloatingSphere position={[5, 8, -12]} scale={1.4} speed={0.28} />
    </>
  );
}
