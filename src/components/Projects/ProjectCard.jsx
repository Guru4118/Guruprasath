import React from "react";
import styles from "./ProjectCard.module.css";
import one from "./image1.png";
import two from "./cloth.jpg";
import three from "./image.png"; // Renamed correctly

// Mapping project names to imported images
const imageMap = {
  "projects/dairy_product_site.png": one,
  "projects/handwritten_recognition.png": two,
  "projects/floral_recognition.png": three,
};

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo } }) => {
  return (
    <div className={styles.container}>
      {/* Demo link top-right corner */}
      <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.demoLink}
      >
        Demo ↗
      </a>

      {/* Use mapped image source */}
      <img src={imageMap[imageSrc]} alt={`Image of ${title}`} className={styles.image} />
      
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
