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
    <motion.div>
      <Button
        borderRadius="none"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="6px"
        px={8}
        size="lg"
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "#0000A3",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.3s ease-in-out",
          zIndex: 1,
        }}
        _hover={{
          color: "#fff",
          _before: {
            transform: "scaleX(1)",
            transformOrigin: "left",
          },
        }}
        {...props}
      >
        <CustomText zIndex={2} fontFamily="texts">
          {text}
        </CustomText>
      </Button>
    </motion.div>
  );
};
