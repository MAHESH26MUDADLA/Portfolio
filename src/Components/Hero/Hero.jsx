import React from 'react'
//import profile from "../../assets/maheshphoto.jpg";
import profile from "../../assets/mah.jpg";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I am Mahesh</h1>
      <p className={styles.description}>
      I am a passionate Front-End Developer with expertise in HTML, CSS, JavaScript, and ReactJS. Alongside my front-end skills, I have a strong foundation in Java and SQL
      </p>
      <a href="mailto:maheshmudadla26@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      
      
    </div>
    <img src={profile} alt="profile" className={styles.heroimg} />
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>

    </section>
    
  )
}

export default Hero
