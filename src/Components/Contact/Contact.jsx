import React from 'react'

import styles from "./Contact.module.css";

import emailImage from "../../assets/emailIcon.png";
import linkedinImage from "../../assets/linkedinIcon.png";
import githubImage from "../../assets/githubIcon.png";  

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>
            Contact
            </h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={emailImage}/>
                <a href="mailto:maheshmudadla26@email.com">maheshmudadla26@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={linkedinImage}/>
                <a href="https://www.linkedin.com/in/mahesh-mudadla-aa5551253/">linkedin.com</a>
            </li>
            <li className={styles.link}>
                <img src={githubImage}/>
                <a href="https://github.com/MAHESH26MUDADLA">github.com</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
