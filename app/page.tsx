import { getSkills } from "@/lib/api";
export const instant = false;
export default async function Home() {
  const skills = await getSkills();

  return (
    <main className="mx-auto max-w-4xl space-y-20 px-6 py-16">
      {/* Hero */}
      <section className="flex flex-col items-center gap-4 text-center">
        <div className="h-28 w-28 rounded-full border-2 border-[var(--accent)] bg-[var(--card)]" />
        <h1 className="text-4xl font-bold">Hi, I&apos;m AbleRaxskall</h1>
        <p className="max-w-md text-[var(--muted)]">
          Statistics major &amp; intern at Barunastra ITS — building things with code, ROS2, and data.
        </p>
        <a
          href="/projects"
          className="rounded-full bg-[var(--accent)] px-6 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          View my projects
        </a>
      </section>

      {/* Bio */}
<section id="bio" className="space-y-3">
  <h2 className="text-2xl font-semibold">About</h2>
  <p className="text-[var(--muted)]">
    Undergraduate at Institut Teknologi Sepuluh Nopember, a student with massive ambitions
    studying Statistics. Working hard to become my perfect self. I work well in both
    team-based and solo projects. I enjoy problem solving and learning new things.
  </p>
</section>

{/* Skills */}
<section id="skills" className="space-y-4">
  <h2 className="text-2xl font-semibold">Skills</h2>
  <div className="grid gap-4 sm:grid-cols-3">
    {skills.map((s) => (
      <div
        key={s.id}
        className="space-y-1 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4"
      >
        <p className="font-medium">{s.name}</p>
        <p className="text-sm text-[var(--muted)]">{s.description}</p>
      </div>
    ))}
  </div>
</section>

      {/* Achievements */}
      <section id="achievements" className="space-y-4">
        <h2 className="text-2xl font-semibold">Achievements</h2>
        <ul className="space-y-2 text-[var(--muted)]">
          <li className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
            Completed Barunastra ITS Web Development internship task (Next.js, ROS2 multiplayer gateway, Dockerized REST API)
          </li>
        </ul>
      </section>
    </main>
  );
}