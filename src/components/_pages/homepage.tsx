import { Box } from "@chakra-ui/react";
import { AboutSection } from "../sections/about";
import { Hero } from "../sections/hero";
import { WhySection } from "../sections/why";
import { Companies } from "../sections/company";

const Homepage = () => {
  return (
    <Box>
      <Hero />
      <AboutSection />
      <WhySection />
      <Companies />
    </Box>
  );
};

export default Homepage;
