import { Rule } from "@sanity/types";

export default {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "introTitle",
      title: "Intro Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "introContent",
      title: "Intro Content",
      type: "array",
      of: [{ type: "text" }],
      validation: (Rule: Rule) => Rule.required().min(1),
    },
    {
      name: "missionTitle",
      title: "Mission Section Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "missionContent",
      title: "Mission Section Content",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "missions",
      title: "Missions",
      type: "array",
      of: [{ type: "reference", to: [{ type: "mission" }] }],
      validation: (Rule: Rule) => Rule.required().min(1),
    },
    {
      name: "missionFooterNote",
      title: "Mission Footer Note",
      type: "string",
    },
    {
      name: "teamTitle",
      title: "Team Section Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "teamContent",
      title: "Team Section Content",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "teamFooterNote",
      title: "Team Footer Note",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "Members",
      title: "Team Members",
      type: "array",
      of: [{ type: "reference", to: [{ type: "teamMember" }] }],
      validation: (Rule: Rule) => Rule.required().min(1),
    },
  ],
};
