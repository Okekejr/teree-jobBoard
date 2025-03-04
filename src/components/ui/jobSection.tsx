import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { CustomText } from "./customText";
import { JobsType } from "@/types";

interface JobSectionT {
  title: string;
  data: JobsType["location"] | JobsType["description"] | undefined;
}

export const JobSection: FC<JobSectionT> = ({ title, data }) => {
  return (
    <Stack direction="column" gap="5px">
      <CustomText
        fontSize={{ base: "md", md: "lg" }}
        fontFamily="heading"
        fontWeight="bold"
      >
        {title}:
      </CustomText>

      <CustomText>{data}</CustomText>
    </Stack>
  );
};
