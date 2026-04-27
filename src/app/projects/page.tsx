import { ProjectMediaCarousel } from "@/components/project-media-carousel";
import { SiteNav } from "@/components/site-nav";

const projectHighlights = [
  "AI products built with clear business value and technical depth",
  "Production-oriented architectures across LLMs, APIs, and data systems",
  "A focus on usability, reliability, and explainable outcomes",
];

const myHandyAiStack = [
  "Computer Vision",
  "LLMs",
  "LangChain",
  "Vector Search",
  "FastAPI",
  "React",
  "AWS",
];

const myHandyAiMedia = [
  {
    type: "image" as const,
    src: "/images/HandyAI_Product_Image.png",
    alt: "MyHandyAI product overview",
    label: "Product overview",
  },
  {
    type: "image" as const,
    src: "/images/HandyAI_Chat.png",
    alt: "MyHandyAI chat interface",
    label: "Chat experience",
  },
  {
    type: "image" as const,
    src: "/images/Handy_Architecture.png",
    alt: "MyHandyAI architecture",
    label: "Architecture diagram",
  },
  {
    type: "video" as const,
    embedUrl: "https://www.youtube.com/embed/a0fpupm23Yw",
    title: "MyHandyAI demo video",
    label: "Live demo video",
  },
];

const clientSignalEqStack = [
  "Email Analytics",
  "Sentiment Analysis",
  "Behavioral Signals",
  "LLMs",
  "LangChain",
  "FastAPI",
  "React",
  "MongoDB Atlas",
  "Qdrant",
];

const clientSignalEqMedia = [
  {
    type: "image" as const,
    src: "/images/ClientSignalEQ_Home.png",
    alt: "Client Signal EQ home screen",
    label: "Home screen",
  },
  {
    type: "image" as const,
    src: "/images/ClientSignalEQ_Dashboard.png",
    alt: "Client Signal EQ dashboard view",
    label: "Dashboard view",
  },
  {
    type: "image" as const,
    src: "/images/ClientSignalEQ_Breakdown.png",
    alt: "Client Signal EQ signal breakdown",
    label: "Signal breakdown",
  },
];

const analyticsAiStack = [
  "Forecasting",
  "Agentic AI",
  "SAS",
  "Python",
  "Gemini",
  "Time-Series Modeling",
  "Simulation",
  "Optimization",
  "Interactive Analytics",
];

const analyticsAiMedia = [
  {
    type: "image" as const,
    src: "/images/analytics_ai.png",
    alt: "Analytics AI forecasting dashboard",
    label: "Forecasting dashboard",
  },
  {
    type: "image" as const,
    src: "/images/analytics_ai_architecture.png",
    alt: "Analytics AI architecture diagram",
    label: "Architecture diagram",
  },
];

const smartMetersStack = [
  "Smart Meter Data",
  "Time-Series Forecasting",
  "Python",
  "SAS",
  "Gemini",
  "Anomaly Detection",
  "Interactive Analytics",
  "Energy Modeling",
];

const sentimentDatabricksStack = [
  "Databricks",
  "Python",
  "Web Scraping",
  "Transformer Models",
  "Sentiment Analysis",
  "Clustering",
  "SQL Server",
  "Power BI",
  "NLP",
];

const medicalChatbotStack = [
  "LLMs",
  "LSTM",
  "TensorFlow",
  "T5",
  "GPT-2",
  "NLP",
  "Python",
  "Conversational AI",
  "Healthcare Data",
  "Model Comparison",
];

const dashboardsStack = [
  "Power BI",
  "KPI Reporting",
  "SQL",
  "Data Modeling",
  "Operational Analytics",
  "Sales Analytics",
  "Segmentation",
  "Revenue Reporting",
  "Cancellation Analysis",
  "Stakeholder Dashboards",
];

