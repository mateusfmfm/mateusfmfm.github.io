import { pdf } from "@react-pdf/renderer";
import type { TFunction } from "i18next";
import { educationIds, experienceIds, projectItems, softSkillIds } from "../../data/cv";
import CvDocument, { type CvContactPart, type CvContent } from "./CvDocument";

const cvSkillItems = {
  languages: ["Go", "Dart", "JavaScript", "TypeScript", "Python", "CSS3"],
  frontend: [
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
  backend: ["Go", "Gin", "Chi", "Echo", "Fiber", "Gorm", "Next.js", "Django", "FastAPI", "Express"],
  protocols: ["REST", "GraphQL", "WebSocket", "SSE", "gRPC"],
  databases: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB", "MSSQL", "SQLite"],
  cloud: ["Google Cloud", "AWS", "Azure"],
  devops: [
    "Docker",
    "Git",
    "Heroku",
    "VPS (DigitalOcean, Linode)",
    "Redis",
    "Elasticsearch",
    "RabbitMQ",
    "OpenTelemetry",
  ],
  ai: ["Cursor", "Claude", "Copilot", "OpenAI", "Gemini", "DeepSeek"],
  practices: [
    "Clean Architecture",
    "Clean Code",
    "SOLID",
    "Unit Testing",
    "CI/CD",
    "Scrum",
    "Microservices",
  ],
} as const;

const cvSkillCategoryIds = [
  "languages",
  "frontend",
  "backend",
  "protocols",
  "databases",
  "cloud",
  "devops",
  "ai",
  "practices",
] as const;

export function buildCvContent(t: TFunction): CvContent {
  const contactLines: CvContactPart[][] = [
    [
      {
        text: t("contacts.locationValue"),
        href: "https://www.google.com/maps/search/?api=1&query=Santos,+Brasil",
      },
      { text: "mateusfmfm@outlook.com", href: "mailto:mateusfmfm@outlook.com" },
      { text: "+55 14 99730 2277", href: "https://wa.me/5514997302277" },
    ],
    [
      { text: `${t("contacts.telegram")}: @mateusfmfm`, href: "https://t.me/mateusfmfm" },
      {
        text: `${t("contacts.linkedin")}: linkedin.com/in/mateusfmfm`,
        href: "https://www.linkedin.com/in/mateusfmfm/",
      },
      {
        text: `${t("contacts.github")}: github.com/mateusfmfm`,
        href: "https://github.com/mateusfmfm",
      },
    ],
  ];

  return {
    name: "Mateus Félix",
    title: t("intro.title"),
    bio: t("cv.summaryBody"),
    summaryTitle: t("cv.summary"),
    contactLines,
    skillsTitle: t("cv.skills"),
    skillCategories: cvSkillCategoryIds.map((id) => ({
      title: t(`cv.skillCategories.${id}`),
      items: [...cvSkillItems[id]],
    })),
    experiencesTitle: t("cv.experience"),
    experiences: experienceIds.map((id) => {
      const customBullets = t(`cv.experienceBullets.${id}`, {
        returnObjects: true,
        defaultValue: "",
      });

      return {
        name: t(`experiences.items.${id}.name`),
        role: t(`experiences.items.${id}.role`),
        time: t(`experiences.items.${id}.time`),
        bullets: Array.isArray(customBullets)
          ? customBullets.map(String)
          : t(`experiences.items.${id}.description`)
              .split(/(?<=\.)\s+/)
              .map((part) => part.trim())
              .filter(Boolean),
      };
    }),
    projectsTitle: t("cv.projects"),
    projects: projectItems.map((project) => ({
      name: t(`projects.${project.id}.name`),
      stacks: [...project.stacks],
      description: t(`projects.${project.id}.description`),
      href:
        "href" in project && typeof project.href === "string" ? project.href : undefined,
    })),
    educationTitle: t("cv.education"),
    education: educationIds
      .filter((id) => id !== "ufabc")
      .map((id) => ({
        degree: t(`education.items.${id}.degree`),
        institution: t(`education.items.${id}.institution`),
        time: t(`education.items.${id}.time`),
        description: id === "fiap" ? t("education.items.fiap.description") : undefined,
      })),
    softSkillsTitle: t("cv.softSkills"),
    softSkills: softSkillIds.map((id) => t(`cv.softSkillBullets.${id}`)),
  };
}

export async function downloadCv(t: TFunction, language: string) {
  const content = buildCvContent(t);
  const blob = await pdf(<CvDocument content={content} />).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const suffix = language.startsWith("pt") ? "pt-BR" : "en";

  link.href = url;
  link.download = `Mateus-Felix-CV-A-${suffix}.pdf`;
  link.click();

  URL.revokeObjectURL(url);
}
