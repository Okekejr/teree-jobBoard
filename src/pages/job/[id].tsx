import JobPage from "@/components/_pages/jobPage";
import { CustomText } from "@/components/ui/customText";
import { API_URL } from "@/constants";
import { useGetJobsById } from "@/hooks/getJobsById";
import { JobsType } from "@/types";
import { Box, Spinner } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";

interface JobType {
  id: string;
  initialData: JobsType;
}

const JobDetails: NextPage<JobType> = ({ id, initialData }) => {
  const { data, error, isLoading } = useGetJobsById(id, initialData);

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  try {
    const res = await fetch(`${API_URL}/api/jobsApi/getJobsById${id}`);

    const initialData = await res.json();

    if (!initialData || !res.ok) {
      return { notFound: true };
    }

    return {
      props: {
        initialData,
        id,
      },
    };
  } catch (error) {
    console.error(error);

    // Handle errors gracefully
    return {
      props: {
        initialData: [],
      },
    };
  }
};

export default JobDetails;
