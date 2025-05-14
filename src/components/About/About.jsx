import React from "react";
import styles from "./About.module.css";
import aboutImage from "./undraw_in-the-zone_07y7.svg";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* Main content area for image and education (horizontal on mobile) */}
        <div className={styles.mainContent}>
          {/* Left Side - SVG Image */}
          <div className={styles.imageSection}>
            <img
              src={aboutImage}
              alt="Working in the zone"
              className={styles.aboutImage}
            />
          </div>
          {/* Right Side - Education */}
          <div className={styles.education}>
            <h3>Education</h3>
            <p>
              <strong>• Master Of Computer Applications (MCA)</strong>
            </p>
            <p>
              <em>Vellore Institute of Technology, Vellore</em>
            </p>
            <p>
              2023 – 2025 | <strong>CGPA:</strong> 8.19
            </p>

            <p>
              <strong>• Bachelor Of Computer Applications (BCA)</strong>
            </p>
            <p>
              <em>Vellore Institute of Technology, Vellore</em>
            </p>
            <p>
              2020 – 2023 | <strong>CGPA:</strong> 8.19
            </p>
          </div>
        </div>

        {/* Separate layout for Certifications (below image/education) */}
        <div className={styles.certifications}>
          <h3>Certifications</h3>
          <p>
            <strong>• 100 Days of Code Certificate </strong> – Udemy{" "}
            <a
              href="https://www.udemy.com/certificate/UC-f6ae277c-60a7-4432-b235-9cd529d00ffd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              (link)
            </a>
          </p>
          <p>
            <strong>• Programming with Python</strong> – VIT
          </p>
        </div>
      </div>
    </section>
  );
};
