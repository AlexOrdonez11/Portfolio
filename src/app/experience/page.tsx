import { SiteNav } from "@/components/site-nav";

const timeline = [
  {
    start: "Aug 2026",
    end: "Present",
    role: "Data Systems & Digital Marketing Coordinator",
    org: "Pediatric & Young Adult Medicine",
    summary:
      "Transform legacy medical intake forms into validated, age- and visit-aware digital workflows while building patient-facing web experiences, acquisition analytics, and an AI-powered video-generation pipeline.",
    stack: ["Structured Extraction", "Workflow Automation", "Web Analytics", "AI Video Generation", "Veo / Runway"],
    icon: "analytics",
  },
  {
    start: "Jun 2026",
    end: "Present",
    role: "Data Operations Engineer",
    org: "Kansul Holdings",
    summary:
      "Implement Azure and PostgreSQL solutions that support reliable operational workflows, with React applications and Looker dashboards that surface decision-ready metrics.",
    stack: ["Azure", "PostgreSQL", "React", "Looker", "Operational Analytics"],
    icon: "database",
  },
  {
    start: "May 2026",
    end: "Jul 2026",
    role: "Data Engineer",
    org: "Linker Finance",
    summary:
      "Built and validated a multi-tenant AWS data lake with bronze, silver, and gold layers; developed tested Python ETL pipelines and tenant-aware APIs that supported analytics and downstream AI services.",
    stack: ["Python", "S3", "Glue / Athena", "Lambda", "Parquet", "FastAPI", "OpenLineage", "Datadog"],
    icon: "database",
  },
  {
    start: "Sep 2025",
    end: "May 2026",
    role: "Research Assistant - Data Science",
    org: "Oakland University Business School",
    summary:
      "Built ML and LLM pipelines for medical survey analytics, SAS and Python workflows for AMI forecasting and grid analysis, and scalable geospatial pipelines for multi-hazard risk research.",
    stack: ["Python", "SAS", "LLMs", "Forecasting", "Time Series", "Geospatial Analytics"],
    icon: "ai",
  },
  {
    start: "May 2025",
    end: "Sep 2025",
    role: "AI Engineer / Technical Lead",
    org: "Product Manager Accelerator",
    summary:
      "Led AI product delivery from business requirements through architecture, implementation, testing, and production handoff, including multi-agent applications, RAG pipelines, and structured data-ingestion workflows.",
    stack: ["LangChain / LangGraph", "OpenAI", "FastAPI", "MongoDB", "AWS", "Docker", "Qdrant"],
    icon: "rocket",
  },
  {
    start: "Dec 2021",
    end: "Nov 2023",
    role: "Data Analyst",
    org: "Laureate Education",
    summary:
      "Built enterprise ETL pipelines, Power BI dashboards, automated KPI reporting that improved performance visibility by 30%, and a CSAT data collection and reporting platform.",
    stack: ["Python", "SQL", "PostgreSQL", "MongoDB", "DynamoDB", "AngularJS", "Power BI"],
    icon: "analytics",
  },
  {
    start: "Jan 2021",
    end: "Nov 2021",
    role: "Data Engineer",
    org: "Claro Enterprise Solutions",
    summary:
      "Automated telecom ETL workflows and improved reporting reliability through data engineering and visualization tooling.",
    stack: ["Python", "Java", "Oracle DB", "Power BI", "ETL"],
    icon: "database",
  },
];

