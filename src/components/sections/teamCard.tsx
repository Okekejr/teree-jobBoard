import { Box, Flex, HStack } from "@chakra-ui/react";
import { CustomText } from "../ui/customText";
import { SocialLinks } from "@/constants";
import { Socials } from "../ui/socials";
import { MembersT } from "@/types";

interface TeamCard {
  data: MembersT;
}

export const TeamCard = ({ data }: TeamCard) => {
  const { headshotUrl, name, role } = data;

  return (
    <HStack
      position="relative"
      w="fit-content"
      display="flex"
      flexDirection="column"
      border="0.5px solid #718096"
      p={8}
      gap={6}
    >
      <Box
        w="80px"
        h="150px"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        filter="blur(10px)"
        backgroundImage={`url(${headshotUrl})`}
        backgroundSize="cover"
        backgroundPosition="center"
        transition="filter 0.3s ease-in-out"
        _hover={{ filter: "blur(0px)" }}
      />

      <Flex flexDirection="column" textAlign="center">
        <CustomText fontFamily="body" fontSize={{ md: "1.2rem" }}>
          {name}
        </CustomText>
        <CustomText fontFamily="lighter">{role}</CustomText>
      </Flex>

      <HStack spacing={4}>
        {SocialLinks.map((social) => {
          return <Socials key={social.name} {...social} />;
        })}
      </HStack>
    </HStack>
  );
};
