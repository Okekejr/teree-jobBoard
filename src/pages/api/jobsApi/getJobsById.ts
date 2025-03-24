import { NextApiRequest, NextApiResponse } from "next";
import { query } from "../../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: "Invalid job ID" });
  }

  try {
    const jobs = await query("SELECT * FROM jobs WHERE id = $1;", [id]);

    if (jobs.length === 0) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.status(200).json(jobs[0]);
  } catch (error) {
    console.error("Error fetching job:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
