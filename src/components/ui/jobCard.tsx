import { Flex, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { HoverTopCard } from "./hoverTopCard";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { JobsType } from "@/types";

const Card_Bg = "whiteAlpha.100";
const Card_Color = "#fff";

interface JobCardT {
  data: JobsType;
}

export const JobCard: FC<JobCardT> = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(`/job/${data.id}`, "_blank");
  };

  return (
    <Flex
      flexDirection="column"
      width={{ md: "486px" }}
      height={{ base: "240px", md: "250px" }}
      backgroundColor={Card_Bg}
      borderRadius="15px"
      padding={8}
      justifyContent="space-between"
      gap={{ base: 4, md: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      opacity={0.9}
      _hover={{ cursor: "pointer", opacity: 1 }}
    >
      <HoverTopCard
        leftIcon={<BriefcaseBusiness size={18} color={Card_Color} />}
        rightIcon={<ArrowRight size={18} color={Card_Color} />}
        title={data.title}
        isHovered={isHovered}
        color={Card_Color}
      />

      <Text fontFamily="lighter">• {data.location ? data.location : ""}</Text>

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
