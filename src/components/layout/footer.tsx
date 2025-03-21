import { Box, Flex, HStack, Heading } from "@chakra-ui/react";
import { Copyright } from "./copyright";
import { SocialLinks } from "@/constants";
import { Socials } from "../ui/socials";
import { CustomText } from "../ui/customText";
import Link from "next/link";
import { routes } from "@/utils/routes";
import { useRouter } from "next/router";
import { useEmail } from "@/hooks/email";

const email = "dylanokeks@yahoo.com";

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
      pb={{ sm: 8, base: 20, md: 24 }}
      zIndex={1}
    >
      <Flex flexDirection="column" textAlign="center" gap={6} mx="auto" mb={24}>
        <CustomText fontFamily="body" fontSize={{ md: "1.5rem" }}>
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
            fontSize={{ md: "5rem" }}
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
        marginTop={["1.5rem", "0"]}
        justifyContent="space-between"
        alignItems="center"
        flexDir={{ base: "column-reverse", md: "row" }}
        gap={{ base: "4", md: 0 }}
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

      <Flex mt={10} pt={10} pb={10} borderTop="1px solid" borderColor="#fff">
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
              OKEKEJR
            </Box>
          </CustomText>
        </Flex>
      </Flex>
    </Box>
  );
};
