import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { CustomHeader } from "../ui/animatedHeading";
import { CustomText } from "../ui/customText";
import { Mission } from "@/constants";
import { Team } from "../sections/team";

const AboutPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      pb={{ sm: 8, base: 20, md: 24 }}
      px={{ base: 6, xl: 0 }}
      gap={6}
    >
      <CustomHeader text="What is TreeJobs?" />

      <Flex flexDirection="column" gap={6} mb={4}>
        <CustomText fontFamily="body">
          TreeJobs is a specialized job board dedicated to connecting top talent
          with the most exciting blockchain and Web3 companies. We bridge the
          gap between skilled professionals and forward-thinking startups, DAOs,
          and enterprises shaping the future of decentralized technology.
        </CustomText>

        <CustomText fontFamily="body">
          In a rapidly evolving Web3 landscape, finding the right career
          opportunity can be overwhelming. That’s why we curate the best roles
          from the most innovative companies, making it easier for you to land a
          job that aligns with your skills, interests, and values.
        </CustomText>
      </Flex>

      <CustomHeader text="Our Mission" />

      <Flex flexDirection="column" gap={6} mb={4}>
        <CustomText fontFamily="body">
          We believe that Web3 careers should be accessible, transparent, and
          rewarding. Our mission is to:
        </CustomText>

        <UnorderedList>
          {Mission.map((mision) => {
            return (
              <ListItem key={mision.id}>
                <CustomText fontFamily="body">{mision.mission}</CustomText>
              </ListItem>
            );
          })}
        </UnorderedList>

        <CustomText fontFamily="heading">
          * We’re not just another job board—we’re a career accelerator for Web3
          builders.
        </CustomText>

        <Team />
      </Flex>
    </Box>
  );
};

export default AboutPage;
