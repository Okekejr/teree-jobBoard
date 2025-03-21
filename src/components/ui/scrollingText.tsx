"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { FC, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

interface Props {
  topText: string[];
  bottomText: string[];
}

export const ScrollingText: FC<Props> = ({ topText, bottomText }) => {
  const topMarqueeRef = useRef<HTMLDivElement>(null);
  const bottomMarqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(topMarqueeRef.current, {
        xPercent: -50,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      gsap.fromTo(
        bottomMarqueeRef.current,
        { xPercent: -50 },
        {
          xPercent: 0,
          duration: 20,
          repeat: -1,
          ease: "none",
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <Box
      ref={containerRef}
      className="scroll"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      overflow="hidden"
      borderRadius="none"
      backdropFilter="blur(10px)"
      p={8}
      pt={{ base: 8, md: 24 }}
      pb={{ sm: 8, base: 20, md: 24 }}
      w="full"
    >
      <Box overflow="hidden" justifyContent="center">
        <Flex ref={topMarqueeRef} display="inline-flex" whiteSpace="nowrap">
          {[...topText, ...topText].map((text, index) => (
            <Text key={index} fontSize="8rem" fontWeight="bold" px={8}>
              {text}
            </Text>
          ))}
        </Flex>
      </Box>

      <Box overflow="hidden" justifyContent="center">
        <Flex
          ref={bottomMarqueeRef}
          display="inline-flex"
          whiteSpace="nowrap"
          position="relative"
          left="0%"
        >
          {[...bottomText, ...bottomText].map((text, index) => (
            <Text
              key={index}
              fontSize="8rem"
              fontWeight="bold"
              px={8}
              color="transparent"
              sx={{
                WebkitTextStroke: "1px #fff",
                textStroke: "1px #fff",
              }}
            >
              {text}
            </Text>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
