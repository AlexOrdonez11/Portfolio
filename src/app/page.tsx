import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";

const technicalStrengths = [
  {
    title: "AI / ML",
    icon: "ai",
    items: [
      "OpenAI GPT",
      "Gemini",
      "LangChain",
      "LangGraph",
      "RAG",
      "Vector Search",
      "Scikit-Learn",
      "Hugging Face",
      "BERT / RoBERTa",
      "Forecasting",
    ],
  },
  {
    title: "Data Engineering",
    icon: "data",
    items: [
      "Python",
      "SQL",
      "PySpark",
      "AWS Data Lakes",
      "AWS Glue / Athena",
      "PostgreSQL",
      "MongoDB",
      "Snowflake",
      "Databricks",
      "ETL / ELT",
      "Data Quality",
      "OpenLineage",
    ],
  },
  {
    title: "Cloud / Backend",
    icon: "cloud",
    items: [
      "AWS",
      "Azure",
      "GCP",
      "FastAPI",
      "REST APIs",
      "Docker",
      "GitHub Actions",
      "pytest",
      "Datadog",
      "Power BI / Looker",
    ],
  },
];

const education = [
  {
    degree: "Master of Science in Business Analytics",
    school: "Oakland University",
    period: "Sep 2024 - Dec 2025",
    location: "Rochester, Michigan, US",
  },
  {
    degree: "Bachelor's in Computer Systems Engineering",
    school: "Universidad Tecnologica Centroamericana",
    period: "Jan 2017 - Mar 2022",
    location: "Tegucigalpa, Honduras",
  },
];

function SkillCardIcon({ type }: { type: string }) {
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
    case "ai":
      return (
        <svg {...commonProps}>
          <rect x="5" y="5" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12 2V5M12 19V22M2 12H5M19 12H22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M9.3 15L12 9L14.7 15M10.2 13.1H13.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "data":
      return (
        <svg {...commonProps}>
          <ellipse cx="12" cy="6" rx="6.5" ry="2.8" stroke="currentColor" strokeWidth="1.7" />
          <path d="M5.5 6V12C5.5 13.5 8.4 14.8 12 14.8C15.6 14.8 18.5 13.5 18.5 12V6" stroke="currentColor" strokeWidth="1.7" />
          <path d="M5.5 12V18C5.5 19.5 8.4 20.8 12 20.8C15.6 20.8 18.5 19.5 18.5 18V12" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "education":
      return (
        <svg {...commonProps}>
          <path d="M3 8.5L12 4L21 8.5L12 13L3 8.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M7 11.1V15.2C7 16.8 9.3 18 12 18C14.7 18 17 16.8 17 15.2V11.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 8.5V14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <path d="M7 15.5C5.6 15.5 4.5 14.4 4.5 13C4.5 11.8 5.3 10.8 6.4 10.5C6.7 7.9 8.9 6 11.6 6C13.7 6 15.6 7.1 16.6 8.8C18.5 8.9 20 10.5 20 12.5C20 14.6 18.3 16.3 16.2 16.3H7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M12 10V18M8.8 14.2L12 17.4L15.2 14.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function Home() {
  return (
    <main className="page-wrap">
      <div className="page-nav-wrap">
        <SiteNav />
      </div>

      <section className="soft-section">
        <div className="section-stack">
          <p className="section-kicker">AI Engineer | Data Engineer</p>
          <div className="statement-grid">
            <div className="portrait-panel">
              <div className="portrait-placeholder">
                <Image
                  src="/images/improved image.PNG"
                  alt="Portrait of Alex David Ordonez"
                  width={900}
                  height={1200}
                  priority
                  className="portrait-photo"
                />
                <span className="portrait-initials">Alex Ordonez</span>
              </div>
            </div>
            <div className="statement-copy">
              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-[color:var(--ink)] md:text-4xl">
                I build AI applications and the data systems behind them.
              </h1>
              <p>
                I work across Python backends, retrieval, agent workflows, and
                cloud data pipelines, connecting AI features to the systems
                that make them useful.
              </p>
              <p>
                My work includes a multi-tenant AWS data lake at Linker Finance,
                technical leadership on MyHandyAI, and client communication
                analysis with ClientSignalEQ. I currently build healthcare
                workflows at PYAM and data solutions for Kansul Holdings.
              </p>
              <p>
                Exploring AI engineering and data engineering opportunities in
                California, Michigan, and Minnesota.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link className="button-primary" href="#selected-work">
                  Explore selected work
                </Link>
                <a
                  className="button-secondary"
                  href="/resume/Alex_Ordonez_AI_Data_Engineer_Resume.pdf"
                  download
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

      <section id="selected-work" className="scroll-mt-8 px-1 pt-10 md:pt-12">
        <h2 className="subsection-title">Selected engineering work</h2>
        <p className="mt-3 max-w-4xl text-base leading-8 text-[color:var(--muted)]">
          Three examples of how I connect data, backend engineering, and AI.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              title: "Financial data foundations",
              context: "Linker Finance · Data Engineer",
              copy: "Built a multi-tenant AWS data lake, Python ETL pipelines, automated validation, and tenant-aware FastAPI endpoints for financial analytics and downstream AI.",
              href: "/experience#linker-finance",
              action: "Explore data engineering experience",
            },
            {
              title: "MyHandyAI",
              context: "AI Engineer / Technical Lead · Internship project",
              copy: "Led a multimodal repair assistant combining image input, retrieval, clarification, and agent workflows. Explore the product demo and architecture.",
              href: "/projects#myhandyai",
              action: "View MyHandyAI case study",
            },
            {
              title: "ClientSignalEQ",
              context: "AI Engineer / Technical Lead · Internship project",
              copy: "Built client communication analysis with structured AI outputs and asynchronous processing. Read how the team addressed API timeouts and inconsistent model responses.",
              href: "/projects#clientsignaleq",
              action: "View ClientSignalEQ case study",
            },
          ].map((work) => (
            <article key={work.title} className="info-panel flex flex-col">
              <p className="card-meta">{work.context}</p>
              <h3 className="card-title mt-3">{work.title}</h3>
              <p className="card-copy">{work.copy}</p>
              <Link href={work.href} className="mt-auto pt-5 font-semibold underline underline-offset-4">
                {work.action}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="px-1 pt-10 md:pt-12">
        <h2 className="subsection-title">Technical strengths</h2>
        <p className="mt-3 max-w-4xl text-base leading-8 text-[color:var(--muted)]">
          A quick snapshot of the tools and systems I work with most across AI,
          data engineering, and production-ready backend development.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {technicalStrengths.map((item) => (
            <article key={item.title} className="info-panel">
              <div className="card-heading">
                <span className="card-icon-badge">
                  <SkillCardIcon type={item.icon} />
                </span>
                <h3 className="card-title">{item.title}</h3>
              </div>
              <ul className="skill-grid">
                {item.items.map((skill) => (
                  <li key={skill} className="skill-pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="px-1 pt-10 md:pt-12">
        <h2 className="subsection-title">Education</h2>
        <p className="mt-3 max-w-3xl text-base leading-8 text-[color:var(--muted)]">
          Academic foundations that support my work across analytics, software,
          and applied AI systems.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.degree} className="info-panel">
              <div className="card-heading">
                <span className="card-icon-badge">
                  <SkillCardIcon type="education" />
                </span>
                <div className="card-heading-stack">
                  <h3 className="card-title">{item.degree}</h3>
                  <p className="card-meta">
                    {item.school} | {item.period}
                  </p>
                </div>
              </div>
              <p className="card-copy">{item.location}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

