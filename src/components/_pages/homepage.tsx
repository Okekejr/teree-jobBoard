import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Suspense, useEffect, useRef } from "react";
import { CustomButton } from "../ui/customButton";
import { Canvas } from "@react-three/fiber";
import { CanvasLoader } from "../3dElements/canvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "@/utils";
import Cube from "../3dElements/cube";
import { PerspectiveCamera } from "@react-three/drei";

const MotionHeading = motion(Heading);

const Homepage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes({ isSmall, isMobile, isTablet });

  return (
    <Box
      ref={heroRef}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      h="100vh"
      bgGradient="linear(to-b, #000, #0a0f25)"
      borderRadius="0 0 50px 50px"
      p={6}
    >
      <MotionHeading
        fontSize={{ base: "4xl", md: "6rem" }}
        fontWeight="bold"
        color="white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Your Gateway to Blockchain
      </MotionHeading>

      <CustomButton
        mt={6}
        text="Get Started"
        colorScheme="blue"
        borderRadius="full"
      />

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

          <group>
            <Cube position={sizes.cubePosition} />
          </group>

          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default Homepage;
