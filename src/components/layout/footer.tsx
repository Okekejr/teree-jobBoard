import { Box, Flex, HStack, Heading } from "@chakra-ui/react";
import { Copyright } from "./copyright";
import { SocialLinks, email } from "@/constants";
import { Socials } from "../ui/socials";
import { CustomText } from "../ui/customText";
import Link from "next/link";
import { routes } from "@/utils/routes";
import { useRouter } from "next/router";
import { useEmail } from "@/hooks/email";

export const Footer = () => {
  const { pathname } = useRouter();
  const { handleEmailClick } = useEmail(email);

  return (
    <Box
      id="footer"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      w="100%"
      pt={{ base: 8, md: 24 }}
      pb={8}
      px={{ base: 8, xl: 0 }}
      zIndex={1}
    >
      <Flex
        flexDirection="column"
        textAlign="center"
        gap={6}
        mx="auto"
        mb={{ base: 12, md: 24 }}
      >
        <CustomText
          fontFamily="body"
          fontSize={{ base: "1.5rem", md: "1.5rem" }}
        >
          GET IN TOUCH AT
        </CustomText>

        <Box
          _hover={{
            cursor: "pointer",
            color: "blue.200",
            transition: "color 0.3s ease-in-out",
          }}
          onClick={handleEmailClick}
        >
          <Heading
            fontSize={{
              sm: "1.3rem",
              base: "1.85rem",
              md: "3.8rem",
              lg: "5rem",
            }}
            color="transparent"
            sx={{
              WebkitTextStroke: "1px #90CDF4",
              textStroke: "1px #90CDF4",
            }}
          >
            {email}
          </Heading>
        </Box>
      </Flex>

      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        flexDir={{ base: "column", md: "row" }}
        gap={{ base: 8, md: 0 }}
      >
        <HStack spacing={4}>
          {routes.map((rout) => {
            return (
              <Box
                display={pathname === rout.url ? "none" : "block"}
                color="#fff"
                key={rout.title}
                _hover={{
                  textDecoration: "none",
                  color: "blue.200",
                  transition: "color 0.3s ease-in-out",
                }}
                fontWeight="600"
                borderRadius="15px"
                fontFamily="lighter"
              >
                <Link href={rout.url}>{rout.title}</Link>
              </Box>
            );
          })}
        </HStack>

        <HStack spacing={4}>
          {SocialLinks.map((social) => {
            return <Socials key={social.name} {...social} />;
          })}
        </HStack>
      </Flex>

      <Flex mt={10} py={10} borderTop="1px solid" borderColor="#fff">
        <Flex
          w="100%"
          marginTop={["1.5rem", "0"]}
          justifyContent="space-between"
          alignItems="center"
          flexDir={{ base: "column-reverse", md: "row" }}
          gap={{ base: "4", md: 0 }}
        >
          <Copyright />

          <CustomText>
            WEBSITE BY{" "}
            <Box
              as="span"
              color="#fff"
              fontWeight="bold"
              cursor="pointer"
              _hover={{
                color: "blue.200",
                transition: "color 0.3s ease-in-out",
              }}
            >
              <a href="https://www.okekedev.com" target="_blank">
                OKEKEJR
              </a>
            </Box>
          </CustomText>
        </Flex>
      </Flex>
    </Box>
  );
};
