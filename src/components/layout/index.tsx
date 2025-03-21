import { Box, Container, HStack, VStack } from "@chakra-ui/react";
import { JSX } from "react";
import { Navbar } from "./navigation";
import { Footer } from "./footer";

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
        <Box height="13vh" maxH="260px" />
        {children}
        <HStack>
          <Footer />
        </HStack>
      </Container>
    </Box>
  );
};
