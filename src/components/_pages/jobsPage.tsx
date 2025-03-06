import { JobsType } from "@/types";
import { Box, Button, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { JobCard } from "../ui/jobCard";
import { CustomText } from "../ui/customText";
import { ListGrid } from "../ui/ListGrid";

interface JobsPageType {
  data: JobsType[] | undefined;
  error: Error | null;
  isLoading: boolean;
}

const JobsPage: FC<JobsPageType> = ({ data, error, isLoading }) => {
  const [visibleJobs, setVisibleJobs] = useState(4);

  const displayedJobs = data?.slice(0, visibleJobs) || [];

  return (
    <Box display="flex" flexDirection="column" px={4} py={8} mx="auto">
      <Box textAlign="center" mb={6}>
        <Heading fontSize="3xl" fontWeight="bold" color="white">
          Explore Web3 & Crypto Jobs 🚀
        </Heading>
        <Text fontSize="lg" color="gray.400" mt={2}>
          Find your next role at top blockchain companies across the Americas.
        </Text>
      </Box>

      <Flex justify="space-between" align="center" mb={4} color="gray.300">
        <Text fontSize="md">
          {data?.length ? `${data.length} jobs available` : "No jobs available"}
        </Text>
      </Flex>

      <Box display="flex" justifyContent="center" flexDirection="column">
        {isLoading && <Spinner size="xl" color="#c7c7c7" />}

        {error && <CustomText>Error loading jobs: {error.message}</CustomText>}

        <ListGrid>
          {displayedJobs.length > 0
            ? displayedJobs.map((job) => <JobCard data={job} key={job.link} />)
            : !isLoading && <CustomText>No Jobs available</CustomText>}
        </ListGrid>

        <Flex justify="center" mt={{ base: 6, md: 12 }}>
          {visibleJobs < (data?.length || 0) ? (
            <Button
              borderRadius="full"
              _hover={{ bgColor: "#FBD38D", color: "#000" }}
              onClick={() => setVisibleJobs((prev) => prev + 2)}
            >
              <Text fontFamily="lighter">Load more jobs</Text>
            </Button>
          ) : (
            ""
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default JobsPage;
