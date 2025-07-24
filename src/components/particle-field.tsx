"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export function ParticleField() {
  const meshRef = useRef<THREE.Points>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  // Create particles with enhanced colors for dark mode
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);

    for (let i = 0; i < 2000; i++) {
      // Random positions in a sphere
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      // Enhanced colors for dark mode (brighter blues, purples, and cyans)
      const color = new THREE.Color();
      const hue = 0.55 + Math.random() * 0.3; // Blue to purple to cyan range
      const saturation = 0.8 + Math.random() * 0.2;
      const lightness = 0.6 + Math.random() * 0.4;
      color.setHSL(hue, saturation, lightness);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return [positions, colors];
  }, []);

  // Mouse interaction
  const handleMouseMove = (event: MouseEvent) => {
    mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  // Animation loop
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();

      // Rotate the entire particle field slowly
      meshRef.current.rotation.x = time * 0.05;
      meshRef.current.rotation.y = time * 0.03;

      // Mouse interaction effect
      meshRef.current.rotation.x += mousePosition.current.y * 0.1;
      meshRef.current.rotation.y += mousePosition.current.x * 0.1;

      // Update particle positions with wave effect
      const positions = meshRef.current.geometry.attributes.position
        .array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + positions[i] * 0.1) * 0.01;
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  // Add mouse listener
  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", handleMouseMove);
  }

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.8} vertexColors transparent opacity={0.8} />
    </points>
  );
}
