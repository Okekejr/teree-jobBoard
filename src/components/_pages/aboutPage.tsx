import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { CustomHeader } from "../ui/animatedHeading";
import { CustomText } from "../ui/customText";
import { Team } from "../sections/team";
import { AboutPageContent } from "@/types";

export interface AboutT {
  data: AboutPageContent;
}

const AboutPage = ({ data }: AboutT) => {
  const {
    introTitle,
    introContent,
    missionTitle,
    missionContent,
    missionFooterNote,
    missions,
    teamContent,
    teamFooterNote,
    teamTitle,
    Members,
  } = data;

  const teamData = {
    teamContent,
    teamFooterNote,
    teamTitle,
    Members,
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      pb={{ sm: 8, base: 20, md: 24 }}
      px={{ base: 6, xl: 0 }}
      gap={6}
      zIndex={1}
    >
      <CustomHeader text={introTitle} />

      <Flex flexDirection="column" gap={6} mb={4} zIndex={1}>
        {introContent.map((text, i) => {
          return (
            <CustomText fontFamily="body" key={i}>
              {text}
            </CustomText>
          );
        })}
      </Flex>

      <CustomHeader text={missionTitle} />

      <Flex flexDirection="column" gap={6} mb={4} zIndex={1}>
        <CustomText fontFamily="body">{missionContent}</CustomText>

        <UnorderedList>
          {missions.map((mision) => {
            return (
              <ListItem key={mision._id}>
                <CustomText fontFamily="body">{mision.mission}</CustomText>
              </ListItem>
            );
          })}
        </UnorderedList>

        <CustomText fontFamily="heading">{missionFooterNote}</CustomText>

        <Team data={teamData} />
      </Flex>
    </Box>
  );
};

export default AboutPage;
