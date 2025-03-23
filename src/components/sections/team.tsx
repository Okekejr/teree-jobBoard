import { Box, Flex, HStack, Stack } from "@chakra-ui/react";
import { CustomText } from "../ui/customText";
import { CustomHeader } from "../ui/animatedHeading";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SocialLinks } from "@/constants";
import { Socials } from "../ui/socials";

export const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <Stack ref={ref} my={4} gap={6}>
      <CustomHeader text="Meet the Team" />

      <CustomText fontFamily="body">
        TreeJobs was created by a group of Web3 builders, engineers, and
        designers who understand the struggles of finding high-quality
        blockchain jobs, hence ME :)
      </CustomText>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        style={{ width: "100%", display: "flex" }}
      >
        <HStack
          position="relative"
          w="fit-content"
          display="flex"
          flexDirection="column"
          border="0.5px solid #718096"
          p={8}
          gap={6}
        >
          <Box
            w="80px"
            h="150px"
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            filter="blur(10px)"
            backgroundImage="url('/assets/img/yo.jpeg')"
            backgroundSize="cover"
            backgroundPosition="center"
            transition="filter 0.3s ease-in-out"
            _hover={{ filter: "blur(0px)" }}
          />

          <Flex flexDirection="column" textAlign="center">
            <CustomText fontFamily="body" fontSize={{ md: "1.2rem" }}>
              Emmanuel Okeke
            </CustomText>
            <CustomText fontFamily="lighter">Software Engineer</CustomText>
          </Flex>

          <HStack spacing={4}>
            {SocialLinks.map((social) => {
              return <Socials key={social.name} {...social} />;
            })}
          </HStack>
        </HStack>
      </motion.div>
    </Stack>
  );
};
