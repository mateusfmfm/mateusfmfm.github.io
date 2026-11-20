import { Document, Font, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

Font.registerHyphenationCallback((word) => [word]);

export type CvExperience = {
  name: string;
  role: string;
  time: string;
  bullets: string[];
};

export type CvProject = {
  name: string;
  stacks: string[];
  description: string;
  href?: string;
};

export type CvEducation = {
  degree: string;
  institution: string;
  time: string;
  description?: string;
};

export type CvContactPart = {
  text: string;
  href: string;
};

export type CvSkillCategory = {
  title: string;
  items: string[];
};

export type CvContent = {
  name: string;
  title: string;
  bio: string;
  summaryTitle: string;
  contactLines: CvContactPart[][];
  skillsTitle: string;
  skillCategories: CvSkillCategory[];
  experiencesTitle: string;
  experiences: CvExperience[];
  projectsTitle: string;
  projects: CvProject[];
  educationTitle: string;
  education: CvEducation[];
  softSkillsTitle: string;
  softSkills: string[];
};

const mm = (value: number) => (value * 72) / 25.4;
const bodyLeading = 12 / 9.5;

const styles = StyleSheet.create({
  page: {
    paddingTop: mm(15),
    paddingBottom: mm(15),
    paddingHorizontal: mm(18),
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: "#1a202c",
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 18,
    color: "#1a365d",
    textAlign: "center",
    marginBottom: 3,
  },
  contactLine: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: "#4a5568",
    textAlign: "center",
    marginBottom: 3,
  },
  contactLineLast: {
    marginBottom: 6,
  },
  contactLink: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: "#4a5568",
    textDecoration: "none",
  },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 12,
    color: "#1a365d",
    marginTop: 10,
    marginBottom: 4,
  },
  body: {
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: "#1a202c",
    lineHeight: bodyLeading,
    marginBottom: 2,
  },
  skillLine: {
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: "#1a202c",
    lineHeight: bodyLeading,
    marginBottom: 2,
  },
  skillLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9.5,
    color: "#1a202c",
  },
  jobTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    color: "#1a202c",
    marginTop: 8,
    marginBottom: 1,
  },
  meta: {
    fontFamily: "Helvetica-Oblique",
    fontSize: 9,
    color: "#4a5568",
    marginBottom: 3,
  },
  bullet: {
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: "#1a202c",
    lineHeight: bodyLeading,
    marginLeft: 10,
    marginBottom: 1,
  },
});

function ContactLine({
  parts,
  isLast,
}: {
  parts: CvContactPart[];
  isLast: boolean;
}) {
  return (
    <Text style={isLast ? [styles.contactLine, styles.contactLineLast] : styles.contactLine}>
      {parts.map((part, index) => (
        <Text key={part.href}>
          {index > 0 ? " | " : ""}
          <Link src={part.href} style={styles.contactLink}>
            {part.text}
          </Link>
        </Text>
      ))}
    </Text>
  );
}

export default function CvDocument({ content }: { content: CvContent }) {
  return (
    <Document
      title={`${content.name} — CV`}
      author={content.name}
      subject="Curriculum Vitae"
    >
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{content.name}</Text>
        {content.contactLines.map((line, index) => (
          <ContactLine
            key={line.map((part) => part.href).join("|")}
            parts={line}
            isLast={index === content.contactLines.length - 1}
          />
        ))}

        <Text style={styles.sectionTitle}>{content.summaryTitle}</Text>
        <Text style={styles.body}>{content.bio}</Text>

        <Text style={styles.sectionTitle}>{content.skillsTitle}</Text>
        {content.skillCategories.map((category) => (
          <Text key={category.title} style={styles.skillLine}>
            <Text style={styles.skillLabel}>{category.title}: </Text>
            {category.items.join(", ")}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>{content.experiencesTitle}</Text>
        {content.experiences.map((experience) => (
          <View key={`${experience.name}-${experience.time}`}>
            <Text style={styles.jobTitle}>{experience.role}</Text>
            <Text style={styles.meta}>
              {experience.name} | {experience.time}
            </Text>
            {experience.bullets.map((bullet) => (
              <Text key={bullet} style={styles.bullet}>
                • {bullet}
              </Text>
            ))}
          </View>
        ))}

        <Text style={styles.sectionTitle}>{content.projectsTitle}</Text>
        {content.projects.map((project) => (
          <View key={project.name}>
            {project.href ? (
              <Link src={project.href} style={styles.jobTitle}>
                <Text style={styles.jobTitle}>{project.name}</Text>
              </Link>
            ) : (
              <Text style={styles.jobTitle}>{project.name}</Text>
            )}
            {project.stacks.length > 0 && (
              <Text style={styles.body}>{project.stacks.join(" · ")}</Text>
            )}
            <Text style={styles.body}>{project.description}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>{content.educationTitle}</Text>
        {content.education.map((item) => (
          <View key={`${item.degree}-${item.time}`}>
            <Text style={styles.jobTitle}>{item.degree}</Text>
            <Text style={styles.meta}>
              {item.institution} | {item.time}
            </Text>
            {item.description ? <Text style={styles.body}>{item.description}</Text> : null}
          </View>
        ))}

        <Text style={styles.sectionTitle}>{content.softSkillsTitle}</Text>
        {content.softSkills.map((bullet) => (
          <Text key={bullet} style={styles.bullet}>
            • {bullet}
          </Text>
        ))}
      </Page>
    </Document>
  );
}
