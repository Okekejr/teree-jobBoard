import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "@/theme";
import { NextSeo } from "next-seo";
import { FontFaces } from "@/theme/Fonts";
import { PageContainer } from "@/components/layout";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <NextSeo
          title="TreeJobs - Explore top Web3 jobs"
          description="Your Gateway to Blockchain. Explore top Web3 jobs and grow your blockchain career today."
          openGraph={{
            title: "Okeke Emmanuel - Software Engineer",
            description:
              "Your Gateway to Blockchain. Explore top Web3 jobs and grow your blockchain career today.",
          }}
        />
        <FontFaces />
        <PageContainer>
          <Component {...pageProps} />
        </PageContainer>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
