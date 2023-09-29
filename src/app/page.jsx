import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/eren.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Image src={Hero} alt = "" className={styles.img}/> */}
      {/* <Image height={500} width={500} src='https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load/' alt="" className={styles.img}/> */}

      <div className={styles.item}>
        <h1 className={styles.title}>This is a next.js build website. Its Cool
        </h1>
        <p className={styles.desc}>
          Nextjs is a popular react framework and it makes use react a lot easier then plain react
        </p>
        <Button url="/portfolio" text="See Our Works"/>
        {/* <button className={styles.button}>See More</button> */}
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt = "" className={styles.img}/>
      </div>

    </div>
  )
}
