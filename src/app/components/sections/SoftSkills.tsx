import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { softSkillIds } from "../../../data/cv";
import { sectionFade } from "../../motion";

export default function SoftSkills() {
  const { t } = useTranslation();

  return (
    <motion.section id="soft-skills" className="section" {...sectionFade}>
      <div className="section-header">
        <h2 className="section-title">{t("softSkills.title")}</h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {softSkillIds.map((id) => (
          <article key={id} className="card">
            <h3 className="card-title">{t(`softSkills.items.${id}.title`)}</h3>
            <p className="card-body mt-3">{t(`softSkills.items.${id}.description`)}</p>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
