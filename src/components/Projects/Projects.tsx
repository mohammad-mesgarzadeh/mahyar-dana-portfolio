import type { CSSProperties } from "react"
import Diagram from "../Diagram/Diagram"
import SectionHeading from "../SectionHeading/SectionHeading"
import { ArrowIcon } from "../ArrowIcon/ArrowIcon"
import { projects } from "../../content/portfolio"
import "./Projects.css"

const projectLanguages = ["C#", "C#", "C#", "Python", "C#", "C++"] as const

export default function Projects() {
  const technologyCount = projects.reduce(
    (total, project) => total + project.tags.length,
    0,
  )

  return (
    <section
      id="projects"
      className="projects mx-auto w-full max-w-[var(--max)] px-[var(--page-gutter)] pt-[clamp(88px,10vw,144px)] pb-[clamp(88px,10vw,144px)] max-[600.01px]:pt-[82px] max-[600.01px]:pb-[82px]"
    >
      <SectionHeading
        eyebrow="03 / Selected Work"
        title="Built to solve."
        subtitle="A selection of engineering projects, open-source contributions, and technical implementations."
      />

      <div className="projects-overview reveal mx-auto w-full max-w-[var(--max)]">
        <span className="projects-overview-label">ENGINEERING PORTFOLIO</span>

        <div className="projects-overview-stats">
          <span>
            <strong>{String(projects.length).padStart(2, "0")}</strong>
            PROJECTS
          </span>

          <span>
            <strong>{String(technologyCount).padStart(2, "0")}</strong>
            TECHNOLOGY TAGS
          </span>

          <span className="projects-open-source">
            <i />
            OPEN SOURCE WORK
          </span>
        </div>
      </div>

      <div className="projects-grid mx-auto grid w-full max-w-[var(--max)] grid-cols-[repeat(2,minmax(0,1fr))] items-stretch gap-[17px] max-[900.01px]:gap-[14px] max-[600.01px]:grid-cols-[minmax(0,1fr)] max-[600.01px]:gap-[13px]">
        {projects.map((project, index) => (
          <article
            className={`project-card project-${project.type} reveal${
              index === 0 ? " project-card--featured" : ""
            }`}
            key={project.name}
            style={
              {
                "--project-index": index,
              } as CSSProperties
            }
            aria-labelledby={`project-title-${project.number}`}
          >
            <div className="project-art">
              <div className="project-art-meta">
                <span className="project-art-index">
                  {project.number}
                  <i />
                  06
                </span>

                <span className="project-art-role">{project.role}</span>
              </div>

              <div className="project-art-viewport">
                <Diagram kind={project.type} className="project-diagram" />
              </div>

              <div className="project-art-footer">
                <span>TECHNICAL VISUALIZATION</span>
                <span>FIG. 0{index + 1}</span>
              </div>
            </div>

            <div className="project-content">
              <div className="project-content-topline">
                <span className="project-repository-label">
                  <i />
                  PUBLIC REPOSITORY
                </span>

                <span className="project-language">
                  <i />
                  {projectLanguages[index] ?? "Software"}
                </span>
              </div>

              <div className="project-title-row">
                <h3 id={`project-title-${project.number}`}>{project.name}</h3>

                <span className="project-card-number">/{project.number}</span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tags-block">
                <span className="project-tags-label">CORE TECHNOLOGIES</span>

                <ul
                  className="project-tags"
                  aria-label={`${project.name} technologies`}
                >
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>

              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} repository on GitHub`}
              >
                <span>Explore repository</span>

                <span className="project-link-icon">
                  <ArrowIcon diagonal />
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-cta reveal mx-auto w-full max-w-[var(--max)]">
        <div className="projects-cta-copy">
          <span className="projects-cta-eyebrow">BEYOND THE FEATURED WORK</span>

          <p>More experiments, tools, and open-source work.</p>
        </div>

        <a
          className="projects-github-link"
          href="https://github.com/Mahyardana"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Explore all repositories</span>
          <ArrowIcon diagonal />
        </a>
      </div>
    </section>
  )
}
