import { useId } from "react"
import "./Diagram.css"

export type DiagramKind = "pipeline" | "code" | "api" | "neural" | "iot" | "cloud" | "workflow" | "dns" | "tunnel" | "controller" | "dtqn" | "adapters" | "engine" | "ecosystem" | "timeline" | "contact"

const descriptions: Record<DiagramKind, string> = {
  pipeline:
    "Intelligent system pipeline: data, backend, AI, knowledge and outputs",
  code: "Code structure, compiler stages and execution path",
  api: "API gateway routing requests to backend services and storage",
  neural: "Layered neural network with attention connections",
  iot: "Industrial devices connected to an edge controller",
  cloud: "CI/CD deployment path to containerized services",
  workflow: "Automated workflow with a trigger, condition and outcomes",
  dns: "DNS client, encrypted HTTPS relay and resolver request-response path",
  tunnel: "SOCKS5 proxy connected to a remote endpoint through TLS",
  controller: "Industrial controller, relay modules and connected devices",
  dtqn: "Transformer processing layers and Q-value outputs",
  adapters: "API abstraction layer normalized across exchange adapters",
  engine: "Game engine rendering pipeline and wireframe environment",
  ecosystem: "Edge devices, cloud infrastructure, backend, AI and automation",
  timeline:
    "Engineering experience across industrial devices, production systems and AI",
  contact: "Professional links connected to a central contact endpoint",
}

type DiagramProps = {
  kind: DiagramKind
  className?: string
}

type Point = [number, number]

type PacketProps = {
  path: string
  duration?: string
  delay?: string
  className?: string
}

function Packet({
  path,
  duration = "2.8s",
  delay = "0s",
  className = "",
}: PacketProps) {
  return (
    <circle r="3.6" className={`diagram-packet ${className}`.trim()}>
      <animateMotion
        dur={duration}
        begin={delay}
        repeatCount="indefinite"
        path={path}
      />
    </circle>
  )
}

interface NodeGlyphProps {
  index: number
  x: number
  y: number
}

function NodeGlyph({ index, x, y }: NodeGlyphProps) {
  const paths = [
    `M${x - 12} ${y - 7}h7v14h-7z M${x - 1} ${y - 7}h7v14h-7z M${x + 10} ${y - 7}h3v14h-3z`,
    `M${x - 13} ${y - 7}h26 M${x - 13} ${y}h20 M${x - 13} ${y + 7}h14`,
    `M${x - 12} ${y - 8}h24v7h-24z M${x - 12} ${y + 2}h24v7h-24z`,
    `M${x} ${y - 12}v24 M${x - 10} ${y - 3}l10 -9 10 9 M${x - 10} ${y + 5}l10 7 10 -7`,
    `M${x - 10} ${y - 10}h20v20h-20z M${x - 5} ${y - 4}h10 M${x - 5} ${y + 2}h10`,
    `M${x - 12} ${y}h24 M${x + 4} ${y - 7}l8 7-8 7`,
  ]

  return <path d={paths[index % paths.length]} className="diagram-glyph" />
}

