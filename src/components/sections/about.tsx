import { Box, Flex } from "@chakra-ui/react";
import { CustomButton } from "../ui/customButton";
import { CustomText } from "../ui/customText";
import { AnimatedBoxButton } from "../ui/animatedBox";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "../ui/animatedHeading";
import { aboutSectionT } from "@/types";

interface AboutT {
  data: aboutSectionT;
}

export const AboutSection = ({ data }: AboutT) => {
  const { aboutContent, aboutHeading } = data;
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
      h={{ base: "auto", xl: "85vh" }}
      pt={{ base: 8, md: 24 }}
      pb={{ sm: 8, base: 20, xl: 24 }}
      gap={6}
      px={{ base: 6, xl: 0 }}
      zIndex={1}
    >
      <AnimatedHeading isInView={isInView} text={aboutHeading} />

      <Flex flexDirection="column">
        <Box
          p={4}
          maxW="600px"
          color="gray.200"
          bgColor="transparent"
          width={{ base: "auto", md: "35rem" }}
          textAlign="left"
          border="1px solid"
          borderColor="#c7c7c7"
        >
          <CustomText fontFamily="body">{aboutContent}</CustomText>
        </Box>

        <AnimatedBoxButton>
          <CustomButton text="Learn more" />
        </AnimatedBoxButton>
      </Flex>
    </Box>
  );
};
