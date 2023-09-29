import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import levi from '../../../public/levii.png'
export const metadata = {
  title:"Ashu Contact Info",
  description:"This is Contact"
}
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
          src={levi}
          alt=""
          fill={true}
          className={styles.image}
          />
        </div>
        <form action="" className={styles.form}>
          <input type="text" placeholder='name' className={styles.input}/>
          <input type="email" placeholder='email' className={styles.input} />
          <textarea cols="30" rows="10" className={styles.textarea}></textarea>
          <Button url="#" text="send"/>
        </form>
      </div>

    </div>
  )
}

export default Contact
