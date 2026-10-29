import { skills } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <h1>Hi, I&apos;m AbleRaxskall</h1>
      <p>Statistics student aiming to become a data analyst/scientist.</p>

      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.name}>
            {skill.name} — {skill.category}
          </li>
        ))}
      </ul>
    </main>
  );
}