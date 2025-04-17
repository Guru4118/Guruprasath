import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import email from "./emailIcon.png";
import linkedin from "./linkedinIcon.png";



export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="email" />
          <a href="mailto:gprasath103@gmail.com">gprasath103@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src= {linkedin} alt="linkedin logo" />
          <a target="new" href="https://www.linkedin.com/in/guruprasath103/">Guruprasath</a>
        </li>
        
      </ul>
    </footer>
  );
};
