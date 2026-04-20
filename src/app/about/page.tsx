import Link from "next/link";

const strengths = [
  {
    title: "End-to-end AI systems",
    description:
      "I enjoy designing intelligent systems that connect data engineering, machine learning, and user-facing experiences into one reliable workflow.",
  },
  {
    title: "Cloud-native execution",
    description:
      "My work leans on scalable patterns across AWS and GCP, with an emphasis on APIs, deployment, and practical system design.",
  },
  {
    title: "Product-minded engineering",
    description:
      "I care about building AI that is explainable, grounded, and useful for real decision-making, not just impressive in isolation.",
  },
];

export default function AboutPage() {
  return (
    <main className="page-wrap">
      <section className="soft-section">
        <nav className="site-nav">
          <div className="nav-links">
            <Link href="/about">About</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
          </div>
        </nav>

        <div className="section-stack">
          <h1 className="section-title">Building AI systems that turn data into action.</h1>

          <div className="statement-grid">
            <div className="portrait-panel">
              <div className="portrait-placeholder">
                <span className="portrait-initials">AO</span>
                <span className="portrait-role">AI Engineer</span>
              </div>
            </div>

            <div className="statement-copy">
              <p>
                I am Alex David Ordonez, an AI Engineer and Data Scientist focused
                on designing end-to-end intelligent systems that transform data,
                language, and user interactions into actionable insights.
              </p>
              <p>
                My experience spans agentic AI architectures, scalable machine
                learning pipelines, and cloud-native solutions across healthcare,
                energy, and enterprise analytics. I enjoy building systems where
                data engineering and generative AI work together in a way that is
                practical, reliable, and production-ready.
              </p>
              <p>
                What sets my work apart is a balance between strong engineering
                foundations and product thinking. I care about building AI systems
                that are explainable, scalable, and genuinely useful for the
                people who rely on them.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link className="button-primary" href="/projects">
                  See my portfolio
                </Link>
                <a
                  className="button-secondary"
                  href="/resume/Alex_David_Ordonez_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-1 pt-12 md:pt-16">
        <h2 className="subsection-title">Engineering values behind the work</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {strengths.map((item) => (
            <article key={item.title} className="info-panel">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-copy">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
