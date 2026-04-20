import Link from "next/link";

const timeline = [
  {
    year: "2025 - Present",
    role: "AI/ML Specialist",
    org: "Oakland University Business School",
    summary:
      "Designed ML and LLM pipelines for large-scale medical survey analysis, built analytics workflows for research productivity, and developed an agentic AI forecasting pipeline for electricity consumption.",
  },
  {
    year: "2025",
    role: "AI Engineer / Technical Lead",
    org: "Product Manager Accelerator",
    summary:
      "Led architecture for AI products using LangChain, OpenAI, FastAPI, React, Qdrant, MongoDB Atlas, and AWS, with multi-agent workflows and production-oriented RAG systems.",
  },
  {
    year: "2021 - 2023",
    role: "Data Analyst",
    org: "Laureate Education",
    summary:
      "Built ETL pipelines, enterprise dashboards, and a CSAT survey platform using Python, Java, PostgreSQL, MongoDB, AngularJS, and Power BI.",
  },
  {
    year: "2021",
    role: "Data Engineer",
    org: "Claro Enterprise Solutions",
    summary:
      "Automated ETL workflows for telecom datasets and improved reporting reliability through Python, Java, Oracle DB, and Power BI.",
  },
  {
    year: "2019 - 2020",
    role: "Mobile Developer",
    org: "Dinant",
    summary:
      "Developed Android logistics tooling in Java and Kotlin and improved operational efficiency by automating data collection workflows.",
  },
];

const credentials = {
  tools: ["Python", "SQL", "PostgreSQL", "MongoDB", "Databricks", "Snowflake", "Spark", "Qdrant"],
  skills: [
    "Agentic AI architectures",
    "RAG and vector search",
    "ETL / ELT pipelines",
    "FastAPI and microservices",
    "AWS and GCP deployment",
  ],
  certifications: [
    "SAS Workbench & Sustainability Champion",
    "AI Engineer Certification",
    "AI Agents Fundamentals - Databricks",
    "Databricks Fundamentals",
  ],
};

export default function ExperiencePage() {
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
          <h1 className="section-title">Experience across AI, analytics, and data systems.</h1>

          <div className="timeline">
            {timeline.map((item) => (
              <article key={`${item.year}-${item.role}`} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-card">
                  <h2 className="card-title">{item.role}</h2>
                  <p className="timeline-org">{item.org}</p>
                  <p className="card-copy">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-1 pb-10 pt-14 md:pt-18">
        <h2 className="subsection-title">Tools, strengths, and certifications</h2>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <article className="info-panel">
            <h3 className="card-title">Technical Tools</h3>
            <ul className="detail-list">
              {credentials.tools.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="info-panel">
            <h3 className="card-title">Core Skills</h3>
            <ul className="detail-list">
              {credentials.skills.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="info-panel">
            <h3 className="card-title">Certifications</h3>
            <ul className="detail-list">
              {credentials.certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="pt-8">
          <a
            className="button-primary"
            href="/resume/Alex_David_Ordonez_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download resume
          </a>
        </div>
      </section>
    </main>
  );
}
