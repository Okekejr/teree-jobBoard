import JobsPage from "@/components/_pages/jobsPage";
import { useGetJobs } from "@/hooks/getJobs";
import { NextPage } from "next";
import { useState } from "react";

const Jobs: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, error, isLoading } = useGetJobs({
    title: searchQuery,
    company: searchQuery,
    location: searchQuery,
  });

  return (
    <JobsPage
      data={data}
      error={error}
      isLoading={isLoading}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  );
};

export default Jobs;