const credentials = {
  tools: [
    {
      category: "Programming",
      items: ["Python", "SQL", "PySpark", "Pandas", "NumPy", "SAS", "R", "Java", "TypeScript", "Bash"],
    },
    {
      category: "Data Engineering & Cloud",
      items: ["Amazon S3", "AWS Glue", "Athena", "Lambda", "Step Functions", "Lake Formation", "Spark", "Databricks", "Snowflake", "PostgreSQL", "MongoDB", "DynamoDB"],
    },
    {
      category: "AI / ML",
      items: ["LangChain", "LangGraph", "OpenAI", "Gemini", "Hugging Face", "RAG", "Qdrant", "Scikit-Learn", "TensorFlow", "PyTorch", "Forecasting"],
    },
    {
      category: "Applications & Delivery",
      items: ["FastAPI", "Flask", "REST APIs", "React", "Angular", "Streamlit", "Docker", "GitHub Actions", "pytest", "OpenLineage", "CloudWatch", "Datadog"],
    },
    {
      category: "Analytics & Reporting",
      items: ["Power BI", "Looker", "Excel", "Matplotlib", "KPI Dashboards", "Data Visualization", "Statistical Modeling"],
    }
  ],
  skills: [
    "Cloud data lake architecture",
    "ETL / ELT pipeline development",
    "Data modeling and partitioning",
    "Data quality and automated testing",
    "Orchestration and observability",
    "API and application development",
    "RAG and agentic AI systems",
    "Advanced analytics and forecasting",
    "Technical leadership",
  ],
  certifications: [
    "SAS Workbench & Sustainability Champion",
    "AI Engineer Certification - Product Manager Accelerator",
    "Databricks AI Agents Fundamentals",
    "Databricks Fundamentals",
  ],
};

