import React from 'react'
//import skills from "../../Data/skills.json";
import htmlImage from "../../assets/html.png";
import cssImage from "../../assets/css.png";
import reactImage from "../../assets/react.png";
import jsImage from "../../assets/javascript.jpg";
import javaImage from "../../assets/java.jpg";
import sqlImage from "../../assets/sql.jpg";
import springImage from "../../assets/sprinimg.jpg";
import NextJsImg from "../../assets/Nextjs.jpg";


import styles from "./ABout.module.css";

const About = () => {
    const skills = [

        { title: "React", imageSrc: reactImage },
        { title: "Java", imageSrc: javaImage },
        { title: "Spring Boot", imageSrc: springImage },
        { title: "SQL", imageSrc: sqlImage },
        { title: "Next.js", imageSrc: NextJsImg },
       
        { title: "JavaScript", imageSrc: jsImage }
       
      ];
  return (
    <section className={styles.container} id = "skills">
        <h2 className={styles.title}>Skills and Internship</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {
                    skills.map((skill, id) => {
                        return (<div className={styles.skill} key={id}>
                            <div className={styles.skillImageContainer}><img src={skill.imageSrc} alt={skill.title}/>
                            </div>
                            <p>{skill.title}</p>
                            </div>
                        );
                    })}
                    
                
            </div>

            <ul className={styles.history}>
               <li className={styles.historyItem}>
                <div className={styles.historyItemDetails}>
                    <h3>Full Stack Developer Intern,  Aegion Dynamic Solutions</h3>
                    <p>Feb-2025 - Present</p>
                    <ul>
                        <li>
                        Developed and documented 15+ reusable UI components in Storybook, accelerating UI development and ensuring
                        consistency.
                        </li>
                        <li>  Implemented an OAuth-based authentication system (login, registration, session management), enhancing user
                        security and reducing unauthorized access by 40%.</li>
                    </ul>
                </div>
               </li>
            </ul>
           
        </div>
        
    </section>
  )
}

export default About
