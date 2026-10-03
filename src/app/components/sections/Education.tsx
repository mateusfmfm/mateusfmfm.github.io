import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { educationIds } from "../../../data/cv";
import { sectionFade } from "../../motion";

export default function Education() {
  const { t } = useTranslation();

  return (
    <motion.section id="education" className="section" {...sectionFade}>
      <div className="section-header">
        <h2 className="section-title">{t("education.title")}</h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {educationIds.map((id) => (
          <article key={id} className="card">
            <h3 className="card-title">{t(`education.items.${id}.degree`)}</h3>
            <span className="company-role">{t(`education.items.${id}.institution`)}</span>
            <span className="company-time">{t(`education.items.${id}.time`)}</span>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
