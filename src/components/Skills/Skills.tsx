import Diagram from "../Diagram/Diagram"
import SectionHeading from "../SectionHeading/SectionHeading"
import { skills } from "../../content/portfolio"
import "./Skills.css"

const visualLabels: Record<string, string> = {
  code: "CODE EXECUTION",
  api: "SERVICE ARCHITECTURE",
  neural: "NEURAL PROCESSING",
  iot: "EDGE CONNECTIVITY",
  cloud: "CLOUD INFRASTRUCTURE",
  workflow: "WORKFLOW ENGINE",
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 15L15 5M6 5H15V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills mx-auto w-full max-w-[var(--max)] px-[var(--page-gutter)] pt-[clamp(88px,10vw,144px)] pb-[clamp(88px,10vw,144px)] max-[600.01px]:pt-[82px] max-[600.01px]:pb-[82px]"
    >
      <SectionHeading
        eyebrow="02 / Capabilities"
        title="Technical expertise"
        subtitle="Technologies and tools I use to design, build, and operate intelligent software systems."
      />

      <div className="skills-content mx-auto w-full max-w-[var(--max)]">
        <div className="skills-overview">
          <span className="skills-overview-label">ENGINEERING DOMAINS</span>

          <span className="skills-overview-count">
            <strong>{String(skills.length).padStart(2, "0")}</strong>
            SPECIALIZATIONS
          </span>
        </div>

        <div className="skills-grid grid w-full grid-cols-[repeat(3,minmax(0,1fr))] gap-[17px] max-[1024.01px]:grid-cols-[repeat(2,minmax(0,1fr))] max-[1024.01px]:gap-[14px] max-[600.01px]:grid-cols-[minmax(0,1fr)] max-[600.01px]:gap-[13px]">
          {skills.map((skill, index) => (
            <article
              className={`skill-card skill-card--${skill.visual} reveal`}
              key={skill.title}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              {/* Card header */}
              <div className="skill-card-header">
                <span className="skill-number">{skill.number}</span>

                <span className="skill-category">
                  ENGINEERING / {skill.number}
                </span>

                <span className="skill-arrow" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </div>

              {/* Technical visualization */}
              <div className="skill-visual">
                <div className="skill-visual-header">
                  <span className="skill-visual-indicator">
                    <i />
                    LIVE SYSTEM MODEL
                  </span>

                  <span className="skill-visual-type">
                    {visualLabels[skill.visual] ?? skill.visual.toUpperCase()}
                  </span>
                </div>

                <div className="skill-visual-content">
                  <Diagram kind={skill.visual} className="skill-diagram" />
                </div>

                <div className="skill-visual-footer">
                  <span>TECHNICAL OVERVIEW</span>
                  <span>MODEL / 0{index + 1}</span>
                </div>
              </div>

              {/* Card information */}
              <div className="skill-card-content">
                <div className="skill-title-row">
                  <h3>{skill.title}</h3>
                  <span className="skill-item-count">
                    {String(skill.items.length).padStart(2, "0")}
                  </span>
                </div>

                <p className="skill-summary">{skill.summary}</p>

                <div className="skill-tags-wrapper">
                  <span className="skill-tags-label">TECHNOLOGY STACK</span>

                  <ul
                    className="skill-tags"
                    aria-label={`${skill.title} technologies`}
                  >
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="skill-card-accent" aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="skills-footer">
          <span>
            <i />
            CONTINUOUSLY LEARNING & BUILDING
          </span>

          <span>
            {skills.reduce((total, skill) => total + skill.items.length, 0)}{" "}
            TECHNOLOGIES & TOOLS
          </span>
        </div>
      </div>
    </section>
  )
}
