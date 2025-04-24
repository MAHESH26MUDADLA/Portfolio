import React from 'react'
import prImage from "../../assets/project.png";
import styles from "./Project.module.css";


const Project = () => {
    const projects = [
            
             { title: "URL Shortener", imageSrc: prImage,
                description:"A web application built with Spring Boot that converts long URLs into short, shareable links.", 
                skills:["Spring Boot","Java","SQL","React"],
                demo:"https://github.com/MAHESH26MUDADLA/URLshortener",
                source:"https://github.com/MAHESH26MUDADLA/URLshortener"
             },
             { title: "News App", imageSrc: prImage,
                description:"Developed using Next.js, this app fetches news articles from a public API and displays them in a clean, responsive layout.", 
                skills:["HTML",
                    "React","Next.js"],
                demo:"https://newsapp-theta-vert.vercel.app/",
                source:"https://github.com/MAHESH26MUDADLA/newsapp"
             },
             { title: "Dictionary App", imageSrc:prImage,
                description:"The dictionary app is a React.js-based project that allows users to search for and explore word definitions.", 
                skills:["HTML","CSS","JavaScript","React"],
                demo:"https://dictionaryapp-eta.vercel.app/",
                source:"https://github.com/MAHESH26MUDADLA/Dictionaryapi"
             },
             
             
            
          ];
      
  return (
   
    <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>{
            projects.map((project, id) => {
                return (
                    <div className={styles.containerc} key={id}>
        
                        <img className={styles.image} src={project.imageSrc} alt={project.title}/>
                        <h3 className={styles.titlec}>{project.title}</h3> 
                        <p className={styles.description}>{project.description}</p>
                        <ul className={styles.skills}>
                            {project.skills.map((skill, id) => {
                                return <li className={styles.skill} key={id}>{skill}</li>
                            })}
                        </ul>
                        <div className={styles.links}>
                        <a className={styles.link} href={project.demo}>Demo</a>
                        <a className={styles.link} href={project.source}>Source</a>
                        </div>
                        
                    </div>
                );
            })}
            
        </div>
    </section>
  );
}

export default Project
