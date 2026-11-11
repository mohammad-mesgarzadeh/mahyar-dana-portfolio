
import { createPortal } from "react-dom"
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react"

import { navItems } from "../../content/portfolio"
import BrandLogo from "../BrandLogo/BrandLogo"
import { ArrowIcon } from "../ArrowIcon/ArrowIcon"
import ThemeToggle, { type Theme } from "../ThemeToggle/ThemeToggle"

import "./Navigation.css"

type ArrowIconProps = {
  diagonal?: boolean
  className?: string
}

export function ArrowIcon({
  diagonal = false,
  className = "",
}: ArrowIconProps) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {diagonal ? (
        <path d="M5 15L15 5M7 5H15V13" />
      ) : (
        <path d="M3 10H17M12 5L17 10L12 15" />
      )}
    </svg>
  )
}

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "dark"

    return document.documentElement.dataset.theme === "light" ? "light" : "dark"
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#090d18" : "#f7f8fa")

    try {
      localStorage.setItem("mahyar-theme", theme)
    } catch {
      // Theme selection still works when storage is unavailable.
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"))
  }

  return [theme, toggleTheme] as const
}

export default function Navigation() {
  const [theme, toggleTheme] = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const mobileDialogRef = useRef<HTMLDivElement>(null)

  /* Active section + reveal observer */
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]"),
    )
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    )

    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.42
      const current = [...sections]
        .reverse()
        .find((section) => section.getBoundingClientRect().top <= activationLine)

      if (current) setActiveSection(current.id)
    }

    if (typeof IntersectionObserver === "undefined") {
      revealElements.forEach((element) => element.classList.add("visible"))
      updateActiveSection()
      window.addEventListener("scroll", updateActiveSection, { passive: true })
      window.addEventListener("resize", updateActiveSection)

      return () => {
        window.removeEventListener("scroll", updateActiveSection)
        window.removeEventListener("resize", updateActiveSection)
      }
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection((entry.target as HTMLElement).id)
        })
      },
      { rootMargin: "-35% 0px -55%" },
    )

    sections.forEach((section) => sectionObserver.observe(section))

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    )

    revealElements.forEach((element) => revealObserver.observe(element))

    return () => {
      sectionObserver.disconnect()
      revealObserver.disconnect()
    }
  }, [])

  /* Header scroll state */
  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12)

    updateScrollState()
    window.addEventListener("scroll", updateScrollState, { passive: true })

    return () => window.removeEventListener("scroll", updateScrollState)
  }, [])

  /* Mobile menu scroll lock + keyboard management */
  useEffect(() => {
    if (!menuOpen || typeof window === "undefined") return

    const mobileQuery = window.matchMedia("(max-width: 900px)")
    if (!mobileQuery.matches) return

    const html = document.documentElement
    const body = document.body

    const previousStyles = {
      htmlOverflow: html.style.overflow,
      htmlOverscroll: html.style.overscrollBehavior,
      bodyOverflow: body.style.overflow,
      bodyOverscroll: body.style.overscrollBehavior,
    }

    html.style.overflow = "hidden"
    html.style.overscrollBehavior = "none"
    body.style.overflow = "hidden"
    body.style.overscrollBehavior = "none"

    html.classList.add("navigation-lock")
    body.classList.add("navigation-lock")

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        menuButtonRef.current?.focus()
        setMenuOpen(false)
        return
      }

      if (event.key !== "Tab") return

      const dialog = mobileDialogRef.current
      if (!dialog) return

      const focusableElements = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.getClientRects().length > 0)

      if (focusableElements.length === 0) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    const preventBackgroundTouch = (event: TouchEvent) => {
      const target = event.target
      if (target instanceof Node && mobileDialogRef.current?.contains(target)) return
      event.preventDefault()
    }

    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (!event.matches) setMenuOpen(false)
    }

    document.addEventListener("keydown", closeOnEscape)
    document.addEventListener("touchmove", preventBackgroundTouch, { passive: false })
    mobileQuery.addEventListener("change", closeOnDesktop)

    closeButtonRef.current?.focus()

    return () => {
      document.removeEventListener("keydown", closeOnEscape)
      document.removeEventListener("touchmove", preventBackgroundTouch)
      mobileQuery.removeEventListener("change", closeOnDesktop)

      html.classList.remove("navigation-lock")
      body.classList.remove("navigation-lock")

      html.style.overflow = previousStyles.htmlOverflow
      html.style.overscrollBehavior = previousStyles.htmlOverscroll
      body.style.overflow = previousStyles.bodyOverflow
      body.style.overscrollBehavior = previousStyles.bodyOverscroll
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const closeMenuAndRestoreFocus = () => {
    menuButtonRef.current?.focus()
    setMenuOpen(false)
  }

  return (
    <>
      <a
        className="fixed left-3 top-3 z-[10000] -translate-y-[160%] rounded-lg bg-[var(--nav-accent)] px-4 py-3 text-sm font-medium text-[var(--nav-menu-surface)] transition-transform focus:translate-y-0 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[var(--nav-text)]"
        href="#main"
      >
        Skip to content
      </a>

      <header
        className={`navigation-header sticky top-0 z-[1000] w-full border-b text-[var(--nav-text)] backdrop-blur-[22px] backdrop-saturate-150 transition-[background,border-color,box-shadow] duration-300 ${isScrolled
          ? "border-[var(--nav-border-strong)] bg-[var(--nav-surface)] shadow-[var(--nav-shadow-scrolled)]"
          : "border-[var(--nav-border)] bg-[var(--nav-surface)] shadow-[var(--nav-shadow)]"
          }`}
      >
        <div
          className={`mx-auto flex min-h-[78px] w-full max-w-[1600px] items-center justify-between gap-[clamp(14px,2.5vw,38px)] px-[var(--page-gutter,5vw)] transition-[min-height] duration-300 max-[900px]:min-h-[72px] max-[600px]:px-[clamp(16px,5vw,25px)] ${isScrolled ? "min-h-[70px] max-[900px]:min-h-[68px]" : ""
            }`}
        >
          <a
            className="group inline-flex min-w-0 shrink-0 items-center gap-3 text-[var(--nav-text)] no-underline"
            href="#home"
            onClick={closeMenu}
            aria-label="Mahyar Dana, home"
          >
            <span className="relative grid h-[43px] w-[43px] shrink-0 place-items-center overflow-hidden rounded-xl border border-[var(--nav-border-strong)] bg-[color-mix(in_srgb,var(--nav-accent)_8%,transparent)] transition duration-300 group-hover:-translate-y-0.5 group-hover:-rotate-3 group-hover:border-[var(--nav-accent)] max-[600px]:h-[39px] max-[600px]:w-[39px]">
              <BrandLogo />
              <span className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,.1),transparent_65%)]" />
            </span>
            <span className="grid min-w-0 gap-1 font-[var(--display)] text-[15px] font-semibold leading-tight tracking-[-.035em]">
              Mahyar Dana
              <small className="font-[var(--mono)] text-[7px] font-normal tracking-[.12em] text-[var(--nav-muted)] max-[380px]:text-[5.5px] max-[380px]:tracking-[.07em]">
                AI &amp; BACKEND ENGINEER
              </small>
            </span>
          </a>

          <nav
            className="flex min-w-0 flex-1 items-center justify-center max-[900px]:hidden"
            aria-label="Primary navigation"
          >
            <div className="flex items-center justify-center gap-[3px] rounded-full border border-[var(--nav-border)] bg-[color-mix(in_srgb,var(--nav-text)_3%,transparent)] p-[5px] shadow-[inset_0_1px_0_rgba(255,255,255,.035)]">
              {navItems.map((item, index) => {
                const active = activeSection === item
                return (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`inline-flex min-h-[38px] items-center justify-center gap-[7px] whitespace-nowrap rounded-full border px-[clamp(10px,1.25vw,17px)] font-[var(--mono)] text-[9px] tracking-[.035em] capitalize no-underline transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--nav-accent)] max-[1100px]:gap-[5px] max-[1100px]:px-[10px] ${active
                      ? "border-[var(--nav-border)] bg-[color-mix(in_srgb,var(--nav-accent)_12%,var(--nav-menu-surface))] text-[var(--nav-text)] shadow-[0_3px_12px_rgba(0,0,0,.06)]"
                      : "border-transparent text-[var(--nav-muted)] hover:bg-white/5 hover:text-[var(--nav-text)]"
                      }`}
                    aria-current={active ? "location" : undefined}
                  >
                    <span
                      className={`text-[7px] tabular-nums transition-colors max-[1100px]:hidden ${active ? "text-[var(--nav-accent)] opacity-100" : "text-[var(--nav-muted)] opacity-50"
                        }`}
                    >
                      0{index + 1}
                    </span>
                    {item}
                  </a>
                )
              })}
            </div>
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-3 max-[1100px]:gap-2 max-[900px]:gap-2 max-[380px]:gap-[3px]">
            <div className="navigation-theme-control flex shrink-0 items-center justify-center">
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>

            <a
              className="inline-flex min-h-[42px] items-center justify-center gap-[13px] whitespace-nowrap rounded-full border border-[rgba(107,184,255,.4)] bg-[linear-gradient(120deg,#397fc9,#586ac0)] px-[17px] font-[var(--mono)] text-[9px] tracking-[.08em] text-white no-underline shadow-[0_6px_20px_rgba(58,117,198,.18),inset_0_1px_0_rgba(255,255,255,.2)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_28px_rgba(58,117,198,.28)] max-[900px]:hidden"
              href="#contact"
            >
              <span>Let's Talk</span>
              <ArrowIcon diagonal />
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className={`hidden h-[46px] w-[46px] shrink-0 flex-col items-center justify-center gap-[6px] rounded-[13px] border border-[var(--nav-border-strong)] bg-white/[.025] p-0 text-[var(--nav-text)] transition duration-200 hover:border-[var(--nav-accent)] hover:bg-[color-mix(in_srgb,var(--nav-accent)_10%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--nav-accent)] max-[900px]:flex max-[600px]:h-[43px] max-[600px]:w-[43px] ${menuOpen ? "is-open" : ""
              }`}
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-haspopup="dialog"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            <span className={`h-[1.5px] w-[19px] rounded-full bg-current transition duration-300 ${menuOpen ? "translate-y-[3.75px] rotate-45" : ""}`} />
            <span className={`h-[1.5px] w-[19px] rounded-full bg-current transition duration-300 ${menuOpen ? "-translate-y-[3.75px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {menuOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="navigation-mobile-layer fixed inset-0 z-[2000] flex h-[100dvh] w-full overflow-hidden bg-[var(--nav-menu-surface)] text-[var(--nav-text)]"
            onClick={closeMenuAndRestoreFocus}
            role="presentation"
          >
            <div
              ref={mobileDialogRef}
              className="navigation-mobile-dialog relative flex h-full min-h-0 w-full flex-col overflow-x-hidden overflow-y-auto overscroll-contain px-[clamp(22px,6vw,42px)] pb-[max(25px,env(safe-area-inset-bottom))] pt-[max(26px,env(safe-area-inset-top))] [background:radial-gradient(ellipse_at_90%_5%,rgba(83,132,213,.13),transparent_42%),radial-gradient(ellipse_at_5%_75%,rgba(145,112,234,.08),transparent_38%),var(--nav-menu-surface)] [-webkit-overflow-scrolling:touch]"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex min-h-[58px] items-center justify-between gap-4 border-b border-[var(--nav-border)] pb-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-[42px] w-[42px] shrink-0 place-items-center overflow-hidden rounded-[11px] border border-[var(--nav-border-strong)] bg-[rgba(108,165,239,.1)]">
                    <BrandLogo />
                  </span>
                  <span className="grid gap-[5px]">
                    <strong className="font-[var(--mono)] text-[10px] font-bold tracking-[.13em]">MAHYAR DANA</strong>
                    <small className="font-[var(--mono)] text-[7px] tracking-[.1em] text-[var(--nav-muted)]">ENGINEERING PORTFOLIO</small>
                  </span>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  className="relative grid h-11 w-11 shrink-0 place-items-center rounded-[13px] border border-[var(--nav-border-strong)] bg-white/[.025] text-[var(--nav-text)] transition duration-200 hover:rotate-90 hover:border-[var(--nav-accent)] hover:bg-[rgba(108,165,239,.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--nav-accent)]"
                  onClick={closeMenuAndRestoreFocus}
                  aria-label="Close navigation"
                >
                  <span className="absolute h-[1.5px] w-[17px] rotate-45 rounded-sm bg-current" />
                  <span className="absolute h-[1.5px] w-[17px] -rotate-45 rounded-sm bg-current" />
                </button>
              </div>

              <div className="mb-6 mt-[clamp(34px,7vh,62px)]">
                <span className="font-[var(--mono)] text-[9px] tracking-[.17em] text-[var(--nav-accent)]">EXPLORE THE PORTFOLIO</span>
                <p className="mt-2 font-[var(--display)] text-[clamp(26px,7vw,38px)] leading-tight tracking-[-.045em]">Navigate through my work.</p>
              </div>

              <nav
                id="mobile-navigation"
                className="flex w-full flex-col border-t border-[var(--nav-border)]"
                aria-label="Mobile navigation links"
              >
                {navItems.map((item, index) => {
                  const active = activeSection === item
                  return (
                    <a
                      key={item}
                      href={`#${item}`}
                      onClick={closeMenu}
                      className={`navigation-mobile-link group grid min-h-[76px] w-full min-w-0 grid-cols-[48px_minmax(0,1fr)_42px] items-center gap-3 border-b border-[var(--nav-border)] py-3 text-[var(--nav-text)] no-underline transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--nav-accent)] ${active ? "is-active text-[var(--nav-accent)]" : ""
                        }`}
                      style={{ "--menu-index": index } as CSSProperties}
                      aria-current={active ? "location" : undefined}
                    >
                      <span className="font-[var(--mono)] text-[10px] tabular-nums text-[var(--nav-accent)] opacity-70">0{index + 1}</span>
                      <span className="min-w-0 break-words font-[var(--display)] text-[clamp(24px,6vw,32px)] font-medium leading-tight tracking-[-.035em] transition duration-300 group-hover:translate-x-[7px] group-hover:text-[var(--nav-accent)]">{item}</span>
                      <span className="grid h-[37px] w-[37px] place-items-center justify-self-end rounded-full border border-[var(--nav-border)] text-[var(--nav-muted)] transition duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:border-[var(--nav-accent)] group-hover:bg-[rgba(108,184,255,.09)] group-hover:text-[var(--nav-accent)]">
                        <ArrowIcon diagonal />
                      </span>
                    </a>
                  )
                })}
              </nav>

              <div className="mt-auto pt-9">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="navigation-theme-control navigation-mobile-theme flex items-center">
                    <ThemeToggle theme={theme} onToggle={toggleTheme} />
                  </div>

                  <a
                    className="inline-flex min-h-[46px] items-center justify-center gap-[14px] rounded-full border border-[rgba(107,184,255,.4)] bg-[linear-gradient(120deg,#397fc9,#586ac0)] px-5 font-[var(--mono)] text-[9px] tracking-[.08em] text-white no-underline transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(58,117,198,.28)]"
                    href="#contact"
                    onClick={closeMenu}
                  >
                    Let's Talk
                    <ArrowIcon diagonal />
                  </a>
                </div>

                <div className="mt-[27px] flex items-center justify-between gap-3 border-t border-[var(--nav-border)] pt-4 font-[var(--mono)] text-[7px] tracking-[.08em] text-[var(--nav-muted)] max-[380px]:text-[6px]">
                  <span>AI / BACKEND / CONNECTED SYSTEMS</span>
                  <span>© 2026 MAHYAR DANA</span>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}
