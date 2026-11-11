# Mahyar Dana — Portfolio

A personal portfolio website showcasing Mahyar Dana's work and experience in AI engineering, backend development, industrial IoT, and automation.

The site is built with React and TypeScript, powered by Vite, and uses Tailwind CSS alongside a small amount of custom CSS for theme tokens and specialized effects. It includes responsive layouts, a persistent light/dark theme, animated technical diagrams, and Three.js/WebGL visualizations.

**Live website:** [mahyardana.com](https://mahyardana.com)

## Features

- **Responsive portfolio:** layouts for desktop, tablet, and mobile screens.
- **Hero section:** introduces Mahyar Dana and the focus on engineering intelligent systems.
- **About:** engineering profile and experience highlights.
- **Technical expertise:** programming languages, backend and APIs, AI and machine learning, IoT and embedded systems, infrastructure, and automation.
- **Selected projects:** visual showcases and links to public GitHub repositories.
- **Experience timeline:** professional roles and responsibilities.
- **Contact:** direct email, LinkedIn, and GitHub links.
- **Theme switching:** light and dark modes, with dark mode as the default for first-time visitors and the selected theme saved locally.
- **Animated visuals:** SVG-based technical diagrams and Three.js scenes, with reduced-motion support and WebGL fallbacks where implemented.
- **Accessibility:** semantic navigation, keyboard interaction, focus styles, and reduced-motion handling.

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Three.js](https://threejs.org/)
- SVG and CSS animations

## Featured Projects

| Project | Description | Repository |
| --- | --- | --- |
| DOHRelay | DNS-over-HTTPS relay implementation in .NET 8.0 | [GitHub](https://github.com/Mahyardana/DOHRelay) |
| SimpleTLSTunnel | SOCKS5 proxy tunnel with TLS encryption | [GitHub](https://github.com/Mahyardana/SimpleTLSTunnel) |
| ArduinoCommandCenterServer | C# server for remote Arduino relay management | [GitHub](https://github.com/Mahyardana/ArduinoCommandCenterServer) |
| DTQN | Deep Transformer Q-Networks implementation | [GitHub](https://github.com/Mahyardana/DTQN) |
| CryptoExchange.Net | .NET base framework for cryptocurrency exchange API wrappers | [GitHub](https://github.com/Mahyardana/CryptoExchange.Net) |
| FPS-project | C++ first-person shooter engine project | [GitHub](https://github.com/Mahyardana/FPS-project) |

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Installation

Clone the repository and install its dependencies:

```bash
git clone <your-repository-url>
cd <repository-folder>
pnpm install
```

### Run locally

```bash
pnpm dev
```

Vite serves the development site at:

```text
http://localhost:8443
```

If port `8443` is already in use, check the `server.port` setting in `vite.config.ts` or set the `PORT` environment variable.

## Available Commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Vite development server |
| `pnpm build` | Create an optimized production build in `dist/` |
| `pnpm format` | Format the project source files |
| `pnpm exec tsc --noEmit` | Run the TypeScript type check without emitting files |

To preview the production build locally:

```bash
pnpm build
pnpm exec vite preview
```

## Project Structure

```text
.
├── public/              # Static assets, icons, and brand assets
├── src/
│   ├── components/      # Reusable interface components
│   ├── content/         # Portfolio content and data
│   ├── three/           # Shared Three.js scenes and utilities
│   ├── App.tsx          # Application composition
│   ├── HeroScene.tsx    # Hero WebGL visualization
│   ├── index.css        # Global styles and design tokens
│   └── main.tsx         # Application entry point
├── index.html           # HTML document and theme initialization
├── vite.config.ts       # Vite, React, and Tailwind configuration
├── package.json
└── pnpm-lock.yaml
```

Some component and asset names may vary as the project evolves.

## Theme Behavior

Dark mode is the default for visitors without a saved preference. When a visitor switches themes, the selection is stored in `localStorage` under `mahyar-theme` and restored on the next visit.

## Deployment

Build the site with:

```bash
pnpm build
```

Deploy the generated `dist/` directory to a static hosting provider that supports single-page applications. Configure the host to serve `index.html` for application routes when necessary.

## Contact

- **Email:** [dana.mahyar76@gmail.com](mailto:dana.mahyar76@gmail.com)
- **GitHub:** [github.com/Mahyardana](https://github.com/Mahyardana)
- **LinkedIn:** [linkedin.com/in/mahyardana](https://linkedin.com/in/mahyardana)

---

© 2026 Mahyar Dana. All rights reserved.