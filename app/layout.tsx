import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AbleRaxskall — Portfolio",
  description: "Statistics student aiming to become a data analyst/scientist.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
  <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur">
    <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
      <a href="/" className="font-bold">Rascal</a>
      <div className="flex gap-6 text-sm">
        <a href="/" className="hover:text-[var(--accent)]">Home</a>
        <a href="/projects" className="hover:text-[var(--accent)]">Projects</a>
        <a href="/contact" className="hover:text-[var(--accent)]">Contact</a>
      </div>
    </nav>
  </header>
  {children}
</body>
    </html>
  );
}