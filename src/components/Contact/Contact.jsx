import React from "react";
import styles from "./Contact.module.css";

const links = [
  {
    icon: "✉",
    label: "Email",
    display: "gprasath103@gmail.com",
    href: "mailto:gprasath103@gmail.com",
  },
  {
    icon: "in",
    label: "LinkedIn",
    display: "linkedin.com/in/guruprasath103",
    href: "https://www.linkedin.com/in/guruprasath103/",
  },
  {
    icon: "gh",
    label: "GitHub",
    display: "github.com/Guru4118",
    href: "https://github.com/Guru4118",
  },
];

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>Get In Touch</p>
        <h2 className={styles.heading}>Let's Work Together</h2>
        <p className={styles.sub}>
          I'm actively looking for full-stack and frontend engineering roles.
          If you're working on something interesting, I'd like to hear about it.
        </p>

        <div className={styles.links}>
          {links.map(({ icon, label, display, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={styles.linkItem}
            >
              <span className={styles.linkIcon}>{icon}</span>
              <span className={styles.linkText}>
                <span className={styles.linkLabel}>{label}</span>
                <span className={styles.linkDisplay}>{display}</span>
              </span>
              <span className={styles.linkArrow}>↗</span>
            </a>
          ))}
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Guruprasath A &nbsp;·&nbsp; Built with React + Vite
        </p>
      </div>
    </footer>
  );
};
