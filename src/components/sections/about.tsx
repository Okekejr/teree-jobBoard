import { Box, Flex, Heading } from "@chakra-ui/react";
import { CustomButton } from "../ui/customButton";
import { CustomText } from "../ui/customText";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const MotionBox = motion.create(Box);

  return (
    <Box
      id="about"
      className="about"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      w="fit-content"
      px={{ base: 6, md: 12 }}
      gap={6}
      zIndex={1}
    >
      <Heading
        color="white"
        bg="#1a1d2b"
        fontSize={{ base: "2xl", md: "2.7rem" }}
        p="10px"
        mb={4}
        w="fit-content"
      >
        Advance Your Web3 Career
      </Heading>

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
            We are a passionate team dedicated to connecting talented
            professionals with exciting opportunities in the Web3 and blockchain
            space. Our mission is to simplify the job search process for both
            job seekers and companies by curating a platform where top Web3
            companies can find the right talent to push innovation forward.
          </CustomText>
        </Box>

        <Box w="fit-content">
          <CustomButton text="Explore Jobs" colorScheme="blue" />
        </Box>
      </Flex>
    </Box>
  );
};
