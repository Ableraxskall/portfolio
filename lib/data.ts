export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export type Skill = {
  name: string;
  category: string;
};

export const projects: Project[] = [
  {
  id: "1",
  slug: "barunastra-asv-internship",
  title: "Barunastra ITS — Autonomous Surface Vessel Team",
  description:
    "Internship with Barunastra ITS, working on an autonomous surface vessel (ASV) team. Contributed to component budgeting and procurement planning (RAB) for the vessel build.",
  tags: ["ASV", "Robotics", "Internship"],
},
];

export const skills: Skill[] = [
  { name: "C++", category: "Programming" },
  { name: "Statistics", category: "Entry to statistics" },
];
