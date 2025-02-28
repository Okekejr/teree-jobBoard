import { API_URL } from "@/constants";
import { JobsType } from "@/types";
import { useQuery } from "@tanstack/react-query";

const fetchJobs = async ({
  queryKey,
}: {
  queryKey: [string, { company?: string; title?: string; location?: string }];
}): Promise<JobsType> => {
  const [, filters] = queryKey;

  // Convert filters into query parameters
  const queryParams = new URLSearchParams(
    filters as Record<string, string>
  ).toString();

  // Fetch jobs from API
  const res = await fetch(`${API_URL}/jobs?${queryParams}`);
  if (!res.ok) throw new Error("Failed to fetch jobs");
  return res.json();
};

export const useGetJobs = (
  filters: { company?: string; title?: string; location?: string } = {},
  initialData?: JobsType
) => {
  return useQuery({
    queryKey: ["jobs", filters],
    queryFn: fetchJobs,
    staleTime: 3600000,
    refetchOnWindowFocus: false,
    initialData,
  });
};
