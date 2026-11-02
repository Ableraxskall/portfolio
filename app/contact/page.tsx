export default function Contact() {
  return (
    <main className="mx-auto max-w-4xl space-y-6 px-6 py-16">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-[var(--muted)]">Feel free to reach out.</p>
      <a
        href="mailto:masterdhiko@gmail.com"
        className="inline-block rounded-full bg-[var(--accent)] px-6 py-2 text-sm font-medium text-white hover:opacity-90"
      >
        Email me
      </a>
    </main>
  );
}