import { JobsType } from "@/types";
import { Heading } from "@chakra-ui/react";
import { FC } from "react";

interface JobsPageType {
  data: JobsType | undefined;
  error: Error | null;
  isLoading: boolean;
}

const JobsPage: FC<JobsPageType> = ({ data }) => {
  console.log(data);

  return (
    <>
      <Heading>Jobs Page</Heading>
    </>
  );
};

export default JobsPage;
