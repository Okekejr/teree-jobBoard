import { JobsType } from "@/types";
import { Box, Button, Divider, Heading, Spinner, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { JobCard } from "./ui/jobCard";
import { CustomText } from "./ui/customText";
import { ListGrid } from "./ui/ListGrid";

interface JobsPageType {
  data: JobsType[] | undefined;
  error: Error | null;
  isLoading: boolean;
}

const JobsPage: FC<JobsPageType> = ({ data, error, isLoading }) => {
  const [visibleJobs, setVisibleJobs] = useState(4);

  const displayedJobs = data?.slice(0, visibleJobs) || [];

  return (
    <Box display="flex" flexDirection="column" px={4}>
      <Heading>Jobs Page</Heading>

      <Box display="flex" justifyContent="center" flexDirection="column">
        {isLoading && <Spinner size="xl" color="#c7c7c7" />}

        {error && <CustomText>Error loading jobs: {error.message}</CustomText>}

        <ListGrid>
          {displayedJobs.length > 0
            ? displayedJobs.map((job) => <JobCard data={job} key={job.link} />)
            : !isLoading && <CustomText>No Jobs available</CustomText>}
        </ListGrid>

        <Box display="flex" justifyContent="center" mt={{ base: 4, md: 12 }}>
          {visibleJobs < (data?.length || 0) ? (
            <Button
              borderRadius="15px"
              _hover={{ bgColor: "#FBD38D", color: "#000" }}
              onClick={() => setVisibleJobs((prev) => prev + 2)}
            >
              <Text fontFamily="lighter">Load more</Text>
            </Button>
          ) : (
            <Divider mt={8} width={{ base: "10rem", md: "20rem" }} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default JobsPage;
