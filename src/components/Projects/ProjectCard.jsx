import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";
import ai from "./ai.avif";
import blog from "./blog.jpg";
import cloth from "./cloth.jpg";

const imageMap = {
  "projects/ai_mock_interview.png": ai,
  "projects/blogspace.png": blog,
  "projects/handwritten_recognition.png": cloth,
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const ProjectCard = ({
  project: { title, imageSrc, impact, context, what, result, skills, demo, source },
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className={styles.container}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      {/* Image */}
      <div className={styles.imageWrapper}>
        <img
          src={imageMap[imageSrc]}
          alt={`Screenshot of ${title}`}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.imageOverlay}>
          <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.overlayBtn}>
            Live Demo ↗
          </a>
          {source && (
            <a href={source} target="_blank" rel="noopener noreferrer" className={styles.overlayBtnSecondary}>
              Source ↗
            </a>
          )}
        </div>
      </div>

      {/* Body */}
      <div className={styles.body}>
        {impact && <span className={styles.impactBadge}>{impact}</span>}
        <h3 className={styles.title}>{title}</h3>

        {/* Narrative — collapsed by default, expandable */}
        <div className={styles.narrative}>
          <div className={styles.narrativeRow}>
            <span className={styles.narrativeTag}>Problem</span>
            <p className={styles.narrativeText}>{context}</p>
          </div>

          {expanded && (
            <>
              <div className={styles.narrativeRow}>
                <span className={styles.narrativeTag}>What I built</span>
                <p className={styles.narrativeText}>{what}</p>
              </div>
              <div className={styles.narrativeRow}>
                <span className={`${styles.narrativeTag} ${styles.resultTag}`}>Result</span>
                <p className={`${styles.narrativeText} ${styles.resultText}`}>{result}</p>
              </div>
            </>
          )}

          <button
            className={styles.expandBtn}
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? "Show less ↑" : "Engineering detail ↓"}
          </button>
        </div>

        {/* Stack */}
        <ul className={styles.skills}>
          {skills.map((skill) => (
            <li key={skill} className={styles.skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
