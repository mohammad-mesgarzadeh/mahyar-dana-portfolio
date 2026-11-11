import Diagram from "../Diagram/Diagram"
import { ArrowIcon } from "../ArrowIcon/ArrowIcon"
import "./Contact.css"

const contactLinks = [
  {
    label: "EMAIL",
    value: "dana.mahyar76@gmail.com",
    href: "mailto:dana.mahyar76@gmail.com",
    external: false,
  },
  {
    label: "LINKEDIN",
    value: "Professional profile",
    href: "https://linkedin.com/in/mahyardana",
    external: true,
  },
  {
    label: "GITHUB",
    value: "Open-source projects",
    href: "https://github.com/Mahyardana",
    external: true,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact mx-auto w-full max-w-[var(--max)] px-[var(--page-gutter)] pt-[clamp(88px,10vw,144px)] pb-[clamp(88px,10vw,144px)] max-[600.01px]:pt-[82px] max-[600.01px]:pb-[82px]"
      aria-labelledby="contact-title"
    >
      <div className="contact-frame reveal relative mx-auto grid w-full max-w-[var(--max)] min-w-0 grid-cols-[minmax(0,1.08fr)_minmax(320px,.92fr)] items-center gap-[clamp(30px,5vw,68px)] overflow-hidden rounded-[20px] p-[clamp(28px,5.4vw,72px)] [isolation:isolate] max-[950.01px]:grid-cols-[minmax(0,1fr)] max-[950.01px]:gap-[30px] max-[950.01px]:p-[clamp(25px,5vw,48px)] max-[600.01px]:gap-6 max-[600.01px]:rounded-[15px] max-[600.01px]:pt-[25px] max-[600.01px]:pr-[19px] max-[600.01px]:pb-[19px] max-[600.01px]:pl-[19px] max-[360.01px]:pt-[22px] max-[360.01px]:pr-[15px] max-[360.01px]:pb-4 max-[360.01px]:pl-[15px]">
        <div className="contact-copy">
          <div className="contact-heading-meta">
            <p className="contact-eyebrow">
              <i aria-hidden="true" />
              <span>Open to new conversations</span>
            </p>

            <span className="contact-section-index">
              05 / LET&apos;S CONNECT
            </span>
          </div>

          <h2 id="contact-title">
            Let&apos;s build something <em>meaningful.</em>
          </h2>

          <p className="contact-description">
            Have an idea, a technical challenge, or an opportunity in AI,
            backend development, or IoT? Let&apos;s talk about what we can build
            together.
          </p>

          <div className="contact-actions">
            <a
              className="contact-primary-action inline-flex min-h-[49px] items-center justify-center gap-[17px] border border-[var(--accent)] bg-[var(--accent)] px-[18px] font-medium font-[family-name:var(--mono)] text-[9px] leading-[normal] uppercase tracking-[.08em] text-white hover:border-[var(--accent-strong)] hover:bg-[var(--accent-strong)] max-[600.01px]:text-[8px]"
              href="mailto:dana.mahyar76@gmail.com"
            >
              <span>Start a conversation</span>
              <ArrowIcon />
            </a>

            <span className="contact-response-note">
              DIRECT EMAIL <i aria-hidden="true" /> NO CONTACT FORM
            </span>
          </div>

          <div className="contact-links" aria-label="Contact channels">
            {contactLinks.map((link, index) => (
              <a
                className="contact-channel"
                href={link.href}
                key={link.label}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={`${link.label}: ${link.value}`}
              >
                <span className="contact-channel-index">0{index + 1}</span>

                <span className="contact-channel-copy">
                  <span className="contact-channel-label">{link.label}</span>

                  <strong>{link.value}</strong>
                </span>

                <span className="contact-channel-arrow">
                  <ArrowIcon diagonal />
                </span>
              </a>
            ))}
          </div>
        </div>

        <aside
          className="contact-visual"
          aria-label="Connected contact channels"
        >
          <div className="contact-visual-topline">
            <span className="contact-visual-status">
              <i aria-hidden="true" />
              COMMUNICATION NETWORK
            </span>

            <span>FIG. 05</span>
          </div>

          <div className="contact-visual-stage">
            <div
              className="contact-orbit contact-orbit-one"
              aria-hidden="true"
            />

            <div
              className="contact-orbit contact-orbit-two"
              aria-hidden="true"
            />

            <div className="contact-visual-glow" aria-hidden="true" />

            <Diagram kind="contact" className="contact-diagram" />
          </div>

          <div className="contact-visual-bottomline">
            <span>ONE POINT OF CONTACT</span>
            <span>3 CONNECTED CHANNELS</span>
          </div>

          <div className="contact-visual-caption">
            <span className="contact-caption-mark">MD</span>

            <p>
              Ideas start with a conversation.
              <span>Let&apos;s connect the next piece.</span>
            </p>
          </div>
        </aside>

        <div className="contact-frame-corner" aria-hidden="true" />
      </div>
    </section>
  )
}
