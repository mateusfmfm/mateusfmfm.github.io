export const experienceIds = [
  "bancoBv",
  "wowe",
  "viva",
  "cerc",
  "headson",
  "linx",
] as const;

export type ExperienceId = (typeof experienceIds)[number];

export const educationIds = ["ufabc", "anhembi"] as const;

export type EducationId = (typeof educationIds)[number];

export const softSkillIds = ["frontendCraft", "codeQuality", "userExperience"] as const;

export type SoftSkillId = (typeof softSkillIds)[number];

export const projectItems = [
  {
    id: "flightTracker",
    stacks: ["Angular", "Go", "GraphQL", "Redis"],
  },
  {
    id: "arcadeVault",
    stacks: ["Angular", "Go", "gRPC", "GraphQL", "PostgreSQL"],
  },
] as const;

export type ProjectId = (typeof projectItems)[number]["id"];

export const skillNames = [
  "Flutter",
  "React",
  "Go",
  "Angular",
  "Postgres",
  "MongoDB",
  "GraphQL",
  "Swagger",
  "AWS",
  "Google Cloud",
  "Node.js",
  "Django",
  "FastAPI",
] as const;

export const skillCategories = [
  {
    id: "ai",
    items: ["Cursor", "Claude", "Copilot", "OpenAI", "Gemini", "DeepSeek"],
  },
  {
    id: "languages",
    items: ["Go", "Dart", "JavaScript", "TypeScript", "Python", "CSS3", "JSX/TSX"],
  },
  {
    id: "frontend",
    items: [
      "Flutter",
      "Angular",
      "React",
      "React Native",
      "Bootstrap",
      "Material-UI",
      "Tailwind CSS",
      "Panda CSS",
      "Styled Components",
      "Sass",
    ],
  },
  {
    id: "backend",
    items: [
      "Go",
      "Gin",
      "Chi",
      "Echo",
      "Fiber",
      "Gorm",
      "Next.js",
      "Django",
      "FastAPI",
      "Express",
    ],
  },
  {
    id: "protocols",
    items: ["REST", "GraphQL", "WebSocket", "SSE", "gRPC"],
  },
  {
    id: "databases",
    items: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB", "MSSQL", "SQLite"],
  },
  {
    id: "cloud",
    items: ["Google Cloud", "AWS", "Azure"],
  },
  {
    id: "deployment",
    items: [
      "Docker",
      "Heroku",
      "VPS (DigitalOcean, Linode, Hostinger, etc.)",
      "Shared hosts",
    ],
  },
  {
    id: "others",
    items: [
      "Git",
      "ESLint",
      "Redis",
      "Babel",
      "Storybook",
      "MVC",
      "ORM",
      "OOP",
      "AWS (S3)",
      "Functional programming",
      "SOLID",
      "Natural Language Processing",
      "Scrum",
      "Continuous Integration",
      "Continuous Delivery",
      "Progressive web apps",
      "Reactive programming",
      "Memcached",
      "Responsive design",
      "Web standards",
      "Performance",
      "Usability",
      "Accessibility (a11y)",
      "SEO",
    ],
  },
] as const;

export type SkillCategoryId = (typeof skillCategories)[number]["id"];

