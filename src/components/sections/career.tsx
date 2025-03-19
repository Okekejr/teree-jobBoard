import { Box, Heading } from "@chakra-ui/react";
import { CustomButton } from "../ui/customButton";

export const CareerSection = () => {
  return (
    <Box
      id="career"
      className="career"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      px={{ base: 6, md: 12 }}
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
      <Box border="1px solid #fff" p={4} maxW="600px" color="gray.200" mb={4}>
        Find exclusive Web3 jobs from top blockchain companies.
      </Box>
      <CustomButton
        text="Explore Jobs"
        colorScheme="blue"
        borderRadius="full"
      />
    </Box>
  );
};
