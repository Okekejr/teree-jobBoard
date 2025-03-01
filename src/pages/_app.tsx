import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "@/theme";
import { FontFaces } from "@/theme/Fonts";
import { PageContainer } from "@/components/layout";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <FontFaces />
        <PageContainer>
          <Component {...pageProps} />
        </PageContainer>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
