import { Rule } from "@sanity/types";

export default {
  name: "teamMember",
  title: "Team Members",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Member Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "headshot",
      title: "Headshot",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
