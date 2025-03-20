import { Box, Flex } from "@chakra-ui/react";
import { CustomButton } from "../ui/customButton";
import { CustomText } from "../ui/customText";
import { AnimatedBoxButton } from "../ui/animatedBox";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "../ui/animatedHeading";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <Box
      ref={ref}
      id="about"
      className="about"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      w="fit-content"
      h="85vh"
      gap={6}
      zIndex={1}
    >
      <AnimatedHeading isInView={isInView} text="Empowering Your Web3 Career" />

      <Flex flexDirection="column">
        <Box
          p={4}
          maxW="600px"
          color="gray.200"
          bgColor="transparent"
          width="35rem"
          textAlign={{ base: "center", md: "left" }}
          border="1px solid"
          borderColor="#c7c7c7"
        >
          <CustomText fontFamily="body">
            TreeJobs aggregates the best Web3 job listings from innovative
            companies across the globe. We focus on providing roles in growing
            projects that are shaping the future of blockchain, offering you a
            chance to work with cutting-edge technology and contribute to the
            decentralized revolution. Whether you’re looking to break into Web3
            or take the next step in your career, we’re here to help you make
            that connection.
          </CustomText>
        </Box>

        <AnimatedBoxButton>
          <CustomButton text="Explore Jobs" />
        </AnimatedBoxButton>
      </Flex>
    </Box>
  );
};
