import Homepage from "@/components/_pages/homepage";
import { getClient } from "@/sanity/lib/client";
import { homePageQuery } from "@/sanity/queries";
import { HomePageContent } from "@/types";
import { GetStaticProps } from "next";

interface HomeProps {
  data: HomePageContent;
}

const Home = ({ data }: HomeProps) => {
  return <Homepage data={data} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const companyData: HomePageContent =
    await getClient(true).fetch(homePageQuery);

  return {
    props: {
      data: companyData,
    },
  };
};

export default Home;
