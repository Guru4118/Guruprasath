import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";

const skills = [
  "Java", "C", "Python", "JavaScript", "HTML+CSS",
  "Python Libraries", "ReactJs", "VSCode", "Git",
  "GitHub", "Postman", "Express.js", "Tailwind CSS",
  "MongoDB", "MySQL"
];

export const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 1000); // Change background every second

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>SKILLS</h2>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.skillPill}
            animate={{ backgroundColor: index === activeIndex ? "#ffffff" : "#000000", color: index === activeIndex ? "#000000" : "#ffffff" }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
