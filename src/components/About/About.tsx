import Diagram from "../Diagram/Diagram"
import RollingNumber from "./RollingNumber"
import SectionHeading from "../SectionHeading/SectionHeading"
import "./About.css"

const statistics = [
  {
    value: "6+",
    label: "Years Experience",
    index: "01",
  },
  {
    value: "17",
    label: "Public Projects",
    index: "02",
  },
  {
    value: "3",
    label: "Primary Languages",
    index: "03",
  },
]

const focusAreas = [
  "AI & Machine Learning",
  "Backend Engineering",
  "Industrial IoT",
  "Automation",
  "Connected Systems",
]

export default function About() {
  return (
    <section
      id="about"
      className="about mx-auto w-full max-w-[var(--max)] px-[var(--page-gutter)] pt-[clamp(88px,10vw,144px)] pb-[clamp(88px,10vw,144px)] max-[600.01px]:pt-[82px] max-[600.01px]:pb-[82px]"
    >
      <SectionHeading eyebrow="01 / Profile" title="Engineering, connected." />

      <div className="about-layout reveal profile-layout grid grid-cols-[minmax(0,.95fr)_minmax(0,1.05fr)] items-stretch gap-[clamp(32px,5vw,76px)] max-[900.01px]:grid-cols-[minmax(0,1fr)] max-[900.01px]:gap-[30px]">
        {/* PROFILE INTRO */}
        <div className="about-intro profile-intro">
          <div className="about-overline">
            <span className="about-overline-dot" />
            <span>ENGINEERING PROFILE</span>
            <span className="about-overline-index">PROFILE / 001</span>
          </div>

          <h3 className="about-lead">
            Building at the intersection of{" "}
            <strong>intelligent software</strong> and{" "}
            <strong>real-world infrastructure.</strong>
          </h3>

          {/* ECOSYSTEM VISUAL */}
          <div className="about-diagram profile-diagram">
            <div className="about-diagram-header">
              <div>
                <span className="about-diagram-label">SYSTEM ECOSYSTEM</span>
                <span className="about-diagram-subtitle">
                  CONNECTED TECHNOLOGY LAYERS
                </span>
              </div>

              <span className="about-diagram-status">
                <i />
                LIVE MODEL
              </span>
            </div>

            <div className="about-diagram-visual">
              <Diagram kind="ecosystem" />
            </div>

            <div className="about-diagram-footer">
              <span>01 — 05</span>
              <p>
                EDGE <i /> CLOUD <i /> BACKEND <i /> AI <i /> AUTOMATION
              </p>
              <span className="about-diagram-indicator">ACTIVE</span>
            </div>
          </div>
        </div>

        {/* PROFILE DESCRIPTION */}
        <div className="about-body profile-copy">
          <div className="about-copy-header">
            <div>
              <span className="about-copy-eyebrow">ABOUT THE ENGINEER</span>
              <h3>From concept to implementation.</h3>
            </div>

            <span className="about-copy-number">01</span>
          </div>

          <div className="about-copy-content">
            <p>
              I&apos;m a software engineer with 6+ years of experience across
              AI-enabled systems, backend development, industrial IoT, and
              automation. My expertise spans building production-oriented
              backend services, integrating edge devices with cloud workflows,
              developing automation pipelines, and applying machine learning to
              real-world operational problems.
            </p>

            <p>
              I&apos;m passionate about solving complex engineering challenges
              through practical implementations of modern technologies, from
              local LLM deployment to FPGA communication interfaces.
            </p>
          </div>

          {/* TECHNICAL FOCUS */}
          <div className="about-focus">
            <span className="about-focus-title">AREAS OF FOCUS</span>

            <div className="about-focus-tags">
              {focusAreas.map((area, index) => (
                <span
                  key={area}
                  style={{ "--tag-index": index } as React.CSSProperties}
                >
                  <i />
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="about-copy-footer">
            <span>SOFTWARE / SYSTEMS / INTELLIGENCE</span>
            <span className="about-copy-footer-line" />
            <span>01. PROFILE</span>
          </div>
        </div>
      </div>

      {/* STATISTICS */}
      <div
        className="stats reveal profile-stats mt-[clamp(50px,7vw,88px)] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[14px] max-[900.01px]:mt-[42px] max-[600.01px]:mt-[36px] max-[600.01px]:gap-[9px] max-[390.01px]:gap-[6px] max-[360.01px]:grid-cols-[1fr]"
        aria-label="Key statistics"
      >
        {statistics.map((stat, index) => (
          <article className="stat" key={stat.label}>
            <div className="stat-topline">
              <span className="stat-category">KEY METRIC</span>
              <span className="stat-index">{stat.index}</span>
            </div>

            <div className="stat-value-wrapper">
              <strong className="stat-value">
                <RollingNumber value={stat.value} delay={index * 160} />
              </strong>

              <span className="stat-accent" />
            </div>

            <p>{stat.label}</p>

            <div className="stat-bottom-line" />
          </article>
        ))}
      </div>
    </section>
  )
}
