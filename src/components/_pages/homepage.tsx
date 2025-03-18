import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CanvasLoader } from "../3dElements/canvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "@/utils";
import { PerspectiveCamera } from "@react-three/drei";
import Orb from "../3dElements/orb";
import { useControls, Leva } from "leva";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CareerSection } from "../sections/career";
import { Hero } from "../sections/hero";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  return (
    <Box>
      <Hero />
      <CareerSection />
    </Box>
  );
};

export default Homepage;
