"use client";

import Image from "next/image";
import { useState } from "react";

type MediaItem =
  | {
      type: "image";
      src: string;
      alt: string;
      label: string;
    }
  | {
      type: "video";
      embedUrl: string;
      title: string;
      label: string;
    };

export function ProjectMediaCarousel({
  title,
  items,
}: {
  title: string;
  items: MediaItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === items.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="project-media-section">
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
            <rect x="4.5" y="6" width="15" height="12" rx="2.3" stroke="currentColor" strokeWidth="1.7" />
            <path d="M10 10L14.5 12L10 14V10Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="card-title">{title}</h3>
      </div>

      <div className="project-media-shell">
        <div className="project-media-frame">
          <button
            type="button"
            className="project-media-arrow project-media-arrow-left"
            onClick={showPrevious}
            aria-label="Show previous media"
          >
            <span aria-hidden="true">&lsaquo;</span>
          </button>

          <div className="project-media-viewport">
            {activeItem.type === "image" ? (
              <div className="project-media-asset">
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  width={1400}
                  height={900}
                  sizes="(min-width: 1024px) 48vw, (min-width: 768px) 88vw, 100vw"
                  className="project-media-image"
                />
              </div>
            ) : (
              <div className="project-media-asset project-media-video-wrap">
                <iframe
                  className="project-media-video"
                  src={activeItem.embedUrl}
                  title={activeItem.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            )}
          </div>

          <button
            type="button"
            className="project-media-arrow project-media-arrow-right"
            onClick={showNext}
            aria-label="Show next media"
          >
            <span aria-hidden="true">&rsaquo;</span>
          </button>
        </div>

        <div className="project-media-meta">
          <p className="project-media-label">{activeItem.label}</p>
          <div className="project-media-dots" aria-label="Media slides">
            {items.map((item, index) => (
              <button
                key={`${item.label}-${index}`}
                type="button"
                className={`project-media-dot${index === activeIndex ? " is-active" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show media ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