export default function ProjectsPage() {
  return (
    <main className="page-wrap">
      <div className="page-nav-wrap">
        <SiteNav />
      </div>

      <section className="soft-section">
        <div className="section-stack">
          <p className="section-kicker">Portfolio</p>
          <h1 className="section-title experience-title">
            AI products and data-driven systems built for real-world use.
          </h1>
          <p className="section-support">
            My portfolio brings together projects where I combined AI
            engineering, data systems, and product thinking to solve practical
            problems. Each case study is meant to show not only the technology
            behind the work, but also the decision-making, architecture, and
            value delivered.
          </p>

          <ul className="skill-grid">
            {projectHighlights.map((item) => (
              <li key={item} className="skill-pill skill-pill-strong">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-1 pt-12 md:pt-12">
        <article className="project-card">
          <div className="flex flex-wrap items-center gap-3">
            <span className="project-type">Featured AI Product</span>
            <span className="skill-pill">MyHandyAI</span>
          </div>

          <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(19rem,0.7fr)] lg:items-stretch">
            <div className="project-media-column">
              <h2 className="subsection-title project-column-title">MyHandyAI</h2>
              <ProjectMediaCarousel
                title="Product walkthrough"
                items={myHandyAiMedia}
              />
            </div>

            <div className="info-panel project-snapshot-panel">
              <div className="card-heading">
                <span className="card-icon-badge" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="card-icon-svg"
                  >
                    <path
                      d="M14.5 5.5C12 5.8 9.8 7.2 8.4 9.1L6.8 11.4L12.6 17.2L14.9 15.6C16.8 14.2 18.2 12 18.5 9.5L18.8 6.8L17.2 5.2L14.5 5.5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.2 14.8L6.2 17.8M7.5 9.3L5.2 8.8L3.8 10.2L5.8 12.2M14.7 16.5L15.2 18.8L13.8 20.2L11.8 18.2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="14.2" cy="9.8" r="1.3" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <h3 className="card-title">Project snapshot</h3>
              </div>
              <div className="tool-groups">
                <section className="tool-group">
                  <h4 className="tool-group-title">Problem</h4>
                  <p className="card-copy mt-0">
                    DIY users often struggle to turn scattered repair
                    information into confident action.
                  </p>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Focus</h4>
                  <p className="card-copy mt-0">
                    Deliver context-aware repair guidance using multimodal AI
                    and retrieval-backed workflows.
                  </p>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Stack</h4>
                  <ul className="skill-grid skill-grid-compact">
                    {myHandyAiStack.map((item) => (
                      <li key={item} className="skill-pill">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Role</h4>
                  <p className="card-copy mt-0">
                    AI Engineer / Technical Lead, focused on product architecture,
                    retrieval design, and intelligent workflow orchestration.
                  </p>
                </section>
              </div>
            </div>
          </div>

          <div className="mt-7 project-overview-block">
            <h3 className="project-overview-title">Overview</h3>
            <div>
              <p className="card-copy">
                MyHandyAI is an intelligent DIY assistant designed to help users
                understand, diagnose, and complete repair tasks with clearer
                step-by-step guidance. The goal was to create an AI product that
                could bridge the gap between raw technical information and
                practical action for everyday users.
              </p>
              <p className="card-copy">
                I helped shape the system architecture around computer vision,
                vector search, and LLM workflows so the assistant could interpret
                user inputs, retrieve relevant repair knowledge, and respond with
                grounded, usable instructions instead of generic answers. The
                product was built to feel helpful in real scenarios, not just as
                a demo of AI capabilities.
              </p>
            </div>
          </div>
        </article>

        <article className="project-card mt-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="project-type">Enterprise Intelligence</span>
            <span className="skill-pill">Client Signal EQ</span>
          </div>

          <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(19rem,0.7fr)] lg:items-stretch">
            <div className="project-media-column">
              <h2 className="subsection-title project-column-title">Client Signal EQ</h2>
              <ProjectMediaCarousel
                title="Product walkthrough"
                items={clientSignalEqMedia}
              />
            </div>

            <div className="info-panel project-snapshot-panel">
              <div className="card-heading">
                <span className="card-icon-badge" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="card-icon-svg"
                  >
                    <path
                      d="M6 7.5H18C19.1 7.5 20 8.4 20 9.5V16.5C20 17.6 19.1 18.5 18 18.5H6C4.9 18.5 4 17.6 4 16.5V9.5C4 8.4 4.9 7.5 6 7.5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M7 5.5H17"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 11.5H12M7 14.5H10.5M15.5 11.5C16.9 11.5 18 12.6 18 14C18 15.4 16.9 16.5 15.5 16.5C14.1 16.5 13 15.4 13 14C13 12.6 14.1 11.5 15.5 11.5Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="card-title">Project snapshot</h3>
              </div>
              <div className="tool-groups">
                <section className="tool-group">
                  <h4 className="tool-group-title">Problem</h4>
                  <p className="card-copy mt-0">
                    Enterprise communication contains critical signals, but they
                    are hard to extract consistently at scale.
                  </p>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Focus</h4>
                  <p className="card-copy mt-0">
                    Detect sentiment, escalation risk, and client behavior patterns
                    from email workflows in a way teams can act on.
                  </p>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Stack</h4>
                  <ul className="skill-grid skill-grid-compact">
                    {clientSignalEqStack.map((item) => (
                      <li key={item} className="skill-pill">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Role</h4>
                  <p className="card-copy mt-0">
                    AI Engineer / Technical Lead, focused on signal design,
                    language intelligence, and scalable architecture for AI-driven
                    analysis.
                  </p>
                </section>
              </div>
            </div>
          </div>

          <div className="mt-7 project-overview-block">
            <h3 className="project-overview-title">Overview</h3>
            <div>
              <p className="card-copy">
                Client Signal EQ is an AI platform designed to analyze enterprise
                email communication and surface patterns that matter to account
                teams and business leaders. The goal was to move beyond basic
                message review and create a system that could detect sentiment,
                escalation risks, behavioral trends, and early client signals.
              </p>
              <p className="card-copy">
                I worked on shaping the AI architecture around language analysis,
                retrieval-backed reasoning, and structured signal extraction so
                the platform could turn large volumes of communication into more
                actionable insights. The value of the product was in helping teams
                spot relationship risks and opportunities earlier, with a clearer
                view of client dynamics over time.
              </p>
            </div>
          </div>
        </article>

        <article className="project-card mt-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="project-type">Forecasting Platform</span>
            <span className="skill-pill">Analytics AI</span>
          </div>

          <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(19rem,0.7fr)] lg:items-stretch">
            <div className="project-media-column">
              <h2 className="subsection-title project-column-title">Analytics AI</h2>
              <ProjectMediaCarousel
                title="Analytics walkthrough"
                items={analyticsAiMedia}
              />
            </div>

            <div className="info-panel project-snapshot-panel">
              <div className="card-heading">
                <span className="card-icon-badge" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="card-icon-svg"
                  >
                    <path
                      d="M4 18.5H20M6.5 16V11.5M12 16V7.5M17.5 16V9.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.5 8.5L10 5.5L13 7.7L18 4.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="6.5" cy="8.5" r="1.1" fill="currentColor" />
                    <circle cx="10" cy="5.5" r="1.1" fill="currentColor" />
                    <circle cx="13" cy="7.7" r="1.1" fill="currentColor" />
                    <circle cx="18" cy="4.5" r="1.1" fill="currentColor" />
                  </svg>
                </span>
                <h3 className="card-title">Project snapshot</h3>
              </div>
              <div className="tool-groups">
                <section className="tool-group">
                  <h4 className="tool-group-title">Problem</h4>
                  <p className="card-copy mt-0">
                    Forecasting outputs are often technically correct but hard
                    for teams to explore, question, and operationalize.
                  </p>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Focus</h4>
                  <p className="card-copy mt-0">
                    Combine predictive modeling with AI-guided exploration,
                    simulation, and interactive decision support.
                  </p>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Stack</h4>
                  <ul className="skill-grid skill-grid-compact">
                    {analyticsAiStack.map((item) => (
                      <li key={item} className="skill-pill">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Role</h4>
                  <p className="card-copy mt-0">
                    AI Engineer / Analytics Builder, focused on forecasting
                    workflows, agentic analysis, and translating model output
                    into practical insight.
                  </p>
                </section>
              </div>
            </div>
          </div>

          <div className="mt-7 project-overview-block">
            <h3 className="project-overview-title">Overview</h3>
            <div>
              <p className="card-copy">
                Analytics AI was built around the idea that advanced forecasting
                and decision support should be easier to explore, explain, and
                act on. The project focused on combining predictive analytics
                with agentic AI workflows so users could move from raw data and
                model outputs to more interactive insight generation.
              </p>
              <p className="card-copy">
                I contributed to a solution that brought together forecasting,
                simulation, and AI-assisted analytics for electricity
                consumption scenarios. The system was designed not only to
                generate predictions, but also to help users interrogate the
                results, understand possible trends, and explore operational
                decisions through a more natural analytical experience.
              </p>
            </div>
          </div>
        </article>

        <article className="project-card mt-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="project-type">NLP Analytics Project</span>
            <span className="skill-pill">Sentiment Analysis with Databricks</span>
          </div>

          <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div>
              <h2 className="subsection-title">Sentiment Analysis with Databricks</h2>
              <p className="card-copy">
                This project focused on turning unstructured user feedback into
                usable product and behavioral insight. By collecting Google Play
                Store review data and processing it with NLP workflows, the goal
                was to understand how users felt, what patterns were emerging,
                and where meaningful segments could be identified.
              </p>
              <p className="card-copy">
                I worked on a pipeline that combined data collection, sentiment
                modeling, clustering, and visualization so the results could be
                explored in a practical way rather than remaining purely
                technical outputs. The project connected Databricks-based
                analytics with downstream reporting in Power BI, making it
                easier to translate review data into decision-ready patterns.
              </p>
            </div>

            <div className="info-panel project-snapshot-panel">
              <div className="card-heading">
                <span className="card-icon-badge" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="card-icon-svg"
                  >
                    <rect
                      x="7"
                      y="3.5"
                      width="10"
                      height="17"
                      rx="2.2"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M10 6.5H14M9.5 10.5H14.5M9.5 14.5H14.5M10.5 17.5H13.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h3 className="card-title">Project snapshot</h3>
              </div>
              <div className="tool-groups">
                <section className="tool-group">
                  <h4 className="tool-group-title">Problem</h4>
                  <p className="card-copy mt-0">
                    User reviews contain rich product signals, but they are hard
                    to analyze consistently at scale without structured NLP and
                    segmentation.
                  </p>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Focus</h4>
                  <p className="card-copy mt-0">
                    Extract sentiment and behavioral patterns from review data
                    using transformer models, clustering, and analytics
                    dashboards.
                  </p>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Stack</h4>
                  <ul className="skill-grid skill-grid-compact">
                    {sentimentDatabricksStack.map((item) => (
                      <li key={item} className="skill-pill">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Role</h4>
                  <p className="card-copy mt-0">
                    Data Scientist / Analytics Builder, focused on NLP workflow
                    design, clustering analysis, and insight visualization.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </article>

        <article className="project-card mt-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="project-type">Energy Analytics System</span>
            <span className="skill-pill">Energy Consumption Smart Meters</span>
          </div>

          <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div>
              <h2 className="subsection-title">Energy Consumption Smart Meters</h2>
              <p className="card-copy">
                Energy Consumption Smart Meters focused on turning large-scale
                smart meter data into actionable forecasting and operational
                insight. The project was centered on understanding consumption
                behavior, identifying meaningful patterns, and building models
                that could support better planning around electricity demand.
              </p>
              <p className="card-copy">
                I contributed to a workflow that combined time-series analysis,
                AI-assisted exploration, and interactive analytics to make
                energy data easier to interpret and use. The strength of the
                project was in connecting technical forecasting work with a more
                practical decision-support layer, helping transform raw utility
                data into clearer signals for planning and analysis.
              </p>
            </div>

            <div className="info-panel project-snapshot-panel">
              <div className="card-heading">
                <span className="card-icon-badge" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="card-icon-svg"
                  >
                    <path
                      d="M4 18.5H20M6.5 16V11.5M12 16V7.5M17.5 16V9.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.5 8.5L10 5.5L13 7.7L18 4.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="6.5" cy="8.5" r="1.1" fill="currentColor" />
                    <circle cx="10" cy="5.5" r="1.1" fill="currentColor" />
                    <circle cx="13" cy="7.7" r="1.1" fill="currentColor" />
                    <circle cx="18" cy="4.5" r="1.1" fill="currentColor" />
                  </svg>
                </span>
                <h3 className="card-title">Project snapshot</h3>
              </div>
              <div className="tool-groups">
                <section className="tool-group">
                  <h4 className="tool-group-title">Problem</h4>
                  <p className="card-copy mt-0">
                    Smart meter data is rich in value, but difficult to turn
                    into clear forecasting and planning insight at scale.
                  </p>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Focus</h4>
                  <p className="card-copy mt-0">
                    Build forecasting and analytical workflows that help explain
                    consumption behavior and support better energy planning.
                  </p>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Stack</h4>
                  <ul className="skill-grid skill-grid-compact">
                    {smartMetersStack.map((item) => (
                      <li key={item} className="skill-pill">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Role</h4>
                  <p className="card-copy mt-0">
                    AI Engineer / Analytics Builder, focused on forecasting,
                    energy data interpretation, and interactive insight design.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </article>

        <article className="project-card mt-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="project-type">Healthcare AI Assistant</span>
            <span className="skill-pill">Medical Chatbot</span>
          </div>

          <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div>
              <h2 className="subsection-title">Medical Chatbot</h2>
              <p className="card-copy">
                This project focused on building a medical chatbot designed to
                interact directly with users in a more natural and helpful way.
                The goal was to create a conversational system that could learn
                from realistic doctor-patient exchanges and generate responses
                that felt coherent, relevant, and medically grounded.
              </p>
              <p className="card-copy">
                I trained an LSTM-based conversational model in TensorFlow on
                roughly 100,000 doctor-patient conversations, and also fine-tuned
                T5 and GPT-2 models on the same dataset for comparison. This
                allowed the project to evaluate different conversational modeling
                approaches side by side, comparing how sequence models and
                transformer-based architectures performed on the same healthcare
                dialogue task.
              </p>
            </div>

            <div className="info-panel project-snapshot-panel">
              <div className="card-heading">
                <span className="card-icon-badge" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="card-icon-svg"
                  >
                    <path
                      d="M7 5.5H17C18.1 5.5 19 6.4 19 7.5V12.5C19 13.6 18.1 14.5 17 14.5H12.5L9 18V14.5H7C5.9 14.5 5 13.6 5 12.5V7.5C5 6.4 5.9 5.5 7 5.5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8V12M10 10H14"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h3 className="card-title">Project snapshot</h3>
              </div>
              <div className="tool-groups">
                <section className="tool-group">
                  <h4 className="tool-group-title">Problem</h4>
                  <p className="card-copy mt-0">
                    Healthcare conversations require models that can respond in
                    a coherent and context-aware way while handling realistic
                    doctor-patient dialogue patterns.
                  </p>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Focus</h4>
                  <p className="card-copy mt-0">
                    Build and compare multiple conversational AI approaches for
                    user-facing medical dialogue generation.
                  </p>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Stack</h4>
                  <ul className="skill-grid skill-grid-compact">
                    {medicalChatbotStack.map((item) => (
                      <li key={item} className="skill-pill">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Role</h4>
                  <p className="card-copy mt-0">
                    AI Engineer / NLP Builder, focused on conversational model
                    training, fine-tuning, and comparative evaluation across
                    LSTM and transformer-based architectures.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </article>

        <article className="project-card mt-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="project-type">BI & Data Engineering</span>
            <span className="skill-pill">Operational Dashboard Suite</span>
          </div>

          <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div>
              <h2 className="subsection-title">Operational Dashboard Suite</h2>
              <p className="card-copy">
                This project represents a body of analytics and data engineering
                work built around stakeholder-facing dashboards for operations,
                sales, portfolio management, revenue monitoring, and
                cancellation analysis. The goal was to transform raw business
                data into clear reporting experiences that leadership and
                frontline teams could use to monitor performance and make faster
                decisions.
              </p>
              <p className="card-copy">
                The dashboard suite included support operations reporting, sales
                versus target tracking, account bundle segmentation, revenue and
                exam monitoring by owner, and sales versus cancellations trend
                analysis. Across these dashboards, the recurring focus was
                building strong KPI views, ranked comparisons, interactive
                filters, and visual breakdowns that surfaced bottlenecks,
                concentration points, and areas needing follow-up.
              </p>
            </div>

            <div className="info-panel project-snapshot-panel">
              <div className="card-heading">
                <span className="card-icon-badge" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="card-icon-svg"
                  >
                    <path
                      d="M4 18.5H20M6.5 16V11.5M12 16V7.5M17.5 16V9.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.5 8.5L10 5.5L13 7.7L18 4.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="6.5" cy="8.5" r="1.1" fill="currentColor" />
                    <circle cx="10" cy="5.5" r="1.1" fill="currentColor" />
                    <circle cx="13" cy="7.7" r="1.1" fill="currentColor" />
                    <circle cx="18" cy="4.5" r="1.1" fill="currentColor" />
                  </svg>
                </span>
                <h3 className="card-title">Project snapshot</h3>
              </div>
              <div className="tool-groups">
                <section className="tool-group">
                  <h4 className="tool-group-title">Problem</h4>
                  <p className="card-copy mt-0">
                    Business teams often have data available, but not in a form
                    that makes performance, bottlenecks, and trends easy to act on.
                  </p>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Focus</h4>
                  <p className="card-copy mt-0">
                    Build stakeholder-ready dashboards that combine KPI design,
                    segmentation, trend reporting, and operational visibility.
                  </p>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Stack</h4>
                  <ul className="skill-grid skill-grid-compact">
                    {dashboardsStack.map((item) => (
                      <li key={item} className="skill-pill">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="tool-group">
                  <h4 className="tool-group-title">Role</h4>
                  <p className="card-copy mt-0">
                    Data Analyst / Data Engineer, focused on KPI design, dashboard
                    architecture, interactive reporting, and translating business
                    data into practical decision-support tools.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
