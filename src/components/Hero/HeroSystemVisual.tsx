import "./HeroSystemVisual.css"
export default function HeroSystemVisual() {
  return (
    <div
      className="hero-system-visual"
      role="img"
      aria-label="Animated architecture dashboard showing connected edge devices, backend services, AI inference and automation."
    >
      {/* BACKGROUND */}
      <div className="hero-system-grid" aria-hidden="true" />
      <div className="hero-system-glow" aria-hidden="true" />

      {/* TOP BAR */}
      <div className="hero-system-header">
        <div className="hero-system-heading">
          <span className="hero-system-heading-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </span>

          <div>
            <strong>SYSTEM ARCHITECTURE</strong>
            <small>CONNECTED ENVIRONMENT</small>
          </div>
        </div>

        <div className="hero-system-status">
          <span />
          <span>OPERATIONAL</span>
        </div>
      </div>

      {/* VISUAL CANVAS */}
      <div className="hero-system-canvas">
        {/* ORBITAL RINGS */}
        <div className="hero-system-orbit hero-system-orbit-one" />
        <div className="hero-system-orbit hero-system-orbit-two" />
        <div className="hero-system-orbit hero-system-orbit-three" />

        {/* CONNECTIONS */}
        <svg
          className="hero-system-connections"
          viewBox="0 0 600 430"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hero-flow-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#72aaff" />
              <stop offset="50%" stopColor="#65dbe8" />
              <stop offset="100%" stopColor="#a58aff" />
            </linearGradient>
          </defs>

          <path
            className="hero-system-connection"
            d="M300 215 C230 165 190 125 125 105"
          />

          <path
            className="hero-system-connection"
            d="M300 215 C370 165 410 125 475 105"
          />

          <path
            className="hero-system-connection"
            d="M300 215 C230 265 190 305 125 325"
          />

          <path
            className="hero-system-connection"
            d="M300 215 C370 265 410 305 475 325"
          />

          <circle className="hero-system-particle" r="4">
            <animateMotion
              dur="3.6s"
              repeatCount="indefinite"
              path="M300 215 C230 165 190 125 125 105"
            />
          </circle>

          <circle className="hero-system-particle particle-two" r="4">
            <animateMotion
              dur="4s"
              begin=".8s"
              repeatCount="indefinite"
              path="M300 215 C370 165 410 125 475 105"
            />
          </circle>

          <circle className="hero-system-particle particle-three" r="4">
            <animateMotion
              dur="3.8s"
              begin="1.2s"
              repeatCount="indefinite"
              path="M300 215 C230 265 190 305 125 325"
            />
          </circle>

          <circle className="hero-system-particle particle-four" r="4">
            <animateMotion
              dur="4.3s"
              begin=".5s"
              repeatCount="indefinite"
              path="M300 215 C370 265 410 305 475 325"
            />
          </circle>
        </svg>

        {/* CENTRAL CORE */}
        <div className="hero-system-core">
          <span className="hero-system-core-aura" />

          <span className="hero-system-core-orbit" />

          <div className="hero-system-core-icon">
            <svg viewBox="0 0 48 48" fill="none">
              <path d="M24 4 41 14v20L24 44 7 34V14L24 4Z" />
              <path d="m24 13 9 5.5v11L24 35l-9-5.5v-11L24 13Z" />
              <path d="M24 4v9m17 1-8 4.5m8 15-8-4.5M24 44v-9M7 34l8-4.5M7 14l8 4.5" />
              <circle cx="24" cy="24" r="3" />
            </svg>
          </div>

          <strong>CORE</strong>
          <small>INTELLIGENCE</small>
        </div>

        {/* EDGE */}
        <div className="hero-system-node hero-system-node-edge">
          <div className="hero-system-node-top">
            <span className="hero-system-node-index">01</span>
            <span className="hero-system-node-indicator" />
          </div>

          <div className="hero-system-node-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="5" y="4" width="14" height="16" rx="2" />
              <path d="M9 8h6m-6 4h6m-6 4h3" />
              <circle cx="16" cy="17" r=".7" fill="currentColor" />
            </svg>
          </div>

          <strong>EDGE DEVICES</strong>
          <small>DEVICE INPUT</small>
        </div>

        {/* BACKEND */}
        <div className="hero-system-node hero-system-node-backend">
          <div className="hero-system-node-top">
            <span className="hero-system-node-index">02</span>
            <span className="hero-system-node-indicator" />
          </div>

          <div className="hero-system-node-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="4" y="4" width="16" height="6" rx="1.5" />
              <rect x="4" y="14" width="16" height="6" rx="1.5" />
              <path d="M8 7h.01M8 17h.01m4-10h5m-5 10h5" />
            </svg>
          </div>

          <strong>BACKEND</strong>
          <small>API / SERVICES</small>
        </div>

        {/* AI */}
        <div className="hero-system-node hero-system-node-ai">
          <div className="hero-system-node-top">
            <span className="hero-system-node-index">03</span>
            <span className="hero-system-node-indicator" />
          </div>

          <div className="hero-system-node-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" />
              <circle cx="5" cy="5" r="1.5" />
              <circle cx="19" cy="5" r="1.5" />
              <circle cx="5" cy="19" r="1.5" />
              <circle cx="19" cy="19" r="1.5" />
              <path d="m7 7 3 3m7-3-3 3m-7 7 3-3m7 3-3-3" />
            </svg>
          </div>

          <strong>AI / MACHINE LEARNING</strong>
          <small>INFERENCE / RAG</small>
        </div>

        {/* AUTOMATION */}
        <div className="hero-system-node hero-system-node-automation">
          <div className="hero-system-node-top">
            <span className="hero-system-node-index">04</span>
            <span className="hero-system-node-indicator" />
          </div>

          <div className="hero-system-node-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M4 7h6v6H4zM14 4h6v6h-6zM14 14h6v6h-6z" />
              <path d="M10 10h2v7h2m-2-7V7h2" />
            </svg>
          </div>

          <strong>AUTOMATION</strong>
          <small>WORKFLOW / CONTROL</small>
        </div>
      </div>

      {/* BOTTOM STATUS */}
      <div className="hero-system-footer">
        <div className="hero-system-footer-label">
          <span className="hero-system-footer-dot" />
          <span>CONNECTED SYSTEMS</span>
        </div>

        <div className="hero-system-footer-flow">
          <span>INPUT</span>
          <i />
          <span>PROCESS</span>
          <i />
          <span>OUTPUT</span>
        </div>
      </div>
    </div>
  )
}
