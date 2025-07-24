import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { ParticleField } from "@/components/particle-field";
import { FloatingElements } from "@/components/floating-element";
import { ScrollProgress } from "@/components/scroll-progress";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="relative bg-gray-900 min-h-screen">
      {/* Fixed 3D Background */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ParticleField />
            <FloatingElements />
          </Suspense>
        </Canvas>
      </div>

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
