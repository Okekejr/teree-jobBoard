import { Button, ButtonProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC } from "react";
import { CustomText } from "./customText";

interface CustomButtonProps
  extends Pick<
    ButtonProps,
    | "borderRadius"
    | "height"
    | "px"
    | "display"
    | "alignItems"
    | "justifyContent"
    | "gap"
    | "w"
    | "mx"
    | "mt"
    | "colorScheme"
    | "_hover"
  > {
  text: string;
}

export const CustomButton: FC<CustomButtonProps> = ({ text, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
    >
      <Button
        borderRadius="1.25rem"
        height="2.5rem"
        px="1.5rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="6px"
        w="fit-content"
        mx="10px"
        _hover={{
          backgroundColor: "#9b9b9b",
          color: "#fff",
        }}
        {...props}
      >
        <CustomText fontFamily="lighter">{text}</CustomText>
      </Button>
    </motion.div>
  );
};
