import { NextApiRequest, NextApiResponse } from "next";
import { query } from "../../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { company, title, location } = req.query;

    let sqlQuery = "SELECT * FROM jobs WHERE 1=1";
    const params: any[] = [];

    if (company) {
      sqlQuery += " AND company ILIKE $1";
      params.push(`%${company}%`);
    }

    if (title) {
      sqlQuery += ` AND title ILIKE $${params.length + 1}`;
      params.push(`%${title}%`);
    }

    if (location) {
      sqlQuery += ` AND location ILIKE $${params.length + 1}`;
      params.push(`%${location}%`);
    }

    const jobs = await query(sqlQuery, params);

    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ message: "Error fetching jobs" });
  }
}
