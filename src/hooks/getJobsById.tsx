import { API_URL } from "@/constants";
import { JobsType } from "@/types";
import { useQuery } from "@tanstack/react-query";

const fetchJobById = async (jobId: number) => {
  const res = await fetch(`${API_URL}/jobs/${jobId}`);
  if (!res.ok) throw new Error("Job not found");
  return res.json();
};

export const useGetJobsById = (jobId: number) => {
  return useQuery<JobsType>({
    queryKey: ["job", jobId],
    queryFn: () => fetchJobById(jobId),
    enabled: !!jobId,
    staleTime: 3600000,
    refetchOnWindowFocus: false,
  });
};
