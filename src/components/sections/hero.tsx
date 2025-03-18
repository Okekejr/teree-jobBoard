import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { CustomButton } from "../ui/customButton";

const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);
const MotionBox = motion.create(Box);

export const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <Box
      ref={heroRef}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      h="100vh"
      p={6}
      zIndex={1}
    >
      {/* Text Container */}
      <Flex
        direction="column"
        alignItems="flex-start"
        justifyContent="center"
        position="relative"
        w="100%"
        maxW="1200px"
        mx="auto"
        px={{ base: 6, md: 12 }}
      >
        <Flex w="100%" mx="auto">
          {/* Heading */}
          <MotionHeading
            fontSize={{ base: "3xl", md: "4.5rem" }}
            fontWeight="bold"
            color="white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            textAlign="left"
          >
            Your Gateway to Blockchain
          </MotionHeading>

          <MotionBox
            mt="auto"
            px={2}
            py={2}
            width="35rem"
            border="1px solid"
            borderColor="#c7c7c7"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <MotionText
              fontFamily="texts"
              fontSize={{ base: "md", md: "xl" }}
              color="gray.400"
            >
              Explore top Web3 jobs and grow your blockchain career today.
            </MotionText>
          </MotionBox>
        </Flex>

        {/* Action Button */}
        <MotionBox
          mt={4}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <CustomButton
            text="Get Started"
            colorScheme="blue"
            borderRadius="full"
          />
        </MotionBox>
      </Flex>
    </Box>
  );
};
