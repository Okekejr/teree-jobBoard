import { FC, useEffect, useRef, useState } from "react";
import { JobsType } from "@/types";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { JobCard } from "../ui/jobCard";
import { CustomText } from "../ui/customText";
import { ListGrid } from "../ui/listGrid";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";

interface JobsPageType {
  data: JobsType[] | undefined;
  error: Error | null;
  isLoading: boolean;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const JobsPage: FC<JobsPageType> = ({
  data,
  error,
  isLoading,
  searchQuery,
  setSearchQuery,
}) => {
  const [visibleJobs, setVisibleJobs] = useState(4);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  const filteredJobs =
    data?.filter(
      (job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  const displayedJobs =
    searchQuery.length > 0 ? filteredJobs : filteredJobs.slice(0, visibleJobs);

  return (
    <Box
      ref={containerRef}
      display="flex"
      flexDirection="column"
      px={4}
      py={8}
      mx="auto"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Box textAlign="center" mb={6}>
          <Heading fontSize="3xl" fontWeight="bold" color="white">
            Explore Web3 & Crypto Jobs 🚀
          </Heading>
          <Text fontSize="lg" color="gray.400" mt={2}>
            Find your next role at top blockchain companies across the Americas.
          </Text>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <InputGroup maxW="600px" mx="auto" mb={6}>
          <InputLeftElement pointerEvents="none">
            <Search color="gray" />
          </InputLeftElement>
          <Input
            placeholder="Search jobs by title, company, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            bg="gray.800"
            color="white"
            border="1px solid gray"
            _placeholder={{ color: "gray.400" }}
          />
        </InputGroup>
      </motion.div>

      <Flex justify="space-between" align="center" mb={4} color="gray.300">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Text fontSize="md">
            {filteredJobs.length
              ? `${filteredJobs.length} jobs found`
              : ""}
          </Text>
        </motion.div>
      </Flex>

      <Box display="flex" justifyContent="center" flexDirection="column">
        {isLoading && <Spinner size="xl" color="#c7c7c7" />}

        {error && <CustomText>Error loading jobs: {error.message}</CustomText>}

        <ListGrid>
          {displayedJobs.length > 0
            ? displayedJobs.map((job, i) => {
                return (
                  <motion.div
                    key={job.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <JobCard data={job} key={job.link} />
                  </motion.div>
                );
              })
            : !isLoading && <CustomText>No Jobs available</CustomText>}
        </ListGrid>

        <Flex justify="center" mt={{ base: 6, md: 12 }}>
          {searchQuery.length === 0 && visibleJobs < filteredJobs.length && (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                borderRadius="full"
                _hover={{ bgColor: "#FBD38D", color: "#000" }}
                onClick={() => setVisibleJobs((prev) => prev + 2)}
              >
                <Text fontFamily="lighter">Load more jobs</Text>
              </Button>
            </motion.div>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default JobsPage;
