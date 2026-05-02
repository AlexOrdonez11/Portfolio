import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";

const technicalStrengths = [
  {
    title: "AI / ML",
    icon: "ai",
    items: [
      "GPT-4/5",
      "Gemini",
      "LangChain",
      "LangGraph",
      "RAG",
      "Scikit-Learn",
      "SpaCy",
      "Hugging Face",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    title: "Data Engineering",
    icon: "data",
    items: [
      "Python",
      "Java",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Spark",
      "Snowflake",
      "Databricks",
      "Qdrant",
      "ETL / ELT",
      "Power BI",
      "Airflow"
    ],
  },
  {
    title: "Cloud / Backend",
    icon: "cloud",
    items: [
      "AWS",
      "GCP",
      "FastAPI",
      "Flask",
      "REST APIs",
      "Docker",
      "CI/CD",
      "Microservices",
      "Git Workflows",
      "Cloud Storage"
    ],
  },
];

const education = [
  {
    degree: "Master of Science in Business Analytics",
    school: "Oakland University",
    period: "2024 - 2025",
    location: "Rochester, Michigan US",
  },
  {
    degree: "Bachelor's in Computer Systems Engineering",
    school: "Universidad Tecnologica Centroamericana",
    period: "2017 - 2022",
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
          <p className="section-kicker">AI Engineer | Data Scientist</p>
          <h1 className="section-title hero-title">
            I build production-ready AI and data systems that turn complex
            information into usable decisions.
          </h1>
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
              <p>
                I am Alex David Ordonez, an AI Engineer and Data Scientist
                focused on LLM applications, forecasting workflows, analytics
                platforms, and cloud-ready backend systems.
              </p>
              <p>
                I have worked across healthcare, energy, and enterprise analytics,
                designing solutions that combine LLM workflows, scalable ML
                pipelines, retrieval systems, APIs, and cloud-native deployment.
                The part I enjoy most is taking an idea from model logic and data
                pipelines all the way to an interface people can actually use.
              </p>
              <p>
                I care about reliability just as much as innovation, because the
                best AI systems are the ones teams can understand, maintain, and
                depend on in real workflows.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link className="button-primary" href="/experience">
                  View experience
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

