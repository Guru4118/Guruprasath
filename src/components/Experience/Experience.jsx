import React from "react";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import skillsData from "../../data/skills.json";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

export const Experience = () => {
  return (
    <section className={styles.container} id="skills">
      <p className={styles.sectionLabel}>Technical Skills</p>
      <h2 className={styles.sectionTitle}>What I Work With</h2>

      <div className={styles.categoriesGrid}>
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className={styles.categoryBlock}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <motion.div
              className={styles.pillRow}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  className={styles.pill}
                  variants={pillVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
