export type DiagramKind = "pipeline" | "code" | "api" | "neural" | "iot" | "cloud" | "workflow" | "dns" | "tunnel" | "controller" | "dtqn" | "adapters" | "engine" | "ecosystem" | "timeline" | "contact"

export const navItems = ["about", "skills", "projects", "experience", "contact"]

export const skills = [
  {
    number: "01",

    title: "Programming Languages",

    summary: "Code, compilation and execution across software and hardware.",

    items: ["C#", "Python", "C/C++", "VHDL"],

    visual: "code",
  },

  {
    number: "02",

    title: "Backend & APIs",

    summary:
      "Services, interfaces and system integrations built to work together.",

    items: [
      "REST APIs",

      "Backend Services",

      "System Integration",

      "Workflow Automation",
    ],

    visual: "api",
  },

  {
    number: "03",

    title: "AI & Machine Learning",

    summary: "Neural processing, retrieval workflows and local inference.",

    items: [
      "PyTorch",

      "Deep Learning",

      "Computer Vision",

      "RAG Workflows",

      "Local LLM Deployment",
    ],

    visual: "neural",
  },

  {
    number: "04",

    title: "IoT & Embedded",

    summary: "Connected devices, edge processing and industrial protocols.",

    items: ["MQTT", "OPC UA", "Arduino", "ESP32", "Edge Computing"],

    visual: "iot",
  },

  {
    number: "05",

    title: "Infrastructure & Tools",

    summary: "Containerized services and the tooling around reliable delivery.",

    items: ["Docker", "Git", "CI/CD", "Linux", "Ollama"],

    visual: "cloud",
  },

  {
    number: "06",

    title: "Automation & DevOps",

    summary: "Repeatable workflows that connect triggers to useful outcomes.",

    items: [
      "Selenium",

      "Playwright",

      "Browser Automation",

      "Workflow Orchestration",
    ],

    visual: "workflow",
  },
] satisfies Array<{
  number: string

  title: string

  summary: string

  items: string[]

  visual: DiagramKind
}>

export const projects = [
  {
    name: "DOHRelay",

    description:
      "DNS-over-HTTPS relay implementation in .NET 8.0 for encrypted DNS queries. Enables secure, privacy-focused DNS resolution.",

    tags: ["DNS", ".NET 8.0", "Security"],

    link: "https://github.com/Mahyardana/DOHRelay",

    type: "dns",

    number: "01",

    role: "Secure DNS · .NET",
  },

  {
    name: "SimpleTLSTunnel",

    description:
      "SOCKS5 proxy tunnel with TLS encryption for secure, encrypted network communication. Features AES encryption and customizable routing.",

    tags: ["Networking", "Security", "TLS"],

    link: "https://github.com/Mahyardana/SimpleTLSTunnel",

    type: "tunnel",

    number: "02",

    role: "Encrypted networking · C#",
  },

  {
    name: "ArduinoCommandCenterServer",

    description:
      "C# server application for remote Arduino relay management and device control. Enables centralized IoT device orchestration.",

    tags: ["IoT", "Arduino", "Control Systems"],

    link: "https://github.com/Mahyardana/ArduinoCommandCenterServer",

    type: "controller",

    number: "03",

    role: "Industrial IoT · C#",
  },

  {
    name: "DTQN",

    description:
      "Deep Transformer Q-Networks implementation for partially observable reinforcement learning environments.",

    tags: ["Reinforcement Learning", "Transformers", "PyTorch"],

    link: "https://github.com/Mahyardana/DTQN",

    type: "dtqn",

    number: "04",

    role: "Machine learning · Python",
  },

  {
    name: "CryptoExchange.Net",

    description:
      "Base framework library for building .NET cryptocurrency exchange API wrappers. Provides reusable components for exchange integration.",

    tags: ["APIs", "Cryptocurrency", ".NET"],

    link: "https://github.com/Mahyardana/CryptoExchange.Net",

    type: "adapters",

    number: "05",

    role: "API framework · C#",
  },

  {
    name: "FPS-project",

    description:
      "First-person shooter engine built from scratch in C++ with custom rendering and game mechanics. Showcases graphics and game design expertise.",

    tags: ["Game Engine", "Graphics", "DirectX"],

    link: "https://github.com/Mahyardana/FPS-project",

    type: "engine",

    number: "06",

    role: "Game engine · C++",
  },
] satisfies Array<{
  name: string

  description: string

  tags: string[]

  link: string

  type: DiagramKind

  number: string

  role: string
}>

export const experiences = [
  {
    date: "April 2024 – July 2026",

    title: "Senior Automation & Backend Developer",

    company: "IDEACO Digital Agency",

    location: "Remote / Istanbul",

    responsibilities: [
      "Built backend infrastructure for industrial IoT and B2B SaaS solutions serving enterprise clients.",

      "Developed integrations between IoT edge devices, MQTT brokers, and cloud processing pipelines.",

      "Engineered backend services and secure integration layers for AI workflows and RAG systems.",
    ],
  },

  {
    date: "April 2022 – April 2024",

    title: "Backend & Automation Developer",

    company: "SmartChronos",

    location: "Remote / Tehran",

    responsibilities: [
      "Developed backend systems for manufacturing intelligence platforms.",

      "Integrated PLCs, MQTT, and OPC UA servers for equipment monitoring.",

      "Implemented real-time alerting and data processing strategies.",
    ],
  },

  {
    date: "August 2018 – April 2020",

    title: "Internet of Things Specialist",

    company: "Upreen",

    location: "Tehran",

    responsibilities: [
      "Worked on industrial IoT solutions for power distribution systems.",

      "Microcontroller programming: ESP32, Arduino Due, Teensy.",

      "Designed device connectivity and network infrastructure.",
    ],
  },
]

export const descriptions: Record<DiagramKind, string> = {
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
