import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="page-wrap">
      <section className="hero-panel rounded-[2rem] border border-[color:var(--line)] px-5 py-5 shadow-[var(--shadow)] md:px-8 md:py-7">
        <nav className="site-nav">
          <div className="nav-links">
            <Link href="/about">About</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
          </div>
        </nav>

        <div className="max-w-4xl space-y-6 pb-8 pt-16 md:pt-24">
          <h1 className="section-title">
            Project case studies are the next build.
          </h1>
          <p className="max-w-3xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
            This route is in place so the portfolio structure is complete. We can
            fill it in next with real project cards, links, and case studies once
            the About and Experience pages feel right.
          </p>
        </div>
      </section>
    </main>
  );
}
