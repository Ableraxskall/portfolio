export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export type Skill = {
  id: string;
  name: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: "turtle-multiplayer",
    slug: "turtle-multiplayer",
    title: "TurtleSim Multiplayer",
    description:
      "A two-player multiplayer game built on ROS2 turtlesim, with a TypeScript gateway that assigns player roles by IP, clamps speed, and stops a turtle on disconnect.",
    tags: ["ROS2", "TypeScript", "WebSocket"],
    link: "https://github.com/Magang-Barunastra-2026/pgr-ableraxskall-task4",
  },
  {
    id: "portfolio-website",
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This site — a Next.js + TypeScript portfolio with typed project/skill data, built to be responsive and deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://github.com/AbleRaxskall/portfolio",
  },
];

export const skills: Skill[] = [
  {
    id: "cpp",
    name: "C++",
    description: "Studying C++ in university.",
  },
  {
    id: "statistics",
    name: "Entry to Statistics",
    description: "Studying statistics in university.",
  },
  {
    id: "teamwork",
    name: "Teamwork",
    description: "Student council member for 3 years.",
  },
];