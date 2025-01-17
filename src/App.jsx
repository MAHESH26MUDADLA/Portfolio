import { useState } from 'react'
import styles from './App.module.css'

import Hero from './Components/Hero/Hero'
import Navbar from './Components/nav/Navbar'
import About from './Components/About/About'
import Project from './Components/Projects/Project'
import Contact from './Components/Contact/Contact'




function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles.App}>
        <Navbar/>
        <Hero/>
        <About/>
        <Project/>
        <Contact/>
      </div>
    </>
  )
}

export default App
