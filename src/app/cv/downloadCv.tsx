import { pdf } from "@react-pdf/renderer";
import type { TFunction } from "i18next";
import { educationIds, experienceIds, projectItems, skillCategories, softSkillIds } from "../../data/cv";
import CvDocument, { type CvContact, type CvContent } from "./CvDocument";

const contactItems = [
  {
    id: "location",
    href: "https://www.google.com/maps/search/?api=1&query=Santos,+Brasil",
    valueKey: "contacts.locationValue" as const,
  },
  {
    id: "email",
    href: "mailto:mateusfmfm@outlook.com",
    value: "mateusfmfm@outlook.com",
  },
  {
    id: "telegram",
    href: "https://t.me/mateusfmfm",
    value: "@mateusfmfm",
  },
  {
    id: "github",
    href: "https://github.com/mateusfmfm",
    value: "mateusfmfm",
  },
] as const;

const whatsappContact = {
  id: "whatsapp",
  href: "https://wa.me/5513991855979",
  value: "+55 13 99185-5979",
} as const;

export function buildCvContent(t: TFunction, language: string): CvContent {
  const contacts: CvContact[] = contactItems.map((contact) => ({
    label: contact.id === "location" ? "" : t(`contacts.${contact.id}`),
    value: "valueKey" in contact ? t(contact.valueKey) : contact.value,
    href: contact.href,
  }));

  if (language.startsWith("pt")) {
    contacts.splice(2, 0, {
      label: t("contacts.whatsapp"),
      value: whatsappContact.value,
      href: whatsappContact.href,
    });
  }

  return {
    name: "Mateus Félix",
    title: t("intro.title"),
    bio: t("intro.bio"),
    contacts,
    skillsTitle: t("skills.title"),
    skillCategories: skillCategories.map((category) => ({
      title: t(`skills.categories.${category.id}`),
      items: [...category.items],
    })),
    experiencesTitle: t("experiences.title"),
    experiences: experienceIds.map((id) => ({
      name: t(`experiences.items.${id}.name`),
      role: t(`experiences.items.${id}.role`),
      time: t(`experiences.items.${id}.time`),
      description: t(`experiences.items.${id}.description`),
    })),
    projectsTitle: t("projects.title"),
    projects: projectItems.map((project) => ({
      name: t(`projects.${project.id}.name`),
      stacks: [...project.stacks],
      description: t(`projects.${project.id}.description`),
    })),
    educationTitle: t("education.title"),
    education: educationIds.map((id) => ({
      degree: t(`education.items.${id}.degree`),
      institution: t(`education.items.${id}.institution`),
      time: t(`education.items.${id}.time`),
    })),
    softSkillsTitle: t("softSkills.title"),
    softSkills: softSkillIds.map((id) => ({
      title: t(`softSkills.items.${id}.title`),
      description: t(`softSkills.items.${id}.description`),
    })),
  };
}

export async function downloadCv(t: TFunction, language: string) {
  const content = buildCvContent(t, language);
  const blob = await pdf(<CvDocument content={content} />).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const suffix = language.startsWith("pt") ? "pt-BR" : "en";

  link.href = url;
  link.download = `Mateus-Felix-CV-${suffix}.pdf`;
  link.click();

  URL.revokeObjectURL(url);
}
