import { JobsType } from "@/types";
import { useQuery } from "@tanstack/react-query";

const fetchJobById = async (jobId: string) => {
  const res = await fetch(`/api/jobsApi/getJobsById?id=${jobId}`);
  if (!res.ok) throw new Error("Job not found");
  return res.json();
};

export const useGetJobsById = (jobId: string, initialData?: JobsType) => {
  return useQuery<JobsType>({
    queryKey: ["jobsId", jobId],
    queryFn: () => fetchJobById(jobId),
    enabled: !!jobId,
    staleTime: 3600000,
    refetchOnWindowFocus: false,
    initialData,
  });
};
