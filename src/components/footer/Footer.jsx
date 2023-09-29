
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className={styles.container}>
    <div>@2023 Ashu. All Rights reserved.</div>
    <div className={styles.social}>
      
        <Image src='/1.png' width = {15} height = {15} className={styles.icon} alt="Ashu"/>
        <Image src='/2.png' width = {15} height = {15} className={styles.icon} alt="Ashu"/>
        <Image src='/3.png' width = {15} height = {15} className={styles.icon} alt="Ashu"/>
        <Image src='/4.png' width = {15} height = {15} className={styles.icon} alt="Ashu"/>

  
    </div>
    </div>
  )
}

export default Footer
