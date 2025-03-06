import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { CustomText } from "./customText";
import { JobsType } from "@/types";

interface JobSectionT {
  title: string;
  data: JobsType["location"] | JobsType["description"] | undefined;
  className?: string;
}

export const JobSection: FC<JobSectionT> = ({ title, data, className }) => {
  return (
    <Stack direction="column" gap="5px" className={className}>
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
