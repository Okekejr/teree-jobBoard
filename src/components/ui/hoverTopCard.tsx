import { FC, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface CardProps {
  leftIcon: React.ReactElement;
  rightIcon: React.ReactElement;
  title: string;
  color?: string;
  isHovered: boolean;
}

export const HoverTopCard: FC<CardProps> = ({
  leftIcon,
  rightIcon,
  title,
  color,
  isHovered,
}) => {
  return (
    <Box
      w="fit-content"
      h="40px"
      bg="#000"
      color="white"
      borderRadius="15px"
      display="flex"
      alignItems="center"
      gap="7px"
      px="10px"
    >
      <motion.div
        initial={{ width: "auto", opacity: 1 }}
        animate={{
          width: isHovered ? 0 : "auto",
          opacity: isHovered ? 0 : 1,
          x: isHovered ? -10 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          overflow: "hidden",
          display: "flex",
          minWidth: isHovered ? 0 : "auto",
        }}
      >
        {leftIcon}
      </motion.div>

      <motion.div
        animate={{ x: isHovered ? -2 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ whiteSpace: "nowrap" }}
      >
        <Flex alignItems="center" gap="4px">
          <Text
            fontFamily="lighter"
            fontSize="lg"
            fontWeight="bold"
            color={color}
          >
            {title}
          </Text>

          <Box
            style={{
              overflow: "hidden",
              display: "flex",
              width: isHovered ? "auto" : 0,
              opacity: isHovered ? 1 : 0,
            }}
          >
            {rightIcon}
          </Box>
        </Flex>
      </motion.div>
    </Box>
  );
};
