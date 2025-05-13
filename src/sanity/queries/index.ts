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
      id_number,
      name,
      desc,
      website,
      "iconUrl": logo.asset->url
    }
  }`;

export const aboutPageQuery = `*[_type == "aboutPage"][0]{
    introTitle,
    introContent,
    missionTitle,
    missionContent,
    missions[]->{
      _id,
      mission,
    },
    missionFooterNote,
    teamTitle,
    teamContent,
    teamFooterNote,
    Members[]->{
      _id,
      name,
      role,
      "headshotUrl": headshot.asset->url
    }
  }`;
