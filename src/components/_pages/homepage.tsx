import { Box } from "@chakra-ui/react";
import { AboutSection } from "../sections/about";
import { Hero } from "../sections/hero";
import { WhySection } from "../sections/why";
import { Companies } from "../sections/company";
import { ScrollingText } from "../ui/scrollingText";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { CanvasLoader } from "../3dElements/canvasLoader";
import { PerspectiveCamera } from "@react-three/drei";
import Orb from "../3dElements/orb";
import * as THREE from "three";
import { HomePageContent } from "@/types";

interface HomePageProps {
  data: HomePageContent;
}

const Homepage = ({ data }: HomePageProps) => {
  const orbRef = useRef<THREE.Group>(null);

  const {
    heroTitle,
    heroSubtitle,
    heroCtaText,
    aboutHeading,
    aboutContent,
    whyHeading,
    whyContent,
    featuredCompaniesHeading,
    featuredCompanies,
  } = data;

  const heroData = {
    heroTitle,
    heroSubtitle,
    heroCtaText,
  };

  const aboutData = {
    aboutHeading,
    aboutContent,
  };

  const whyData = {
    whyHeading,
    whyContent,
  };

  const companyData = {
    featuredCompaniesHeading,
    featuredCompanies,
  };

  return (
    <Box>
      {/* Background 3D Orb */}

      <Canvas
        style={{
          position: "fixed",
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

      <Hero data={heroData} />
      <AboutSection data={aboutData} />
      <WhySection data={whyData} />
      <Companies data={companyData} />
      <ScrollingText
        topText={["YOUR", "GATEWAY", "TO", "BLOCKCHAIN."]}
        bottomText={["TREEJOBS", "TREEJOBS", "TREEJOBS", "TREEJOBS"]}
      />
    </Box>
  );
};

export default Homepage;
