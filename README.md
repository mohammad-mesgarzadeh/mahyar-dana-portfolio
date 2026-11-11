# Mahyar Dana Portfolio

A personal engineering portfolio for Mahyar Dana, an AI and backend engineer. The site presents professional experience, technical capabilities, and selected engineering projects.

**Live website:** [mohammad-mesgarzadeh.github.io/mahyar-dana-portfolio](https://mohammad-mesgarzadeh.github.io/mahyar-dana-portfolio/)

## About the Project

The portfolio brings together work across AI engineering, backend development, industrial IoT, embedded systems, and automation. It highlights the design and integration of intelligent software systems, production-oriented services, connected devices, and infrastructure.

## Live Demo

Visit the deployed portfolio: **[Open Mahyar Dana Portfolio](https://mohammad-mesgarzadeh.github.io/mahyar-dana-portfolio/)**

## Features

- Responsive layouts for desktop, tablet, and mobile screens.
- Hero section introducing Mahyar Dana and his engineering focus.
- Professional profile and background.
- Technical expertise cards covering programming, backend and APIs, AI and machine learning, IoT and embedded systems, infrastructure, and automation.
- Six featured projects with technical diagrams and links to their public repositories.
- Professional experience timeline.
- Contact links for email, GitHub, and LinkedIn.
- Light and dark themes, with dark mode as the default and the selected theme saved in browser storage.
- Animated SVG technical diagrams and CSS-based visual effects; the hero visualization includes animated SVG paths.
- Interactive navigation, active-section indication, theme toggle, and project links.
- Smooth anchor scrolling and scroll-triggered reveal effects.
- Accessibility considerations including a skip-to-content link, visible keyboard focus, semantic landmarks, and reduced-motion styles.

The visualizations are implemented with SVG and CSS. The project does not use Three.js or WebGL.

## Technology Stack

| Technology | Use |
| --- | --- |
| [React](https://react.dev/) | Component-based user interface |
| [TypeScript](https://www.typescriptlang.org/docs/) | Application language and type checking |
| [Vite](https://vite.dev/guide/) | Development server and production build |
| [Tailwind CSS](https://tailwindcss.com/docs) | Utility-first styling, integrated through the Vite plugin |
| [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) and CSS | Technical diagrams, animations, responsive styling, and theme tokens |
| [pnpm](https://pnpm.io/) | Dependency installation and project scripts |

React, React DOM, TypeScript, Vite, and Tailwind CSS are declared in the project manifests. The repository does not include a Three.js dependency or a `src/three/` directory.

## Portfolio Sections

1. **Hero** — Introduction and engineering focus across intelligent software and connected systems.
2. **About** — Professional background, areas of focus, and profile overview.
3. **Skills** — Technical capabilities and technologies across six engineering domains.
4. **Projects** — Selected engineering work with technical diagrams and repository links.
5. **Experience** — Professional career timeline and key contributions.
6. **Contact** — Direct email and professional social links.

## Featured Projects

Descriptions below follow the project data displayed by the portfolio.

| Project | Description | Repository |
| --- | --- | --- |
| **DOHRelay** | DNS-over-HTTPS relay implementation in .NET 8.0 for encrypted DNS queries and privacy-focused DNS resolution. | [Mahyardana/DOHRelay](https://github.com/Mahyardana/DOHRelay) |
| **SimpleTLSTunnel** | SOCKS5 proxy tunnel with TLS encryption for secure network communication, including AES encryption and customizable routing. | [Mahyardana/SimpleTLSTunnel](https://github.com/Mahyardana/SimpleTLSTunnel) |
| **ArduinoCommandCenterServer** | C# server application for remote Arduino relay management and device control, supporting centralized IoT device orchestration. | [Mahyardana/ArduinoCommandCenterServer](https://github.com/Mahyardana/ArduinoCommandCenterServer) |
| **DTQN** | Deep Transformer Q-Networks implementation for partially observable reinforcement learning environments. | [Mahyardana/DTQN](https://github.com/Mahyardana/DTQN) |
| **CryptoExchange.Net** | Base framework library for building .NET cryptocurrency exchange API wrappers, with reusable components for exchange integration. | [Mahyardana/CryptoExchange.Net](https://github.com/Mahyardana/CryptoExchange.Net) |
| **FPS-project** | First-person shooter engine built from scratch in C++ with custom rendering and game mechanics. | [Mahyardana/FPS-project](https://github.com/Mahyardana/FPS-project) |

## Getting Started

### Prerequisites

- Node.js 22, as specified in `.mise.toml`.
- pnpm 10.34.3, as specified in `.mise.toml`.

### Installation

```bash
git clone https://github.com/mohammad-mesgarzadeh/mahyar-dana-portfolio.git
cd mahyar-dana-portfolio
pnpm install
```

### Run the Development Server

```bash
pnpm dev
```

The Vite development server uses port `8443` by default. Set the `PORT` environment variable to use a different port.

## Development Commands

| Command | Description |
| --- | --- |
| `pnpm install` | Install dependencies from the pnpm lockfile |
| `pnpm dev` | Start the Vite development server |
| `pnpm build` | Generate the production build in `dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm format` | Format files in `src/` with Oxfmt |

## Project Structure

```text
.
├── .gitattributes
├── .gitignore
├── .mise.toml                        # Node.js and pnpm versions
├── public/
│   ├── assets/brand/                 # Portfolio logo and monogram
│   ├── apple-touch-icon.png
│   ├── favicon*.png
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── About/                    # Profile and animated statistics
│   │   ├── ArrowIcon/                # Shared arrow icon
│   │   ├── BrandLogo/                # Portfolio brand mark
│   │   ├── Contact/                  # Contact details and links
│   │   ├── Diagram/                  # Reusable SVG technical diagrams
│   │   ├── Experience/               # Career timeline
│   │   ├── Footer/                   # Site footer
│   │   ├── Hero/                     # Introduction and system visualization
│   │   ├── Navigation/               # Responsive navigation and theme state
│   │   ├── Projects/                 # Featured project cards
│   │   ├── SectionHeading/           # Shared section headings
│   │   ├── Skills/                   # Technical expertise cards
│   │   └── ThemeToggle/              # Light/dark theme control
│   ├── content/
│   │   └── portfolio.ts              # Skills, projects, experience, and navigation data
│   ├── styles/
│   │   └── globals.css               # Tailwind import, global styles, and design tokens
│   ├── App.tsx                       # Page composition
│   ├── main.tsx                      # React entry point
│   └── vite-env.d.ts                 # Vite client type definitions
├── index.html                        # HTML entry point and initial theme setup
├── package-lock.json                 # npm lockfile
├── package.json                      # Dependencies and available scripts
├── pnpm-lock.yaml                    # Locked pnpm dependency versions
├── README.md
├── tsconfig.json                     # TypeScript configuration
└── vite.config.ts                    # Vite, React, Tailwind, and base-path configuration
```

## Deployment

The live portfolio is hosted at [mohammad-mesgarzadeh.github.io/mahyar-dana-portfolio](https://mohammad-mesgarzadeh.github.io/mahyar-dana-portfolio/). A remote `gh-pages` branch exists in the repository. The source tree does not include a deployment script or GitHub Actions workflow, so automated publishing is not assumed here.

Create a fresh production build with:

```bash
pnpm build
```

Vite writes the generated static site to `dist/`; that directory is ignored by Git and is the build output to publish through the repository's Pages configuration. In `vite.config.ts`, the `base` is set to `/mahyar-dana-portfolio/` so asset URLs work under the GitHub Pages project path.

## Theme Support

Dark mode is the default for first-time visitors. The theme toggle switches between dark and light mode and saves the selection in `localStorage` under `mahyar-theme`. The page initializes the saved theme before loading the application styles, and the selection is restored on subsequent visits.

## Contact

- **Email:** [dana.mahyar76@gmail.com](mailto:dana.mahyar76@gmail.com)
- **GitHub:** [github.com/Mahyardana](https://github.com/Mahyardana)
- **LinkedIn:** [linkedin.com/in/mahyardana](https://linkedin.com/in/mahyardana)

## License

No license has been specified in this repository.