import BrandLogo from "../BrandLogo/BrandLogo"
import { ArrowIcon } from "../ArrowIcon/ArrowIcon"
import { navItems } from "../../content/portfolio"
import "./Footer.css"

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Mahyardana",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mahyardana",
  },
]

export default function Footer() {
  return (
    <footer className="site-footer reveal">
      <div className="footer-inner">
        <div className="footer-top grid grid-cols-[minmax(0,1fr)_minmax(380px,.9fr)] gap-[clamp(35px,7vw,100px)] py-[clamp(34px,5vw,60px)] pb-[38px] max-[900.01px]:grid-cols-[minmax(0,1fr)] max-[900.01px]:gap-[34px] max-[600.01px]:gap-[30px] max-[600.01px]:pt-[28px] max-[600.01px]:pb-[25px]">
          <div className="footer-brand-block">
            <a
              className="footer-brand"
              href="#home"
              aria-label="Mahyar Dana, home"
            >
              <BrandLogo footer />
              <span className="footer-brand-copy">
                <strong>Mahyar Dana</strong>
                <small>AI &amp; Backend Engineer</small>
              </span>
            </a>

            <p className="footer-statement">
              Engineering <em>intelligent systems</em> for real-world
              challenges.
            </p>

            <a className="footer-back-top" href="#home">
              <span>Back to top</span>
              <span className="footer-back-top-icon">
                <ArrowIcon diagonal />
              </span>
            </a>
          </div>

          <div className="footer-navigation-group">
            <div className="footer-column">
              <span className="footer-column-label">EXPLORE</span>

              <nav className="footer-nav" aria-label="Footer navigation">
                {navItems.map((item, index) => (
                  <a key={item} href={`#${item}`}>
                    <span className="footer-nav-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>

                    <ArrowIcon diagonal />
                  </a>
                ))}
              </nav>
            </div>

            <div className="footer-column footer-social-column">
              <span className="footer-column-label">ELSEWHERE</span>

              <div className="footer-socials">
                {socialLinks.map((link, index) => (
                  <a
                    href={link.href}
                    key={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="footer-social-index">0{index + 1}</span>

                    <span>{link.label}</span>

                    <ArrowIcon diagonal />
                  </a>
                ))}
              </div>

              <div className="footer-availability">
                <i aria-hidden="true" />
                <span>OPEN TO NEW CONVERSATIONS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom flex min-h-[51px] items-center justify-between gap-[17px] pt-[13px] font-[family-name:var(--mono)] text-[7px] leading-[normal] uppercase tracking-[.065em] max-[600.01px]:grid max-[600.01px]:grid-cols-[minmax(0,1fr)_auto] max-[600.01px]:gap-[10px] max-[600.01px]:pt-[14px] max-[600.01px]:text-[6.5px] max-[600.01px]:leading-[1.6] max-[380.01px]:grid-cols-[minmax(0,1fr)]">
          <span>© 2026 Mahyar Dana. All rights reserved.</span>

          <span className="footer-location max-[380.01px]:col-start-1">
            <i aria-hidden="true" />
            Istanbul, Turkey
          </span>

          <span className="footer-credit text-right max-[600.01px]:col-span-full max-[600.01px]:text-left">
            DESIGNED &amp; ENGINEERED WITH PURPOSE
          </span>
        </div>
      </div>
    </footer>
  )
}
