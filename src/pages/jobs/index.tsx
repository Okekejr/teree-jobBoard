import JobsPage from "@/components/_pages/jobsPage";
import { API_URL } from "@/constants";
import { useGetJobs } from "@/hooks/getJobs";
import { JobsType } from "@/types";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";

interface JobT {
  initialData: JobsType[];
}

const Jobs: NextPage<JobT> = ({ initialData }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, error, isLoading } = useGetJobs(
    { title: searchQuery, company: searchQuery, location: searchQuery },
    initialData
  );

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

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch(`${API_URL}/api/jobsApi/getJobs`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const initialData = await res.json();

    return {
      props: {
        initialData,
      },
    };
  } catch (error) {
    console.error("Error fetching jobs:", error);

    return {
      props: {
        initialData: [],
      },
    };
  }
};

export default Jobs;
