import { JobsType } from "@/types";
import {
  Box,
  Flex,
  Heading,
  ListItem,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import { FC } from "react";
import { CustomText } from "../ui/customText";

interface JobPageType {
  data: JobsType | undefined;
}

const JobPage: FC<JobPageType> = ({ data }) => {
  const firstHalf = data?.skills?.slice(0, data.skills.length / 2);
  const secondHalf = data?.skills?.slice(data.skills.length / 2);

  return (
    <Box display="flex" flexDirection="column" px={4} gap={8}>
      <Flex alignItems="flex-end" gap="5px">
        <Heading>{data?.title}</Heading>
        <Box pb="3px">
          <CustomText fontSize="20px"> @ {data?.company}</CustomText>
        </Box>
      </Flex>

      <Box display="flex" justifyContent="center" flexDirection="column">
        <Stack gap={8}>
          <Stack direction="column" gap="5px">
            <CustomText
              fontSize={{ base: "md", md: "lg" }}
              fontFamily="heading"
              fontWeight="bold"
            >
              Location:
            </CustomText>

            <CustomText>{data?.location}</CustomText>
          </Stack>

          <Stack direction="column" gap="5px">
            <CustomText
              fontSize={{ base: "md", md: "lg" }}
              fontFamily="heading"
              fontWeight="bold"
            >
              Description:
            </CustomText>

            <CustomText>{data?.description}</CustomText>
          </Stack>

          <Stack direction="column" gap="10px">
            <CustomText
              fontSize={{ base: "md", md: "lg" }}
              fontFamily="heading"
              fontWeight="bold"
            >
              Qualification, Requirements & Skills:
            </CustomText>

            <Flex
              flexDirection={{ base: "column", md: "row" }}
              justifyContent="space-between"
            >
              <Box
                display={{ base: "none", md: "flex" }}
                flexDirection="column"
                maxWidth="450px"
              >
                {firstHalf &&
                  firstHalf.length > 0 &&
                  firstHalf.map((skill, i) => {
                    return (
                      <UnorderedList key={i}>
                        <ListItem>
                          <CustomText>{skill}</CustomText>
                        </ListItem>
                      </UnorderedList>
                    );
                  })}
              </Box>

              <Box
                display={{ base: "none", md: "flex" }}
                flexDirection="column"
                maxWidth="450px"
              >
                {secondHalf &&
                  secondHalf.length > 0 &&
                  secondHalf.map((skill, i) => {
                    return (
                      <UnorderedList key={i}>
                        <ListItem>
                          <CustomText>{skill}</CustomText>
                        </ListItem>
                      </UnorderedList>
                    );
                  })}
              </Box>

              <Box
                display={{ md: "none" }}
                flexDirection="column"
                maxWidth="450px"
              >
                {firstHalf && firstHalf.length > 0 ? (
                  firstHalf.map((skill, i) => {
                    return (
                      <UnorderedList key={i}>
                        <ListItem>{skill}</ListItem>
                      </UnorderedList>
                    );
                  })
                ) : (
                  <CustomText>.... none found.</CustomText>
                )}
              </Box>
            </Flex>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default JobPage;
