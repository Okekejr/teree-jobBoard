import JobPage from "@/components/_pages/jobPage";
import { CustomText } from "@/components/ui/customText";
import { useGetJobsById } from "@/hooks/getJobsById";
import { Box, Spinner } from "@chakra-ui/react";
import { NextPage } from "next";

interface JobType {
  id: string;
}

const JobDetails: NextPage<JobType> = ({ id }) => {
  const { data, error, isLoading } = useGetJobsById(id);

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center" flexDirection="column">
        <Spinner size="xl" color="#c7c7c7" />
      </Box>
    );

  if (error || !data)
    return (
      <Box display="flex" justifyContent="center" flexDirection="column">
        <CustomText>Error loading jobs: {error && error.message}</CustomText>
      </Box>
    );

  return <JobPage data={data} />;
};

export default JobDetails;
