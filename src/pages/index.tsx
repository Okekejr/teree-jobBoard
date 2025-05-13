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

  if (!companyData) {
    console.warn("❌ Sanity returned null for homePageQuery");
    return {
      notFound: true, // Return 404 if no content
    };
  }

  return {
    props: {
      data: companyData,
    },
  };
};

export default Home;
