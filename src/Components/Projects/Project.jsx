import React from 'react'
import prImage from "../../assets/project.png";
import styles from "./Project.module.css";


const Project = () => {
    const projects = [
            { title: "Dictionary App", imageSrc:prImage,
                description:"The dictionary app is a React.js-based project that allows users to search for and explore word definitions.", 
                skills:["HTML","CSS","JavaScript","React"],
                demo:"https://dictionaryapp-eta.vercel.app/",
                source:"https://github.com/MAHESH26MUDADLA/Dictionaryapi"
             },
             { title: "ToDoList", imageSrc: prImage,
                description:"The TodoList app is a React.js-based project designed to help users organize and manage tasks efficiently.", 
                skills:["HTML","CSS","JavaScript","React"],
                demo:"https://todo-list-react-one-alpha.vercel.app/",
                source:"https://github.com/MAHESH26MUDADLA/TodoListReact"
             },
             { title: "BlogApp", imageSrc: prImage,
                description:"The Blog app is a React.js project that allows users to read, create, and manage blog posts.", 
                skills:["HTML","CSS","JavaScript",
                    "React"],
                demo:"https://blogapp-gamma-seven.vercel.app/",
                source:"https://github.com/MAHESH26MUDADLA/Blogapp"
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
