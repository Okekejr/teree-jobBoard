import { Rule as ValidationRule } from "@sanity/types";

export default {
  name: "company",
  title: "Company",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Company Name",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "desc",
      title: "Description",
      type: "text",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: 'website',
      title: 'Website URL',
      type: 'url',
    },
    {
      name: "logo",
      title: "Company Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug (optional)",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
  ],
};
