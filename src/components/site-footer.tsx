const contactItems = [
  {
    label: "Phone",
    value: "(248) 222-9261",
    href: "tel:+12482229261",
    icon: "phone",
  },
  {
    label: "Email",
    value: "ale11davi@gmail.com",
    href: "mailto:ale11davi@gmail.com",
    icon: "email",
  },
  {
    label: "GitHub",
    value: "github.com/AlexOrdonez11",
    href: "https://github.com/AlexOrdonez11",
    icon: "github",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/alex-david-ordonez",
    href: "https://www.linkedin.com/in/alex-david-ordonez",
    icon: "linkedin",
  },
];

function FooterIcon({ type }: { type: string }) {
  const commonProps = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "footer-link-icon",
    "aria-hidden": true,
  } as const;

  switch (type) {
    case "phone":
      return (
        <svg {...commonProps}>
          <path
            d="M7.1 4.8H9.5C9.9 4.8 10.2 5 10.3 5.3L11.4 8C11.5 8.3 11.5 8.6 11.2 8.9L9.9 10.2C10.7 11.7 11.9 12.9 13.5 13.8L14.8 12.5C15 12.2 15.4 12.1 15.7 12.3L18.4 13.4C18.7 13.5 18.9 13.8 18.9 14.2V16.6C18.9 17.2 18.4 17.7 17.8 17.7C10.9 17.7 5.3 12.1 5.3 5.2C5.3 4.6 5.8 4.8 7.1 4.8Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "email":
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5.5 7L12 12L18.5 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "github":
      return (
        <svg {...commonProps}>
          <path
            d="M12 4C7.6 4 4 7.6 4 12C4 15.5 6.3 18.4 9.5 19.4V17.4C7 17.9 6.5 16.3 6.5 16.3C6.1 15.3 5.5 15 5.5 15C4.7 14.5 5.6 14.5 5.6 14.5C6.4 14.6 6.8 15.3 6.8 15.3C7.5 16.5 8.8 16.2 9.5 16V14.9C7.5 14.7 5.4 13.9 5.4 10.4C5.4 9.4 5.8 8.5 6.4 7.9C6.3 7.7 6 6.7 6.5 5.4C6.5 5.4 7.4 5.1 9.5 6.5C10.3 6.3 11.1 6.2 12 6.2C12.9 6.2 13.7 6.3 14.5 6.5C16.6 5.1 17.5 5.4 17.5 5.4C18 6.7 17.7 7.7 17.6 7.9C18.2 8.5 18.6 9.4 18.6 10.4C18.6 13.9 16.5 14.7 14.5 14.9V17.4C14.5 17.8 14.5 18.7 14.5 19.4C17.7 18.4 20 15.5 20 12C20 7.6 16.4 4 12 4Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <path d="M7.5 9.5V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 12.5V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M16.5 12.5V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M7.2 7.2C7.2 7.8 7.7 8.3 8.3 8.3C8.9 8.3 9.4 7.8 9.4 7.2C9.4 6.6 8.9 6.1 8.3 6.1C7.7 6.1 7.2 6.6 7.2 7.2Z" fill="currentColor" />
          <path d="M5 20H19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
  }
}

export function SiteFooter() {
  return (
    <footer className="site-footer-wrap">
      <div className="footer-inner">
        <section className="footer-panel">
          <div className="footer-copy">
            <p className="section-kicker">Contact</p>
            <h2 className="subsection-title">Let&apos;s connect</h2>
            <p className="footer-support">
              Open to AI engineering, data, and product-building conversations.
            </p>
          </div>

          <div className="footer-links-grid">
            {contactItems.map((item) => (
              <a
                key={item.label}
                className="footer-link-card"
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={`${item.label}: ${item.value}`}
              >
                <span className="footer-link-badge">
                  <FooterIcon type={item.icon} />
                </span>
                <span className="footer-link-text">
                  <span className="footer-link-label">{item.label}</span>
                  <span className="footer-link-value">{item.value}</span>
                </span>
              </a>
            ))}
          </div>
        </section>
        <div className="footer-bottom">
          <p>Alex Ordonez</p>
          <p>AI Engineer | Data Scientist</p>
        </div>
      </div>
    </footer>
  );
}
