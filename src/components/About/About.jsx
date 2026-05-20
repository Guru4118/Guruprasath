import React from "react";
import styles from "./About.module.css";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Vellore Institute of Technology",
    period: "2023 – 2025",
    cgpa: "8.34",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Vellore Institute of Technology",
    period: "2020 – 2023",
    cgpa: "8.19",
  },
];

const certifications = [
  {
    name: "100 Days of Code — Python Bootcamp",
    issuer: "Udemy · Angela Yu",
    link: "https://www.udemy.com/certificate/UC-f6ae277c-60a7-4432-b235-9cd529d00ffd/",
  },
  {
    name: "Programming with Python",
    issuer: "VIT University",
    link: null,
  },
];

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <p className={styles.sectionLabel}>About Me</p>
      <h2 className={styles.sectionTitle}>Background</h2>

      <div className={styles.grid}>
        <div className={styles.summaryBlock}>
          <p className={styles.summary}>
            I'm a Full-Stack Developer currently at Xerago, Chennai, with close to
            a year of production experience across frontend performance engineering,
            backend API design, Chrome Extension development, and AI integrations.
          </p>
          <p className={styles.summary}>
            My engineering instinct is to understand the problem before reaching for
            a stack. That's why I designed a content pipeline before writing a single
            React component, and why I reached for WebRTC before assuming a polling
            approach would work for real-time voice.
          </p>
          <p className={styles.summary}>
            Outside of work I'm exploring system design, LLM applications, and
            building things that I can actually put a URL next to.
          </p>
          <a
            href="https://drive.google.com/file/d/1xZHXdHlJXhmRmYPtt5cSx5cttzevaBmM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
          >
            Download Resume ↗
          </a>
        </div>

        <div className={styles.infoBlocks}>
          <div className={styles.infoCard}>
            <h3 className={styles.cardTitle}>Education</h3>
            <div className={styles.educationList}>
              {education.map((edu) => (
                <div key={edu.degree} className={styles.eduItem}>
                  <p className={styles.eduDegree}>{edu.degree}</p>
                  <p className={styles.eduInstitution}>{edu.institution}</p>
                  <p className={styles.eduMeta}>
                    {edu.period}&nbsp;·&nbsp;CGPA {edu.cgpa}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.cardTitle}>Certifications</h3>
            <div className={styles.certList}>
              {certifications.map((cert) => (
                <div key={cert.name} className={styles.certItem}>
                  <p className={styles.certName}>
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.certLink}
                      >
                        {cert.name} ↗
                      </a>
                    ) : (
                      cert.name
                    )}
                  </p>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.cardTitle}>Currently focused on</h3>
            <div className={styles.focusList}>
              {[
                "System design & scalable architecture",
                "LLM integrations & prompt engineering",
                "TypeScript across the full stack",
                "Next.js & edge rendering patterns",
              ].map((item) => (
                <div key={item} className={styles.focusItem}>
                  <span className={styles.focusDot} />
                  <span className={styles.focusText}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
