import React from "react";
import styles from "./Hero.module.css";
import { useTypingEffect } from "../../hooks/useTypingEffect";

const ACHIEVEMENTS = [
  { value: "50→90+", label: "Lighthouse Score" },
  { value: "~40%", label: "Faster Load Time" },
  { value: "45+", label: "React Components" },
];

export const Hero = () => {
  const typedName = useTypingEffect("Guruprasath", 180, 6000);

  return (
    <section className={styles.container}>
      <div className={styles.content}>

        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Open to full-stack &amp; frontend roles
        </div>

        <h1 className={styles.title}>
          I'm <span className={styles.name}>{typedName}</span>
          <span className={styles.cursor}>|</span>
        </h1>

        <p className={styles.role}>
          Full-Stack Developer &nbsp;·&nbsp; Xerago, Chennai
        </p>

        <p className={styles.description}>
          I turn performance problems into measurable wins and ship AI-powered 
          products that work in production. At Xerago I lifted a client's Lighthouse 
          score from 50 to 90+, built a Chrome Extension that replaced Adobe's 
          enterprise analytics tooling, and delivered a real-time AI voice 
          interview platform end-to-end.
        </p>

        <div className={styles.achievements}>
          {ACHIEVEMENTS.map(({ value, label }) => (
            <div key={label} className={styles.achievementCard}>
              <span className={styles.achievementValue}>{value}</span>
              <span className={styles.achievementLabel}>{label}</span>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <a href="#experience" className={styles.btnPrimary}>
            See My Work
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1xZHXdHlJXhmRmYPtt5cSx5cttzevaBmM/view?usp=sharing"
            className={styles.btnSecondary}
          >
            Resume ↗
          </a>
        </div>
      </div>

      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />
    </section>
  );
};
