import AboutPage, { AboutT } from "@/components/_pages/aboutPage";
import { getClient } from "@/sanity/lib/client";
import { aboutPageQuery } from "@/sanity/queries";
import { AboutPageContent } from "@/types";
import { GetStaticProps, NextPage } from "next";

const About: NextPage<AboutT> = ({ data }) => {
  return <AboutPage data={data} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const aboutPageData: AboutPageContent =
    await getClient(true).fetch(aboutPageQuery);

  if (!aboutPageData) {
    console.warn("❌ Sanity returned null for aboutPageData");
    return {
      notFound: true, // Return 404 if no content
    };
  }

  return {
    props: {
      data: aboutPageData,
    },
  };
};

export default About;
