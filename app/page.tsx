"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import {
  FirstPersonControls,
  OrbitControls,
  GizmoHelper,
  GizmoViewcube,
  GizmoViewport,
} from "@react-three/drei";

function AnimatedBox() {
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.005;
      boxRef.current.rotation.y += 0.005;
      boxRef.current.rotation.z += 0.005;
    }
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[2, 2, 2]} />
      <axesHelper args={[10]} />

      {/* <sphereGeometry args={[3, 20, 20]} /> */}
      <meshStandardMaterial color={0x00bfff} />
    </mesh>
  );
}

export default function Home() {
  return (
    <div className="canvas-container">
      <Canvas>
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          {/* <GizmoViewcube /> */}
          <GizmoViewport />
        </GizmoHelper>

        {/* <FirstPersonControls movementSpeed={1} autoForward /> */}
        <gridHelper args={[20, 20, "orange", "pink"]} />
        <axesHelper args={[10]} />
        <OrbitControls />
        <AnimatedBox />
        <directionalLight position={[2, 3, 2]} />
        {/* <directionalLight position={[-5, -5, -5]} />
        <directionalLight position={[2, -2, -1]} /> */}
      </Canvas>
    </div>
  );
}
