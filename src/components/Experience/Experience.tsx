import type { CSSProperties } from "react"
import Diagram from "../Diagram/Diagram"
import SectionHeading from "../SectionHeading/SectionHeading"
import { experiences } from "../../content/portfolio"
import "./Experience.css"

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience mx-auto w-full max-w-[var(--max)] px-[var(--page-gutter)] pt-[clamp(88px,10vw,144px)] pb-[clamp(88px,10vw,144px)] max-[600.01px]:pt-[82px] max-[600.01px]:pb-[82px]"
    >
      <SectionHeading
        eyebrow="04 / Career"
        title="Experience in systems."
        subtitle="A progression through connected devices, manufacturing software, and enterprise-scale intelligent workflows."
      />

      <div className="experience-overview reveal mx-auto mb-[34px] grid w-full max-w-[var(--max)] grid-cols-[minmax(245px,.78fr)_minmax(0,1.22fr)] items-center gap-[clamp(20px,3vw,38px)] p-[clamp(18px,2.6vw,30px)] max-[950.01px]:grid-cols-[minmax(0,1fr)] max-[950.01px]:gap-5 max-[650.01px]:mb-[25px] max-[650.01px]:gap-[17px] max-[650.01px]:p-[17px] max-[360.01px]:p-[13px]">
        <div className="experience-overview-copy">
          <span className="experience-overview-label">
            CAREER DEVELOPMENT / {String(experiences.length).padStart(2, "0")}{" "}
            STAGES
          </span>

          <h3>From connected devices to intelligent systems.</h3>

          <p>
            Work across industrial IoT, manufacturing software, backend
            infrastructure, and AI-enabled workflows.
          </p>

          <div
            className="experience-path"
            aria-label="Industrial IoT to manufacturing to intelligent systems"
          >
            <span>INDUSTRIAL IOT</span>
            <i aria-hidden="true" />
            <span>MANUFACTURING</span>
            <i aria-hidden="true" />
            <span>INTELLIGENT SYSTEMS</span>
          </div>
        </div>

        <div className="experience-overview-visual">
          <div className="experience-visual-meta">
            <span>PROFESSIONAL TIMELINE</span>
            <span>FIG. 04</span>
          </div>

          <Diagram kind="timeline" className="experience-diagram" />
        </div>
      </div>

      <div
        className="experience-timeline relative mx-auto flex w-full max-w-[var(--max)] flex-col gap-[17px] max-[650.01px]:gap-[13px]"
        aria-label="Professional experience"
      >
        {experiences.map((experience, index) => (
          <article
            className="experience-item reveal"
            key={experience.company}
            style={
              {
                "--experience-index": index,
              } as CSSProperties
            }
            aria-labelledby={`experience-title-${index}`}
          >
            <div className="experience-marker">
              <span className="experience-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="experience-node" aria-hidden="true" />

              <time className="experience-date">{experience.date}</time>
            </div>

            <div className="experience-card">
              <div className="experience-card-heading">
                <div className="experience-company-block">
                  <span className="experience-company">
                    {experience.company}
                  </span>

                  <h3 id={`experience-title-${index}`}>{experience.title}</h3>
                </div>

                <span className="experience-location">
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M13 6.7c0 3.5-5 7.2-5 7.2S3 10.2 3 6.7a5 5 0 1 1 10 0Z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="8"
                      cy="6.5"
                      r="1.6"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>

                  {experience.location}
                </span>
              </div>

              <div className="experience-card-divider" />

              <div className="experience-responsibilities-heading">
                <span>KEY CONTRIBUTIONS</span>

                <span>
                  {String(experience.responsibilities.length).padStart(2, "0")}{" "}
                  ITEMS
                </span>
              </div>

              <ul className="experience-responsibilities">
                {experience.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="experience-card-accent" aria-hidden="true" />
            </div>
          </article>
        ))}
      </div>

      <div className="experience-footer reveal mx-auto w-full max-w-[var(--max)]">
        <span className="experience-footer-indicator">
          <i aria-hidden="true" />
          ENGINEERING ACROSS CONNECTED SYSTEMS
        </span>

        <span className="experience-footer-count">
          {String(experiences.length).padStart(2, "0")} CAREER STAGES
        </span>
      </div>
    </section>
  )
}
