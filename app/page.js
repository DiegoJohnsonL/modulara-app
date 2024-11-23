"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Canvas camera={{ position: [3, 3, 3] }}>
        <OrbitControls />
        <color attach="background" args={["#333"]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial args={[0.5, 0.5, 0.5]} />
        </mesh>
      </Canvas>
    </div>
  );
}
