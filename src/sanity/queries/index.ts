// queries

export const companiesQuery = `*[_type == "company"]{
    _id,
    name,
    desc,
    website,
  }`;

export const homePageQuery = `*[_type == "homePage"][0]{
    heroTitle,
    heroSubtitle,
    heroCtaText,
    aboutHeading,
    aboutContent,
    whyHeading,
    whyContent,
    featuredCompaniesHeading,
    featuredCompanies[]->{
      _id,
      name,
      desc,
      website,
      "iconUrl": logo.asset->url
    }
  }`;
