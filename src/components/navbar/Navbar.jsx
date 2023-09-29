"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
]

function Navbar() {
    const linkStyles = {
        textDecoration: 'none',
        color: '#556b2f',
        // color:
        transition: 'color 0.3s ease', // Adding a transition for a smooth effect
      };
    const hoverStyles = {
        color: 'green', // Change color on hover
      };
    const session = useSession();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Ashu</Link>
      
      <div className={styles.links}>
      <DarkModeToggle/>
        {
            links.map((link)=>{
                return <Link key={link.id} onMouseOver={(e) => Object.assign(e.target.style, hoverStyles)} onMouseOut={(e) => Object.assign(e.target.style, linkStyles)} href={link.url} className={styles.link}>{link.title}</Link>
            })
        }
       {
        session.status === "authenticated" && (
            <button className={styles.logout} onClick={signOut}>Logout</button>
        )
       }
      </div>
    </div>
  )
}

export default Navbar
