import { SiteNav } from "@/components/site-nav";

const timeline = [
  {
    start: "2025",
    end: "Present",
    role: "Graduate Assisstant - Data Science",
    org: "Oakland University Business School",
    summary:
      "Built ML and LLM pipelines for medical survey analysis and developed an agentic forecasting workflow for electricity consumption research.",
    stack: ["Python", "LLMs", "LangChain", "Streamlit", "Forecasting"],
    icon: "ai",
  },
  {
    start: "2025",
    role: "AI Engineer / Technical Lead",
    org: "Product Manager Accelerator",
    summary:
      "Led architecture for AI products with multi-agent workflows, RAG systems, and cloud-ready full-stack delivery.",
    stack: ["LangChain", "OpenAI", "FastAPI", "React", "AWS", "Qdrant"],
    icon: "rocket",
  },
  {
    start: "2021",
    end: "2023",
    role: "Data Analyst",
    org: "Laureate Education",
    summary:
      "Built ETL pipelines, enterprise dashboards, and a CSAT survey platform that improved reporting visibility and feedback collection.",
    stack: ["Python", "Java", "PostgreSQL", "MongoDB", "AngularJS", "Power BI"],
    icon: "analytics",
  },
  {
    start: "2021",
    role: "Data Engineer",
    org: "Claro Enterprise Solutions",
    summary:
      "Automated telecom ETL workflows and improved reporting reliability through data engineering and visualization tooling.",
    stack: ["Python", "Java", "Oracle DB", "Power BI", "ETL"],
    icon: "database",
  },
  {
    start: "2019",
    end: "2020",
    role: "Mobile Developer",
    org: "Dinant",
    summary:
      "Developed Android logistics tooling and streamlined operational data collection through mobile workflow automation.",
    stack: ["Java", "Kotlin", "Android", "Logistics"],
    icon: "mobile",
  },
];

const credentials = {
  tools: [
    {
      category: "Programming",
      items: ["Python", "SQL", "Java", "R", "SAS", "C++", "C", "Kotlin", "JavaScript", "TypeScript"],
    },
    {
      category: "Data Engineering",
      items: ["Airflow", "Spark", "Databricks", "Snowflake", "MongoDB", "SQL Server", "Oracle DB", "PostgreSQL", "MySQL", "DBT"],
    },
    {
      category: "AI / ML",
      items: ["Qdrant", "LangChain", "OpenAI", "Gemini", "Transformers", "Hugging Face", "LLMs", "Forecasting"],
    },
    {
      category: "Cloud / Backend",
      items: ["AWS", "GCP", "FastAPI", "Flask", "Docker", "Git", "CI/CD", "Cloud Storage", "Microservices"],
    },
    {
      category: "Analytics",
      items: ["Power BI", "Tableau", "Excel", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "GeoPandas"],
    },
    {
      category: "Frontend",
      items: ["React", "Angular"],
    }
  ],
  skills: [
    "Agentic AI architectures",
    "LLM Implementation",
    "RAG and vector search",
    "ETL / ELT pipelines",
    "FastAPI and microservices",
    "AWS and GCP deployment",
    "Data Analytics",
    "Data Visualization",
    "ML Pipelines",
  ],
  certifications: [
    "SAS Workbench & Sustainability Champion",
    "AI Engineer Certification",
    "AI Agents Fundamentals - Databricks",
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
          <h1 className="section-title experience-title">Experience across AI, analytics, and data systems.</h1>
          <p className="section-support">
            Selected roles across AI, analytics, and data engineering, with a focus on
            intelligent systems, reliable delivery, and practical product value.
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
