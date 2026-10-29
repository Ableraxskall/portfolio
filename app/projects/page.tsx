import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <main>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Tags: {project.tags.join(", ")}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}