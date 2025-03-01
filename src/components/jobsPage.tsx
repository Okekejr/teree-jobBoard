import { JobsType } from "@/types";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { FC } from "react";
import { JobCard } from "./ui/jobCard";
import { CustomText } from "./ui/customText";

interface JobsPageType {
  data: JobsType[] | undefined;
  error: Error | null;
  isLoading: boolean;
}

const JobsPage: FC<JobsPageType> = ({ data, error, isLoading }) => {
  console.log(data);

  return (
    <Box px={4}>
      <Heading>Jobs Page</Heading>

      <Box display="flex" justifyContent="center">
        {isLoading && <Spinner size="xl" color="#c7c7c7" />}

        {error && <CustomText>Error loading jobs: {error.message}</CustomText>}
      </Box>

      {data && data.length > 0 ? (
        data.map((job) => {
          return <JobCard data={job} key={job.link} />;
        })
      ) : (
        <CustomText>No Jobs available</CustomText>
      )}
    </Box>
  );
};

export default JobsPage;
