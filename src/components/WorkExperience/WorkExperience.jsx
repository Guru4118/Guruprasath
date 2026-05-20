import React from "react";
import { motion } from "framer-motion";
import styles from "./WorkExperience.module.css";
import workData from "../../data/workExperience.json";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

export const WorkExperience = () => {
  const company = workData[0];

  return (
    <section className={styles.container} id="experience">
      <p className={styles.sectionLabel}>Work Experience</p>
      <h2 className={styles.sectionTitle}>Where I've Worked</h2>

      <div className={styles.companyCard}>
        <div className={styles.companyHeader}>
          <div>
            <h3 className={styles.companyName}>{company.company}</h3>
            <p className={styles.companyMeta}>
              {company.role} &nbsp;·&nbsp; {company.location}
            </p>
          </div>
          <span className={styles.period}>{company.period}</span>
        </div>

        <div className={styles.projectGrid}>
          {company.projects.map((project, i) => (
            <motion.div
              key={project.name}
              className={styles.projectCard}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariants}
            >
              <div className={styles.metricBadge}>
                <span className={styles.metricValue}>{project.metric}</span>
                <span className={styles.metricSub}>{project.metricSub}</span>
              </div>

              <h4 className={styles.projectName}>{project.name}</h4>

              <div className={styles.narrative}>
                <div className={styles.narrativeRow}>
                  <span className={styles.narrativeTag}>Problem</span>
                  <p className={styles.narrativeText}>{project.context}</p>
                </div>
                <div className={styles.narrativeRow}>
                  <span className={styles.narrativeTag}>What I built</span>
                  <p className={styles.narrativeText}>{project.what}</p>
                </div>
                <div className={`${styles.narrativeRow} ${styles.resultRow}`}>
                  <span className={`${styles.narrativeTag} ${styles.resultTag}`}>Result</span>
                  <p className={styles.narrativeText}>{project.result}</p>
                </div>
              </div>

              <div className={styles.stackRow}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.stackPill}>{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
