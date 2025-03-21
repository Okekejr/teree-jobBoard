import { CustomText } from "../ui/customText";

export const Copyright = () => {
  return <CustomText>&copy; {new Date().getFullYear()} TreeJobs</CustomText>;
};
