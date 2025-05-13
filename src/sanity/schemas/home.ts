export default {
  name: "homePage",
  title: "Homepage",
  type: "document",
  fields: [
    {
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    },
    {
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "string",
    },
    {
      name: "heroCtaText",
      title: "CTA Button Text",
      type: "string",
    },
    {
      name: "aboutHeading",
      title: "About Heading",
      type: "string",
    },
    {
      name: "aboutContent",
      title: "About Content",
      type: "text",
    },
    {
      name: "whyHeading",
      title: "Why Choose TreeJobs Heading",
      type: "string",
    },
    {
      name: "whyContent",
      title: "Why Choose TreeJobs Content",
      type: "text",
    },
    {
      name: "featuredCompaniesHeading",
      title: "Featured Heading",
      type: "string",
    },
    {
      name: "featuredCompanies",
      title: "Featured Companies",
      type: "array",
      of: [{ type: "reference", to: [{ type: "company" }] }],
    },
  ],
};
