import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import mikasa from '../../../public/mikasa.png'
function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose  a  Gallery</h1>
      <div className={styles.items}>
        {/* <Link href='/portfolio/illustrations' className={styles.item}>
        <span className={styles.title}>Illustrations</span>
        </Link> */}
        <Link href='/portfolio/websites' className={styles.item}>
        <span className={styles.title}>Websites</span>
        </Link>
        <Link href='/portfolio/applications' className={styles.item}>
        <span className={styles.title}>Machine Learning</span>
        </Link>
        <Image src={mikasa} alt = "" className={styles.img}/>
      </div>
    </div>
  )
}

export default Portfolio
