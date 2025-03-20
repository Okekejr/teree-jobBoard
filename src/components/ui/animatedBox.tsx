import { Box } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedBoxButtonProps {
  children: ReactNode;
}

export const AnimatedBoxButton = ({ children }: AnimatedBoxButtonProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ height: 0, opacity: 0 }}
      animate={isInView ? { height: "auto", opacity: 1 } : {}}
      transition={{ duration: 0.4, ease: "easeIn" }}
      style={{
        overflow: "hidden",
        width: "fit-content",
      }}
    >
      <Box>{children}</Box>
    </motion.div>
  );
};
