import { JobsType } from "@/types";
import { useQuery } from "@tanstack/react-query";

const fetchJobs = async ({
  queryKey,
}: {
  queryKey: [string, { company?: string; title?: string; location?: string }];
}): Promise<JobsType[]> => {
  const [, filters] = queryKey;

  // Convert filters into query parameters
  const queryParams = new URLSearchParams(
    filters as Record<string, string>
  ).toString();

  // Fetch jobs from API
  const res = await fetch(`/api/jobsApi/getJobs?${queryParams}`);
  if (!res.ok) throw new Error("Failed to fetch jobs");
  return res.json();
};

export const useGetJobs = (
  filters: { company?: string; title?: string; location?: string } = {}
) => {
  return useQuery({
    queryKey: ["jobss", filters],
    queryFn: fetchJobs,
    staleTime: 3600000,
    refetchOnWindowFocus: false,
  });
};
