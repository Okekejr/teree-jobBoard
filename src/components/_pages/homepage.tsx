import { Box } from "@chakra-ui/react";
import { AboutSection } from "../sections/about";
import { Hero } from "../sections/hero";

const Homepage = () => {
  return (
    <Box>
      <Hero />
      <AboutSection />
      <Hero />
    </Box>
  );
};

export default Homepage;
