import { Box, Container, VStack } from "@chakra-ui/react";
import { JSX } from "react";
import { Navbar } from "./navigation";

interface PropsStack {
  children: JSX.Element;
}

export const PageContainer = ({ children }: PropsStack) => {
  return (
    <Box minH="100vh" w="100%">
      <Container maxW="5xl" p={0}>
        <VStack>
          <Navbar />
        </VStack>
        {children}
      </Container>
    </Box>
  );
};
