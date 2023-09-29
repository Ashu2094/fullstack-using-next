import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import aot from 'public/aot.png'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={aot} alt="" fill={true} className={styles.img}/>
        <div className={styles.imgText}>
            <h1 className={styles.imgTitle}>Full Stack Web Developer</h1>
            <h2 className={styles.imgDesc}>Uses MERN stack (NEXT)</h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}> Who am I?</h1>
          <p className={styles.desc}>Hello, everyone! I am Ajay Pratap Kandari, and I have a deep love for crafting immersive digital experiences that bring ideas to life on the web.
          <br/>
          <br/> 

With a strong foundation in both front-end and back-end technologies, I specialize in creating user-friendly, responsive, and visually appealing websites and web applications. I have honed my skills in HTML, CSS, and JavaScript, ensuring that every pixel aligns perfectly and every interaction is intuitive.

On the front-end, I have experience with modern libraries and frameworks like React and NEXT.js, allowing me to build dynamic and engaging user interfaces. I understand the importance of optimizing for performance, accessibility, and SEO to provide the best possible user experience.
<br/>
<br/> 

In the world of back-end development, I'm comfortable working with technologies such as Node.js and Express to build robust server-side logic, APIs, and databases. I enjoy architecting efficient solutions and tackling challenges to ensure seamless data flow and functionality.
            <br/>
            <br/> 
            </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What I do?</h1>
          <p className={styles.desc}>
            Creates beautiful and optimised web-sites which are responsive in nature .
            <br/>
            <br/> - Dynamic Websites 
            <br/>- Fast and Handy 
            <br/>- Mobile 
          </p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About
