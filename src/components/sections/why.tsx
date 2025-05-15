import { Box, Flex } from "@chakra-ui/react";
import { CustomText } from "../ui/customText";
import { CustomButton } from "../ui/customButton";
import { AnimatedBoxButton } from "../ui/animatedBox";
import { AnimatedHeading } from "../ui/animatedHeading";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { whySectionT } from "@/types";

interface WhyT {
  data: whySectionT;
}

export const WhySection = ({ data }: WhyT) => {
  const { whyContent, whyHeading } = data;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <Flex justifyContent={{ md: "flex-end" }} w="full">
      <Box
        ref={ref}
        id="why"
        className="why"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        w="fit-content"
        h={{ xl: "85vh" }}
        px={{ base: 6, xl: 0 }}
        pt={{ base: 8, md: 24 }}
        pb={{ sm: 8, base: 20, xl: 24 }}
        gap={6}
        zIndex={1}
        ml={{ base: 0, md: "auto" }}
      >
        <AnimatedHeading isInView={isInView} text={whyHeading} />

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
            <CustomText fontFamily="body">{whyContent}</CustomText>
          </Box>

          <AnimatedBoxButton>
            <CustomButton text="Learn more" />
          </AnimatedBoxButton>
        </Flex>
      </Box>
    </Flex>
  );
};
