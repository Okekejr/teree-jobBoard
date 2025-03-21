import { Box, Center } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IconProps {
  title?: string;
  icon: IconType;
}

export const AnimatedIcon = ({ title, icon: Icon }: IconProps) => {
  return (
    <Box
      _hover={{
        transform: "translateY(-4px)",
        transition: "0.3s",
      }}
    >
      <Center
        color="#fff"
        as="button"
        _hover={{ color: "blue.200" }}
        arial-label={title}
      >
        <Icon size={20} />
      </Center>
    </Box>
  );
};
