import { getProjects } from "@/lib/api";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <main className="mx-auto max-w-4xl space-y-8 px-6 py-16">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.id}
            className="space-y-3 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5"
          >
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <p className="text-sm text-[var(--muted)]">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs text-[var(--accent)]"
                >
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <a href={p.link} className="text-sm font-medium text-[var(--accent)] hover:underline">
                View →
              </a>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}