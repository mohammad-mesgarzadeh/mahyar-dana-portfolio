import HeroSystemVisual from "./HeroSystemVisual"
import { ArrowIcon } from "../ArrowIcon/ArrowIcon"
import "./Hero.css"

export default function Hero() {
  return (
    <section
      id="home"
      className="hero mx-auto w-full max-w-[var(--max)] px-[var(--page-gutter)] pt-[clamp(88px,10vw,144px)] pb-[clamp(88px,10vw,144px)] max-[600.01px]:pt-[82px] max-[600.01px]:pb-[82px]"
    >
      <div className="hero-container">
        {/* LEFT: INTRODUCTION */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-indicator" />
            <span>AI &amp; BACKEND ENGINEER</span>
            <span className="hero-eyebrow-line" />
          </div>

          <h1 className="hero-title">
            Mahyar
            <span>
              Dana<span className="hero-title-dot">.</span>
            </span>
          </h1>

          <div className="hero-heading-divider">
            <span />
            <span>SOFTWARE ENGINEERING</span>
          </div>

          <p className="hero-statement">
            Engineering
            <span>Intelligent Systems.</span>
          </p>

          <p className="hero-description">
            I build production-ready backend systems and AI-powered solutions,
            connecting intelligent software with real-world infrastructure.
          </p>

          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="#projects">
              <span>Explore My Work</span>
              <ArrowIcon />
            </a>

            <a className="hero-button hero-button-secondary" href="#contact">
              <span>Get In Touch</span>
              <ArrowIcon diagonal />
            </a>
          </div>

          <div className="hero-footer">
            <div className="hero-availability">
              <span className="hero-status-indicator" />
              <span>OPEN TO NEW OPPORTUNITIES</span>
            </div>

            <div className="hero-specialties">
              <span>BACKEND</span>
              <i />
              <span>AI / ML</span>
              <i />
              <span>IoT</span>
            </div>
          </div>
        </div>

        {/* RIGHT: SYSTEM VISUAL */}
        <div className="hero-visual">
          <HeroSystemVisual />
        </div>

        {/* SCROLL INDICATOR */}
        <a
          className="hero-scroll"
          href="#about"
          aria-label="Scroll to About section"
        >
          <span>SCROLL TO EXPLORE</span>
          <span className="hero-scroll-line">
            <i />
          </span>
        </a>

        <span className="hero-background-index" aria-hidden="true">
          01
        </span>
      </div>
    </section>
  )
}
