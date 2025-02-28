export interface JobsType {
  id: number;
  company: string;
  title: string;
  link: string;
  location: string;
  description: string;
  skills?: string[] | null;
  date_posted: string;
}

export type CompaniesData = {
  [company: string]: JobsType[];
};
