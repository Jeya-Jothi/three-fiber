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
import { useControls } from "leva";
import { color } from "three/tsl";

function AnimatedBox() {
  const boxRef = useRef<THREE.Mesh>(null);

  const { color, speed } = useControls({
    color: "#00bfff",
    speed: {
      value: 0.005,
      min: 0.0,
      max: 0.03,
      step: 0.001,
    },
  });

  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.x += speed;
      boxRef.current.rotation.y += speed;
      boxRef.current.rotation.z += speed;
    }
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[2, 2, 2]} />
      <axesHelper args={[10]} />

      {/* <sphereGeometry args={[3, 20, 20]} /> */}
      <meshStandardMaterial color={color} />
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
