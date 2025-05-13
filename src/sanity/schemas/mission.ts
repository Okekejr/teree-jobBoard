import { Rule } from "@sanity/types";

export default {
  name: "mission",
  title: "Mission",
  type: "document",
  fields: [
    {
      name: "mission",
      title: "Mission Text",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
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
