import React from "react";
import styles from "./ProjectCard.module.css";
import one from "./image1.png";
import two from "./cloth.jpg";
import three from "./image.png";
import blog from "./blog.jpg";
import ai from "./ai.avif";
import bento from "./bento.jpg";
import framer from "./framer.jpg";


const imageMap = {
  "projects/dairy_product_site.png": one,
  "projects/handwritten_recognition.png": two,
  "projects/floral_recognition.png": three,
  "projects/blogspace.png": blog,
  "projects/ai_mock_interview.png": ai,
  "projects/bento_iphone_accessories.png" :bento,
  "projects/animated_watch_showcase.png":framer,
};

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo } }) => {
  return (
    <div className={styles.container}>
      {/* Wrap image and demo link in a relative container for hover effect */}
      <div className={styles.imageWrapper}>
        <img
          src={imageMap[imageSrc]}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.demoLink}
        >
          Demo ↗
        </a>
      </div>

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
