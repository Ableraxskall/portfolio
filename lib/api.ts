import { projects as fallbackProjects, skills as fallbackSkills, type Project, type Skill } from "./fallbackData";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_URL}/projects`, { cache: "no-store" });
    if (!res.ok) throw new Error("API returned an error");
    return await res.json();
  } catch {
    return fallbackProjects;
  }
}

export async function getSkills(): Promise<Skill[]> {
  try {
    const res = await fetch(`${API_URL}/skills`, { cache: "no-store" });
    if (!res.ok) throw new Error("API returned an error");
    return await res.json();
  } catch {
    return fallbackSkills;
  }
}