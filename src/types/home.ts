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
    _id: string;
    name: string;
    desc: string;
    iconUrl: string;
  }[];
}

export interface HeroSection {
  heroTitle: string;
  heroSubTitle: string;
  heroCta: string;
}
