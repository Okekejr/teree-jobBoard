import { Flex, Link, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { HoverTopCard } from "./hoverTopCard";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { JobsType } from "@/types";

const Card_Bg = "#FD3CFE";
const Card_Color = "#FC72FF";

interface JobCardT {
  data: JobsType;
}

export const JobCard: FC<JobCardT> = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex
      flexDirection="column"
      width={{ base: "282px", md: "516px" }}
      height={{ base: "240px", md: "250px" }}
      backgroundColor={Card_Bg}
      borderRadius="15px"
      padding={8}
      justifyContent="space-between"
      gap={{ base: 4, md: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <HoverTopCard
        leftIcon={<BriefcaseBusiness size={18} color={Card_Color} />}
        rightIcon={<ArrowRight size={18} color={Card_Color} />}
        title={data.title}
        isHovered={isHovered}
        color={Card_Color}
      />

      <Text
        fontFamily="texts"
        fontSize="md"
        noOfLines={{ base: 3, md: 4 }}
        color={Card_Color}
      >
        {data.description}
      </Text>
    </Flex>
  );
};