function CredentialIcon({ type }: { type: string }) {
  const commonProps = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "card-icon-svg",
    "aria-hidden": true,
  } as const;

  switch (type) {
    case "tools":
      return (
        <svg {...commonProps}>
          <path d="M14.5 6.5L17.5 3.5L20.5 6.5L17.5 9.5M3.5 20.5L10.7 13.3M9.2 6.1L11.4 3.9C12.4 2.9 14 2.9 15 3.9L20.1 9C21.1 10 21.1 11.6 20.1 12.6L17.9 14.8M6.2 9.2L3.9 11.5C2.9 12.5 2.9 14.1 3.9 15.1L8.9 20.1C9.9 21.1 11.5 21.1 12.5 20.1L14.8 17.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "skills":
      return (
        <svg {...commonProps}>
          <path d="M4 18.5H20M6.5 16V11.5M12 16V7.5M17.5 16V9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M6.5 8.5L10 5.5L13 7.7L18 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="6.5" cy="8.5" r="1.1" fill="currentColor" />
          <circle cx="10" cy="5.5" r="1.1" fill="currentColor" />
          <circle cx="13" cy="7.7" r="1.1" fill="currentColor" />
          <circle cx="18" cy="4.5" r="1.1" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <path d="M12 3.5L14.6 8.8L20.5 9.6L16.2 13.7L17.2 19.5L12 16.8L6.8 19.5L7.8 13.7L3.5 9.6L9.4 8.8L12 3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
  }
}

function TimelineIcon({ type }: { type: string }) {
  const commonProps = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "timeline-icon-svg",
    "aria-hidden": true,
  } as const;

  switch (type) {
    case "ai":
      return (
        <svg {...commonProps}>
          <rect x="5" y="5" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 2V5M12 19V22M2 12H5M19 12H22M5.5 5.5L7.2 7.2M16.8 16.8L18.5 18.5M18.5 5.5L16.8 7.2M7.2 16.8L5.5 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9.2 15L12 9L14.8 15M10.1 13.1H13.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...commonProps}>
          <path d="M14.5 5.5C12 5.8 9.8 7.2 8.4 9.1L6.8 11.4L12.6 17.2L14.9 15.6C16.8 14.2 18.2 12 18.5 9.5L18.8 6.8L17.2 5.2L14.5 5.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M9.2 14.8L6.2 17.8M7.5 9.3L5.2 8.8L3.8 10.2L5.8 12.2M14.7 16.5L15.2 18.8L13.8 20.2L11.8 18.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="14.2" cy="9.8" r="1.3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "analytics":
      return (
        <svg {...commonProps}>
          <path d="M4 18.5H20M6.5 16V11.5M12 16V7.5M17.5 16V9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M6.5 8.5L10 5.5L13 7.7L18 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="6.5" cy="8.5" r="1.1" fill="currentColor" />
          <circle cx="10" cy="5.5" r="1.1" fill="currentColor" />
          <circle cx="13" cy="7.7" r="1.1" fill="currentColor" />
          <circle cx="18" cy="4.5" r="1.1" fill="currentColor" />
        </svg>
      );
    case "database":
      return (
        <svg {...commonProps}>
          <ellipse cx="12" cy="6" rx="6.5" ry="2.8" stroke="currentColor" strokeWidth="1.7" />
          <path d="M5.5 6V12C5.5 13.5 8.4 14.8 12 14.8C15.6 14.8 18.5 13.5 18.5 12V6" stroke="currentColor" strokeWidth="1.7" />
          <path d="M5.5 12V18C5.5 19.5 8.4 20.8 12 20.8C15.6 20.8 18.5 19.5 18.5 18V12" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <rect x="7" y="3.5" width="10" height="17" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M10 6.5H14M9.5 17.5H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
}

export default function ExperiencePage() {
  return (
    <main className="page-wrap">
      <div className="page-nav-wrap">
        <SiteNav />
      </div>

      <section className="soft-section">
        <div className="section-stack">
          <h1 className="section-title experience-title">Experience across AI engineering, data engineering, and analytics.</h1>
          <p className="section-support">
            Selected roles building intelligent applications, cloud data platforms,
            operational workflows, and analytics products with reliable delivery.
          </p>

          <div className="timeline">
            {timeline.map((item) => (
              <article key={`${item.start}-${item.role}`} className="timeline-item">
                <div className="timeline-year">
                  <span className="timeline-year-start">{item.start}</span>
                  <span className={`timeline-year-end${item.end ? "" : " timeline-year-end-empty"}`}>
                    {item.end ?? "\u00A0"}
                  </span>
                </div>
                <div className="timeline-badge" aria-hidden="true">
                  <TimelineIcon type={item.icon} />
                </div>
                <div className="timeline-card">
                  <h2 className="card-title">{item.role}</h2>
                  <p className="timeline-org">{item.org}</p>
                  <p className="timeline-summary">{item.summary}</p>
                  <ul className="timeline-stack">
                    {item.stack.map((tech) => (
                      <li key={tech} className="timeline-stack-pill">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-1 pb-10 pt-14 md:pt-12">
        <h2 className="subsection-title">Tools, strengths, and certifications</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[color:var(--muted)]">
          A resume-backed snapshot of the platforms, methods, and credentials that
          support my work across AI systems, data pipelines, and production delivery.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4">
          <article className="info-panel">
            <div className="card-heading">
              <span className="card-icon-badge">
                <CredentialIcon type="tools" />
              </span>
              <h3 className="card-title">Technical Tools</h3>
            </div>
            <div className="tool-groups">
              {credentials.tools.map((group) => (
                <section key={group.category} className="tool-group">
                  <h4 className="tool-group-title">{group.category}</h4>
                  <ul className="skill-grid skill-grid-compact">
                    {group.items.map((item) => (
                      <li key={item} className="skill-pill">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </article>

          <article className="info-panel">
            <div className="card-heading">
              <span className="card-icon-badge">
                <CredentialIcon type="skills" />
              </span>
              <h3 className="card-title">Core Skills</h3>
            </div>
            <ul className="skill-grid">
              {credentials.skills.map((item) => (
                <li key={item} className="skill-pill">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="info-panel">
            <div className="card-heading">
              <span className="card-icon-badge">
                <CredentialIcon type="certs" />
              </span>
              <h3 className="card-title">Certifications</h3>
            </div>
            <ul className="skill-grid">
              {credentials.certifications.map((item) => (
                <li key={item} className="skill-pill skill-pill-strong">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="pt-8">
          <a
            className="button-primary"
            href="/resume/Alex_Ordonez_AI_Data_Engineer_Resume.pdf"
            download
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
