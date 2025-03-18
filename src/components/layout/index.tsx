"use client";

import { Box, Container, VStack } from "@chakra-ui/react";
import { JSX, Suspense, useRef } from "react";
import { Navbar } from "./navigation";
import { Leva, useControls } from "leva";
import { CanvasLoader } from "../3dElements/canvasLoader";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import Orb from "../3dElements/orb";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP);

interface PropsStack {
  children: JSX.Element;
}

export const PageContainer = ({ children }: PropsStack) => {
  const orbRef = useRef<THREE.Group>(null);

  const x = useControls("Terminal", {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationX: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 0,
      min: -10,
      max: 10,
    },
    scale: {
      value: 1,
      min: 1,
      max: 100,
    },
  });

  return (
    <Box minH="100vh" w="100%">
      {/* Background 3D Orb */}
      <Leva />

      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />

          <Orb ref={orbRef} />

          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Suspense>
      </Canvas>

      <Container maxW="5xl" p={0}>
        <VStack>
          <Navbar />
        </VStack>
        <Box height="13vh" maxH="260px" />
        {children}
      </Container>
    </Box>
  );
};
