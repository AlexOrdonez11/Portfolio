"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Portfolio" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="site-nav" aria-label="Primary">
      <Link href="/" className="nav-brand" aria-label="Alex Ordonez home">
        <Image
          src="/images/portfolio_icon.png"
          alt=""
          width={36}
          height={36}
          className="nav-brand-icon"
          priority
        />
        <span className="nav-brand-text">Alex Ordonez</span>
      </Link>

      <div className="nav-links">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`nav-link${isActive ? " is-active" : ""}`}
            >
              <span className="nav-link-label">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
