import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "AI systems builder",
    description:
      "I design end-to-end systems that connect data, language, and user interaction into workflows that produce useful decisions.",
  },
  {
    title: "Data engineering foundation",
    description:
      "My work is grounded in pipelines, retrieval systems, transformation logic, and the infrastructure needed to support reliable AI behavior.",
  },
  {
    title: "Cloud-ready execution",
    description:
      "I build with production in mind, using APIs, scalable services, and deployment workflows that move ideas beyond prototypes.",
  },
];

export default function Home() {
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
          <h1 className="section-title">AI Engineer focused on building systems that people can trust.</h1>

          <div className="statement-grid">
            <div className="portrait-panel">
              <div className="portrait-placeholder">
                <Image
                  src="/images/improved%20image.PNG"
                  alt="Portrait of Alex David Ordonez"
                  width={900}
                  height={1200}
                  priority
                  className="portrait-photo"
                />
                <div>
                  <span className="portrait-initials">Alex</span>
                  <span className="portrait-role">AI Engineer | Data Scientist</span>
                </div>
              </div>
            </div>

            <div className="statement-copy">
              <p>
                I am Alex David Ordonez, an AI Engineer and Data Scientist who
                enjoys building intelligent systems from the ground up. My work
                brings together data engineering, machine learning, and applied AI
                to create products that turn complex information into clear,
                usable outcomes.
              </p>
              <p>
                I have worked across healthcare, energy, and enterprise analytics,
                designing solutions that combine LLM workflows, scalable ML
                pipelines, retrieval systems, APIs, and cloud-native deployment.
                The part I enjoy most is making these systems not only capable, but
                also explainable, maintainable, and ready for real-world use.
              </p>
              <p>
                My goal is to keep building AI products that are grounded in strong
                engineering and shaped by practical value. I care about reliability
                just as much as innovation, because the best AI systems are the
                ones people can actually depend on.
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

      <section className="px-1 pt-12 md:pt-16">
        <h2 className="subsection-title">Engineering values behind the work</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {highlights.map((item) => (
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
