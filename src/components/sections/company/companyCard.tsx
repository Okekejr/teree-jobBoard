import { Box, Flex, IconProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC } from "react";

interface Props {
  id: string;
  name: string;
  desc: string;
  icon: FC<IconProps>;
  isInView: boolean;
}

export const CompanyCard = ({
  id,
  name,
  desc,
  icon: Icon,
  isInView,
}: Props) => {
  return (
    <Box
      position="relative"
      w="100%"
      h={{ base: "400px", md: "500px" }}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="space-between"
      border="0.5px solid #718096"
      p={4}
    >
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <Box
          fontSize="1rem"
          fontFamily="heading"
          fontWeight="bold"
          color="#9b9b9b"
        >
          {id}
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Box
          w="80px"
          h="150px"
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          filter="blur(10px)"
          transition="filter 0.3s ease-in-out"
          _hover={{ filter: "blur(0px)" }}
        >
          <Icon width="100%" height="100%" />
        </Box>
      </motion.div>

      <Flex flexDirection="column" gap={4}>
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <Box fontSize="lg" fontWeight="bold" color="white" w="100%">
            {name}
          </Box>
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <Box fontSize="sm" color="gray.300" w="100%">
            {desc}
          </Box>
        </motion.div>
      </Flex>
    </Box>
  );
};