export default function Diagram({ kind, className = "" }: DiagramProps) {
  const generatedId = useId().replace(/[^a-zA-Z0-9_-]/g, "")
  const markerId = `diagram-arrow-${generatedId}`
  const gridId = `diagram-grid-${generatedId}`
  const gradientId = `diagram-gradient-${generatedId}`
  const glowId = `diagram-glow-${generatedId}`

  const common = {
    className: `diagram diagram-${kind} ${className}`.trim(),
    viewBox: "0 0 640 260",
    role: "img" as const,
    "aria-label": descriptions[kind],
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid meet" as const,
    focusable: "false" as const,
  }

  const defs = (
    <defs>
      <marker
        id={markerId}
        markerWidth="7"
        markerHeight="7"
        refX="5.5"
        refY="3.5"
        orient="auto"
        markerUnits="userSpaceOnUse"
      >
        <path d="M0 0 7 3.5 0 7Z" className="diagram-arrow" />
      </marker>

      <pattern id={gridId} width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M20 0H0V20" className="diagram-gridline" />
      </pattern>

      <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" className="diagram-gradient-start" />
        <stop offset="100%" className="diagram-gradient-end" />
      </linearGradient>

      <filter
        id={glowId}
        x="-100%"
        y="-100%"
        width="300%"
        height="300%"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  )

  const backdrop = (
    <g className="diagram-backdrop">
      <rect width="640" height="260" className="diagram-background" />
      <rect
        width="640"
        height="260"
        fill={`url(#${gridId})`}
        className="diagram-background-grid"
      />
      <path d="M24 34H616" className="diagram-top-rule" />
      <circle cx="24" cy="34" r="2" className="diagram-corner-dot" />
      <circle cx="616" cy="34" r="2" className="diagram-corner-dot" />
    </g>
  )

  /* -------------------------------------------------
     INTELLIGENT PIPELINE / ENGINEERING ECOSYSTEM
     ------------------------------------------------- */

  if (kind === "pipeline" || kind === "ecosystem") {
    const labels =
      kind === "pipeline"
        ? ["DATA", "INGEST", "SERVICES", "AI / ML", "KNOWLEDGE", "OUTPUTS"]
        : ["EDGE", "CLOUD", "BACKEND", "AI", "AUTOMATION"]

    const centers =
      kind === "pipeline"
        ? [59, 163, 267, 371, 475, 579]
        : [76, 198, 320, 442, 564]

    const nodeWidth = kind === "pipeline" ? 78 : 88

    return (
      <svg {...common}>
        {defs}
        {backdrop}

        <text x="28" y="22" className="diagram-micro-label">
          {kind === "pipeline"
            ? "INTELLIGENT SYSTEM / DATA FLOW"
            : "CONNECTED ENGINEERING ECOSYSTEM"}
        </text>

        {centers.slice(0, -1).map((center, index) => {
          const start = center + nodeWidth / 2 + 5
          const end = centers[index + 1] - nodeWidth / 2 - 7
          const path = `M${start} 133H${end}`

          return (
            <g key={`flow-${index}`}>
              <path
                d={path}
                className="diagram-path"
                markerEnd={`url(#${markerId})`}
              />

              <Packet
                path={path}
                duration={`${2.2 + (index % 2) * 0.5}s`}
                delay={`${index * 0.22}s`}
              />
            </g>
          )
        })}

        {labels.map((label, index) => {
          const x = centers[index] - nodeWidth / 2
          const y = 91

          return (
            <g key={label} className={`diagram-stage stage-${index + 1}`}>
              <rect
                x={x}
                y={y}
                width={nodeWidth}
                height="82"
                rx="5"
                fill={`url(#${gradientId})`}
                className="diagram-node"
              />

              <path
                d={`M${x + 10} 101H${x + nodeWidth - 10}`}
                className="diagram-node-rule"
              />

              <text x={x + 11} y="113" className="diagram-node-index">
                {`0${index + 1}`}
              </text>

              <circle
                cx={x + nodeWidth - 11}
                cy="107"
                r="2.8"
                className="diagram-status"
                filter={`url(#${glowId})`}
              />

              <NodeGlyph index={index} x={centers[index]} y={133} />

              <text
                x={centers[index]}
                y="158"
                textAnchor="middle"
                className="diagram-label"
              >
                {label}
              </text>
            </g>
          )
        })}

        <text x="28" y="221" className="diagram-caption">
          {kind === "pipeline"
            ? "REQUESTS IN  /  CONTEXT THROUGH  /  INTELLIGENT ACTIONS OUT"
            : "TELEMETRY UP  /  DECISIONS THROUGH  /  CONTROL BACK"}
        </text>

        <path d="M28 232H612" className="diagram-bottom-rule" />
      </svg>
    )
  }

  /* -------------------------------------------------
     CAREER TIMELINE
     ------------------------------------------------- */

  if (kind === "timeline") {
    const milestones = [
      {
        x: 105,
        title: "UPREEN",
        subtitle: "POWER / EDGE",
        icon: "M-22 -9h44M-16 -9v-19m10 19v-27m12 27v-19m10 19v-24",
      },
      {
        x: 320,
        title: "SMARTCHRONOS",
        subtitle: "PLC / MONITORING",
        icon: "M-24 -18h48v34h-48zM-15 -8h30M-15 0h30M-15 8h18",
      },
      {
        x: 535,
        title: "IDEACO",
        subtitle: "CLOUD / AI",
        icon: "M-23 -13h46v29h-46zM-14 -5h28M-14 3h28M-14 10h18",
      },
    ]

    return (
      <svg {...common}>
        {defs}
        {backdrop}

        <text x="28" y="22" className="diagram-micro-label">
          ENGINEERING EXPERIENCE / 2018 — PRESENT
        </text>

        <path
          d="M58 171H582"
          className="diagram-path diagram-timeline-track"
          markerEnd={`url(#${markerId})`}
        />

        {milestones.map((item, index) => (
          <g key={item.title} className={`diagram-stage stage-${index + 1}`}>
            <path d={`M${item.x} 151V119`} className="diagram-connector" />

            <rect
              x={item.x - 49}
              y="65"
              width="98"
              height="78"
              rx="5"
              className="diagram-node"
            />

            <path
              d={`M${item.x - 37} 77H${item.x + 37}`}
              className="diagram-node-rule"
            />

            <path
              d={item.icon}
              transform={`translate(${item.x} 108)`}
              className="diagram-glyph"
            />

            <circle
              cx={item.x}
              cy="171"
              r="7"
              className="diagram-timeline-point"
            />

            <circle
              cx={item.x}
              cy="171"
              r="13"
              className="diagram-timeline-halo"
            />

            <text
              x={item.x}
              y="201"
              textAnchor="middle"
              className="diagram-label"
            >
              {item.title}
            </text>

            <text
              x={item.x}
              y="216"
              textAnchor="middle"
              className="diagram-caption"
            >
              {item.subtitle}
            </text>
          </g>
        ))}

        <Packet path="M58 171H575" duration="5s" />

        <text x="28" y="244" className="diagram-caption">
          INDUSTRIAL IOT → MANUFACTURING SYSTEMS → INTELLIGENT SOFTWARE
        </text>
      </svg>
    )
  }

  /* -------------------------------------------------
     DNS / TLS / ADAPTERS / CONTACT ARCHITECTURES
     ------------------------------------------------- */

  if (
    kind === "dns" ||
    kind === "tunnel" ||
    kind === "adapters" ||
    kind === "contact"
  ) {
    const isContact = kind === "contact"

    const labels =
      kind === "dns"
        ? ["CLIENT", "HTTPS", "RELAY", "RESOLVER"]
        : kind === "tunnel"
          ? ["CLIENT", "SOCKS5", "TLS TUNNEL", "REMOTE"]
          : kind === "adapters"
            ? ["APPLICATION", "ABSTRACTION", "ADAPTERS", "EXCHANGES"]
            : ["EMAIL", "GITHUB", "LINKEDIN"]

    const centers: Point[] = isContact
      ? [
          [126, 76],
          [320, 76],
          [514, 76],
        ]
      : [
          [78, 132],
          [238, 132],
          [398, 132],
          [558, 132],
        ]

    const widths = isContact ? [94, 94, 94] : [96, 96, 96, 96]

    return (
      <svg {...common}>
        {defs}
        {backdrop}

        <text x="28" y="22" className="diagram-micro-label">
          {kind === "dns"
            ? "SECURE DNS RESOLUTION"
            : kind === "tunnel"
              ? "ENCRYPTED NETWORK TRANSPORT"
              : kind === "adapters"
                ? "EXCHANGE API ABSTRACTION"
                : "PROFESSIONAL CONNECTIVITY"}
        </text>

        {kind === "tunnel" && (
          <g className="diagram-tunnel-shell">
            {[0, 1, 2].map((index) => (
              <rect
                key={index}
                x={215 + index * 19}
                y={74 + index * 12}
                width={210 - index * 38}
                height={116 - index * 24}
                rx="8"
                className={`diagram-tunnel-ring tunnel-ring-${index + 1}`}
              />
            ))}
          </g>
        )}

        {kind === "dns" && (
          <rect
            x="185"
            y="78"
            width="266"
            height="108"
            rx="7"
            className="diagram-secure-zone"
          />
        )}

        {kind === "adapters" && (
          <path
            d="M398 132V83m0 49v49m0-49 58-40m-58 40 58 40"
            className="diagram-path diagram-branch"
          />
        )}

        {!isContact && centers.slice(0, -1).map(([x, y], index) => {
            const nextX = centers[index + 1][0]
            const start = x + widths[index] / 2 + 4
            const end = nextX - widths[index + 1] / 2 - 8
            const path = `M${start} ${y}H${end}`

            return (
              <g key={path}>
                <path
                  d={path}
                  className="diagram-path"
                  markerEnd={`url(#${markerId})`}
                />

                <Packet path={path} delay={`${index * 0.3}s`} />
              </g>
            )
          })}

        {centers.map(([x, y], index) => {
          const width = widths[index]

          return (
            <g
              key={labels[index]}
              className={`diagram-stage stage-${index + 1}`}
            >
              <rect
                x={x - width / 2}
                y={y - 27}
                width={width}
                height="54"
                rx="5"
                className="diagram-node"
              />

              <path
                d={`M${x - width / 2 + 10} ${y - 15}h${width - 20}`}
                className="diagram-node-rule"
              />

              <circle
                cx={x + width / 2 - 10}
                cy={y - 17}
                r="2.7"
                className="diagram-status"
              />

              <text
                x={x}
                y={y + 5}
                textAnchor="middle"
                className="diagram-label"
              >
                {labels[index]}
              </text>
            </g>
          )
        })}

        {kind === "dns" && (
          <>
            <text
              x="318"
              y="67"
              textAnchor="middle"
              className="diagram-caption"
            >
              ENCRYPTED HTTPS REQUEST
            </text>

            <path
              d="M558 174H78"
              className="diagram-response"
              markerEnd={`url(#${markerId})`}
            />

            <Packet
              path="M558 174H78"
              duration="3.5s"
              className="diagram-packet-secondary"
            />

            <text
              x="318"
              y="201"
              textAnchor="middle"
              className="diagram-caption"
            >
              DNS RESPONSE
            </text>
          </>
        )}

        {kind === "tunnel" && (
          <text x="320" y="218" textAnchor="middle" className="diagram-caption">
            SOCKS5 ROUTING / TLS ENCRYPTION / REMOTE HOST
          </text>
        )}

        {kind === "adapters" && (
          <text x="320" y="218" textAnchor="middle" className="diagram-caption">
            SHARED INTERFACE / EXCHANGE-SPECIFIC CONNECTORS
          </text>
        )}

        {isContact && (
          <g>
            <path
              d="M320 103V167H126V133m194 34V133m0 34h194v-34"
              className="diagram-path diagram-contact-branches"
            />

            <rect
              x="270"
              y="167"
              width="100"
              height="38"
              rx="5"
              className="diagram-node"
            />

            <text x="320" y="191" textAnchor="middle" className="diagram-label">
              CONTACT HUB
            </text>

            <Packet
              path="M320 103V167H126V133m194 34V133m0 34h194v-34"
              duration="3.6s"
            />
          </g>
        )}
      </svg>
    )
  }

  /* -------------------------------------------------
     CODE / API / CLOUD / WORKFLOW
     ------------------------------------------------- */

  if (
    kind === "code" ||
    kind === "api" ||
    kind === "cloud" ||
    kind === "workflow"
  ) {
    return (
      <svg {...common}>
        {defs}
        {backdrop}

        <text x="28" y="22" className="diagram-micro-label">
          {kind === "code"
            ? "SOFTWARE BUILD PIPELINE"
            : kind === "api"
              ? "BACKEND SERVICE ROUTING"
              : kind === "cloud"
                ? "CONTINUOUS DELIVERY"
                : "AUTOMATED WORKFLOW"}
        </text>

        {kind === "code" && (
          <g>
            <rect
              x="40"
              y="55"
              width="236"
              height="151"
              rx="6"
              className="diagram-terminal"
            />

            <path d="M40 82H276" className="diagram-rule" />

            <circle cx="56" cy="68" r="3" className="diagram-dot" />
            <circle cx="68" cy="68" r="3" className="diagram-dot dim" />
            <circle cx="80" cy="68" r="3" className="diagram-dot dim" />

            {[0, 1, 2, 3, 4].map((index) => (
              <g key={index}>
                <text x="57" y={105 + index * 19} className="diagram-number">
                  {`0${index + 1}`}
                </text>

                <path
                  d={`M86 ${100 + index * 19}h${
                    [92, 136, 108, 155, 74][index]
                  }`}
                  className={`diagram-code-line code-${index + 1}`}
                />
              </g>
            ))}

            <path
              d="M276 130H339"
              className="diagram-path"
              markerEnd={`url(#${markerId})`}
            />

            <rect
              x="347"
              y="96"
              width="112"
              height="68"
              rx="5"
              className="diagram-node"
            />

            <NodeGlyph index={2} x={403} y={119} />

            <text x="403" y="148" textAnchor="middle" className="diagram-label">
              COMPILE
            </text>

            <path
              d="M459 130H518"
              className="diagram-path"
              markerEnd={`url(#${markerId})`}
            />

            <path
              d="M544 103v54m-11-42h22m-22 30h22"
              className="diagram-glyph"
            />

            <text
              x="544"
              y="181"
              textAnchor="middle"
              className="diagram-caption"
            >
              EXECUTE
            </text>

            <Packet path="M280 130H339" duration="1.5s" />
          </g>
        )}

        {kind === "api" && (
          <g>
            <rect
              x="28"
              y="105"
              width="105"
              height="54"
              rx="5"
              className="diagram-node"
            />

            <text x="80" y="137" textAnchor="middle" className="diagram-label">
              API GATEWAY
            </text>

            <path
              d="M133 132H184V77H226M184 132H226M184 132V187H226"
              className="diagram-path"
              markerEnd={`url(#${markerId})`}
            />

            {[77, 132, 187].map((y, index) => (
              <g key={y} className={`diagram-stage stage-${index + 1}`}>
                <rect
                  x="234"
                  y={y - 20}
                  width="125"
                  height="40"
                  rx="5"
                  className="diagram-node"
                />

                <text
                  x="296"
                  y={y + 4}
                  textAnchor="middle"
                  className="diagram-label"
                >
                  {`SERVICE 0${index + 1}`}
                </text>
              </g>
            ))}

            <path
              d="M359 132H414"
              className="diagram-path"
              markerEnd={`url(#${markerId})`}
            />

            <rect
              x="422"
              y="96"
              width="170"
              height="72"
              rx="5"
              className="diagram-node"
            />

            <path
              d="M439 116h136m-136 15h136m-136 15h86"
              className="diagram-glyph"
            />

            <text
              x="507"
              y="185"
              textAnchor="middle"
              className="diagram-caption"
            >
              DATA STORE
            </text>

            <Packet path="M133 132H184V77H226" duration="2.3s" />
            <Packet path="M359 132H414" duration="1.8s" delay="0.4s" />
          </g>
        )}

        {kind === "cloud" && (
          <g>
            <path
              d="M75 132H562"
              className="diagram-path diagram-cloud-track"
            />

            {[
              { label: "COMMIT", detail: "SOURCE", x: 84 },
              { label: "BUILD", detail: "CI", x: 238 },
              { label: "IMAGE", detail: "CONTAINER", x: 392 },
              { label: "DEPLOY", detail: "RUNTIME", x: 546 },
            ].map((item, index) => (
              <g
                key={item.label}
                className={`diagram-stage stage-${index + 1}`}
              >
                <rect
                  x={item.x - 47}
                  y="91"
                  width="94"
                  height="81"
                  rx="5"
                  className="diagram-node"
                />

                <path
                  d={`M${item.x - 25} 113h50m-50 10h38m-38 10h44`}
                  className="diagram-glyph"
                />

                <text
                  x={item.x}
                  y="153"
                  textAnchor="middle"
                  className="diagram-label"
                >
                  {item.label}
                </text>

                <text
                  x={item.x}
                  y="165"
                  textAnchor="middle"
                  className="diagram-caption"
                >
                  {item.detail}
                </text>
              </g>
            ))}

            <Packet path="M75 132H562" duration="4s" />
          </g>
        )}

        {kind === "workflow" && (
          <g>
            <rect
              x="30"
              y="105"
              width="100"
              height="54"
              rx="5"
              className="diagram-node"
            />

            <text x="80" y="137" textAnchor="middle" className="diagram-label">
              TRIGGER
            </text>

            <path
              d="M130 132H183V82H225M183 132V182H225"
              className="diagram-path"
              markerEnd={`url(#${markerId})`}
            />

            <path
              d="M274 103 304 132 274 161 244 132Z"
              className="diagram-node"
            />

            <text x="274" y="136" textAnchor="middle" className="diagram-label">
              IF
            </text>

            <path
              d="M304 132H360V82H414M360 132V182H414"
              className="diagram-path"
              markerEnd={`url(#${markerId})`}
            />

            <rect
              x="422"
              y="60"
              width="154"
              height="44"
              rx="5"
              className="diagram-node"
            />

            <rect
              x="422"
              y="160"
              width="154"
              height="44"
              rx="5"
              className="diagram-node"
            />

            <text x="499" y="87" textAnchor="middle" className="diagram-label">
              AUTOMATE
            </text>

            <text x="499" y="187" textAnchor="middle" className="diagram-label">
              RETRY / ALERT
            </text>

            <Packet path="M130 132H183V82H225" duration="2.2s" />

            <Packet
              path="M304 132H360V182H414"
              duration="2.5s"
              delay="0.8s"
              className="diagram-packet-secondary"
            />
          </g>
        )}
      </svg>
    )
  }

  /* -------------------------------------------------
     NEURAL NETWORK / TRANSFORMER / DTQN
     ------------------------------------------------- */

  if (kind === "neural" || kind === "dtqn") {
    const layers = [3, 4, 4, 3]
    const xs = [92, 246, 400, 548]

    const nodeCoords: Point[][] = layers.map((count, layer) =>
      Array.from(
        { length: count },
        (_, index) =>
          [xs[layer], 130 + (index - (count - 1) / 2) * 42] as Point,
      ),
    )

    return (
      <svg {...common}>
        {defs}
        {backdrop}

        <text x="28" y="22" className="diagram-micro-label">
          {kind === "dtqn"
            ? "DEEP TRANSFORMER Q-NETWORK"
            : "NEURAL INFERENCE / RETRIEVAL"}
        </text>

        {nodeCoords
          .slice(0, -1)
          .flatMap((layer, layerIndex) =>
            layer.flatMap(([x1, y1], index) =>
              nodeCoords[layerIndex + 1].map(([x2, y2], nextIndex) => (
                <path
                  key={`${layerIndex}-${index}-${nextIndex}`}
                  d={`M${x1} ${y1}L${x2} ${y2}`}
                  className={`diagram-neural-link neural-link-${layerIndex}`}
                />
              )),
            ),
          )}

        {nodeCoords.map((layer, layerIndex) => (
          <g
            key={`layer-${layerIndex}`}
            className={`diagram-neural-layer layer-${layerIndex}`}
          >
            <text
              x={xs[layerIndex]}
              y="207"
              textAnchor="middle"
              className="diagram-caption"
            >
              {kind === "dtqn"
                ? ["STATE", "ENCODER", "ATTENTION", "Q-VALUES"][layerIndex]
                : ["INPUT", "CONTEXT", "INFERENCE", "OUTPUT"][layerIndex]}
            </text>

            {layer.map(([x, y], index) => (
              <g key={`${layerIndex}-${index}`}>
                <circle cx={x} cy={y} r="10" className="diagram-neuron-halo" />

                <circle cx={x} cy={y} r="5.2" className="diagram-neuron" />
              </g>
            ))}
          </g>
        ))}

        {kind === "dtqn" ? (
          <g>
            <path d="M246 52V194M400 52V194" className="diagram-attention" />

            <text
              x="246"
              y="48"
              textAnchor="middle"
              className="diagram-caption"
            >
              ENCODER
            </text>

            <text
              x="400"
              y="48"
              textAnchor="middle"
              className="diagram-caption"
            >
              TRANSFORMER
            </text>

            <Packet path="M92 130H548" duration="3.3s" />
          </g>
        ) : (
          <g>
            <rect
              x="454"
              y="51"
              width="106"
              height="30"
              rx="5"
              className="diagram-node diagram-retrieval-node"
            />

            <text
              x="507"
              y="70"
              textAnchor="middle"
              className="diagram-caption"
            >
              RAG / RETRIEVAL
            </text>

            <path
              d="M400 130V66H454"
              className="diagram-response"
              markerEnd={`url(#${markerId})`}
            />

            <Packet
              path="M400 130V66H454"
              duration="2.4s"
              delay="0.5s"
              className="diagram-packet-secondary"
            />
          </g>
        )}
      </svg>
    )
  }

  /* -------------------------------------------------
     INDUSTRIAL IOT / CONTROLLER
     ------------------------------------------------- */

  if (kind === "iot" || kind === "controller") {
    return (
      <svg {...common}>
        {defs}
        {backdrop}

        <text x="28" y="22" className="diagram-micro-label">
          INDUSTRIAL EDGE / DEVICE CONTROL
        </text>

        <path
          d="M165 130H262M378 130H475M320 88V65M320 172V195"
          className="diagram-path"
          markerEnd={`url(#${markerId})`}
        />

        <rect
          x="262"
          y="88"
          width="116"
          height="84"
          rx="6"
          className="diagram-board"
        />

        <path d="M280 101h80v58h-80z" className="diagram-board-inner" />

        <rect
          x="296"
          y="113"
          width="48"
          height="34"
          rx="3"
          className="diagram-chip"
        />

        <path
          d="M286 109h10m-10 12h10m-10 12h10m48-24h10m-10 12h10m-10 12h10M307 147v8m13-8v8m13-8v8"
          className="diagram-glyph"
        />

        <text x="320" y="185" textAnchor="middle" className="diagram-caption">
          EDGE CONTROLLER
        </text>

        {[-1, 0, 1].map((index) => (
          <g
            key={`sensor-${index}`}
            className={`diagram-stage stage-${index + 1}`}
          >
            <rect
              x={54 + (index + 1) * 34}
              y={100 + index * 8}
              width="48"
              height="58"
              rx="5"
              className="diagram-node"
            />

            <path
              d={`M${65 + (index + 1) * 34} ${116 + index * 8}h26m-26 9h26m-26 9h16`}
              className="diagram-glyph"
            />
          </g>
        ))}

        {[-1, 0, 1].map((index) => (
          <g
            key={`relay-${index}`}
            className={`diagram-stage stage-${index + 4}`}
          >
            <rect
              x={436 + (index + 1) * 34}
              y={100 + index * 8}
              width="48"
              height="58"
              rx="5"
              className="diagram-node"
            />

            <path
              d={`M${447 + (index + 1) * 34} ${116 + index * 8}h26m-26 9h26m-26 9h16`}
              className="diagram-glyph"
            />
          </g>
        ))}

        <text x="120" y="191" textAnchor="middle" className="diagram-caption">
          SENSORS / EDGE
        </text>

        <text x="520" y="191" textAnchor="middle" className="diagram-caption">
          RELAYS / DEVICES
        </text>

        <Packet path="M165 130H262" duration="1.8s" />

        <Packet
          path="M378 130H475"
          duration="1.9s"
          delay="0.6s"
          className="diagram-packet-secondary"
        />

        <Packet path="M320 172V195" duration="1.5s" delay="0.9s" />
      </svg>
    )
  }

  /* -------------------------------------------------
     GAME ENGINE / RENDERING PIPELINE
     ------------------------------------------------- */

  if (kind === "engine") {
    return (
      <svg {...common}>
        {defs}
        {backdrop}

        <text x="28" y="22" className="diagram-micro-label">
          REAL-TIME GRAPHICS / RENDER PIPELINE
        </text>

        <path d="m55 164 118-57 112 34-118 58z" className="diagram-wire" />

        <path
          d="m86 153 87-42 80 24-87 42z"
          className="diagram-wire diagram-wire-secondary"
        />

        <path d="m173 107V64l112 34v43" className="diagram-wire" />

        <path
          d="m55 164v-37l118-57v37"
          className="diagram-wire diagram-wire-secondary"
        />

        <path d="m173 107 112 34" className="diagram-wire" />

        <path
          d="M310 130H364"
          className="diagram-path"
          markerEnd={`url(#${markerId})`}
        />

        <rect
          x="374"
          y="61"
          width="218"
          height="140"
          rx="6"
          className="diagram-frame"
        />

        <rect
          x="387"
          y="74"
          width="192"
          height="112"
          rx="3"
          className="diagram-view"
        />

        <path
          d="m400 166 40-49 33 34 30-46 60 61m-150 9h148"
          className="diagram-wire"
        />

        <path d="M483 74v112M387 130h192" className="diagram-crosshair" />

        <circle cx="483" cy="130" r="5" className="diagram-render-point" />

        <text x="483" y="218" textAnchor="middle" className="diagram-caption">
          CAMERA → GEOMETRY → FRAME
        </text>

        <Packet path="M310 130H364" duration="1.6s" />
      </svg>
    )
  }

  return null
}
