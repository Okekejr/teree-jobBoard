import { API_URL } from "@/constants";
import { JobsType } from "@/types";
import { GetServerSideProps, NextPage } from "next";

interface JobType {
  initialData: JobsType;
}

const JobDetails: NextPage<JobType> = ({ initialData }) => {
  console.log(initialData);
  return <></>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  try {
    const res = await fetch(`${API_URL}/jobs/${id}`);

    const initialData = await res.json();

    if (!initialData || !res.ok) {
      return { notFound: true };
    }

    return {
      props: {
        initialData,
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
