import { Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  isInView: boolean;
  text: string;
}

export const AnimatedHeading = ({ isInView, text }: Props) => {
  const MotionHeading = motion.create(Heading);

  return (
    <MotionHeading
      color="white"
      bg="#1a1d2b"
      fontSize={{ base: "2rem", md: "2.7rem" }}
      p="10px"
      mb={4}
      w="fit-content"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeIn" }}
    >
      {text}
    </MotionHeading>
  );
};
