export interface HomePageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroCtaText: string;
  aboutHeading: string;
  aboutContent: string;
  whyHeading: string;
  whyContent: string;
  featuredCompaniesHeading: string;
  featuredCompanies: {
    id_number: string;
    name: string;
    desc: string;
    iconUrl: string;
  }[];
}

export interface heroSection {
  heroTitle: string;
  heroSubtitle: string;
  heroCtaText: string;
}

export interface aboutSectionT {
  aboutHeading: string;
  aboutContent: string;
}

export interface whySectionT {
  whyHeading: string;
  whyContent: string;
}

export interface companiesT {
  featuredCompaniesHeading: string;
  featuredCompanies: HomePageContent["featuredCompanies"];
}
