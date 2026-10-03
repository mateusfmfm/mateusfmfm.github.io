export default {
  header: {
    about: "About",
    experience: "Commercial and Production Experiences",
    education: "Education",
    softSkills: "Soft skills",
    projects: "Projects",
    languagePt: "Switch to Portuguese",
    languageEn: "Switch to English",
    downloadCv: "Download CV",
  },
  intro: {
    badge: "🚀 Available for new projects",
    title: "I'm Mateus Félix",
    bio: "Hi, I'm a software developer from Santos/SP with 10 years of experience, focused on Go, Angular, Flutter, and React. Passionate about learning and building software solutions.",
  },
  contacts: {
    location: "Location",
    locationValue: "Santos, Brazil",
    email: "Email",
    telegram: "Telegram",
    linkedin: "LinkedIn",
    github: "GitHub",
    whatsapp: "WhatsApp",
  },
  skills: {
    title: "Main skills",
    description:
      "I've had the opportunity to work with a variety of technologies throughout my career, and I'm passionate about learning. This list is always being updated.",
    tabsPlaceholder: "[ Interactive tabs component will go here ]",
    categories: {
      ai: "Artificial Intelligence",
      languages: "Programming / Markup / Stylesheet languages",
      frontend: "Front-end — frameworks and libraries",
      backend: "Back-end — frameworks and libraries",
      protocols: "Communication protocols (construction and consumption)",
      databases: "Databases",
      cloud: "Cloud",
      deployment: "Work / Deployment environment",
      others: "Others",
    },
  },
  experiences: {
    title: "Experience",
    description:
      "Where I've been and what I've built throughout my professional journey. This is the list of projects I worked on in continuous production. I also have experience with one-off development across several stacks.",
    items: {
      bancoBv: {
        name: "Banco BV",
        role: "Senior Frontend Developer (Angular/Flutter)",
        time: "Aug/2024 - Present",
        description:
          "In an app with 10 million users, I led mobile (Flutter) and web (Angular) development for credit and loan products, helping improve the legacy codebase and shipping new features with clean architecture and microapps.",
      },
      wowe: {
        name: "Wowe",
        role: "Software Engineer (Go/Angular/Flutter)",
        time: "Nov/2023 - Aug/2024",
        description:
          "Built 100% of the backend (Go and GraphQL) and 100% of the frontend (Angular and Flutter) for a social network app for sharing experiences and trends, using clean architecture on both sides. The project used tools such as GraphQL, Google Places, Elasticsearch, RabbitMQ, and Kafka, among others.",
      },
      viva: {
        name: "Viva Translate",
        role: "Software Engineer (Flutter Desktop/React/Python)",
        time: "Nov/2023 - Feb/2024",
        description:
          "I worked as a frontend specialist (React and Flutter Desktop) and Python Django integration, on a real-time AI video-call translation product, available as a Chrome extension or desktop app, with integration support for Teams, Google Meet, and Zoom.",
      },
      cerc: {
        name: "CERC",
        role: "Frontend Engineer (Angular)",
        time: "Dec/2022 - Nov/2023",
        description:
          "Worked end-to-end on building a carbon credit web platform with Angular 13 and the mobile MVP with Flutter, integrated with a REST API.",
      },
      headson: {
        name: "HeadsOn",
        role: "Software Engineer (Go/Flutter/Angular)",
        time: "Jan/2022 - Dec/2022",
        description:
          "Working with Go, Flutter, and Angular, I worked as a fullstack developer building an app for a financial institution, managing users' digital wallets with a focus on payments and investments.",
      },
      linx: {
        name: "Linx",
        role: "Frontend Developer (Angular/Flutter)",
        time: "Nov/2019 - Dec/2022",
        description:
          "Using Angular and Flutter, I worked on the Nova Conta Linx digital bank, a white-label project integrated via BFF and GraphQL, delivering a complete financial payments solution.",
      },
    },
  },
  education: {
    title: "Education",
    items: {
      ufabc: {
        degree: "Bachelor's Degree in Science and Technology",
        institution: "Federal University of ABC",
        time: "2012-2017",
      },
      anhembi: {
        degree: "Systems Analysis and Development",
        institution: "Anhembi Morumbi",
        time: "2017-2020",
      },
    },
  },
  softSkills: {
    title: "Soft skills",
    items: {
      frontendCraft: {
        title: "Attention to detail in frontend work",
        description:
          "I am a perfectionist when building frontend interfaces. I bring a sharp critical eye to responsiveness and to faithfully reproducing prototypes, so that each screen lives up to the design and the experience remains consistent across devices.",
      },
      codeQuality: {
        title: "Methodical code quality",
        description:
          "From backend to frontend, I am methodical about code quality. I consistently apply Clean Code and SOLID practices, and I work to keep the project aligned with unit tests in order to protect the quality of each delivery and reduce regressions throughout development. I also keep project documentation current, whether as technical documentation, markdown, or a component Storybook for reuse when building prototypes.",
      },
      userExperience: {
        title: "Engagement with user experience",
        description:
          "I am highly engaged when alignment involves user experience and business rules, and how they translate into development. I like to contribute to those discussions so that product decisions are reflected clearly in the interface, the development logic, and the usage flow.",
      },
    },
  },
  projects: {
    title: "GitHub Portfolio",
    description: "Some of my personal and open source projects with higher complexity.",
    flightTracker: {
      tag: "Go, React",
      name: "flight-tracker",
      description:
        "High-performance concurrent event engine in Go and Angular that tracks aircraft from the OpenSky Network API and streams real-time updates to clients via GraphQL Subscriptions (WebSockets).",
    },
    arcadeVault: {
      tag: "Go, Angular",
      name: "arcade-vault",
      description:
        "Full arcade store built with Angular, Go,gRPC + GraphQL microservices, Clean Architecture, PostgreSQL (sqlc/pgx), RabbitMQ, and OpenTelemetry -> Jaeger, integrated with the Stripe payment gateway.",
    },
  },
} as const;
