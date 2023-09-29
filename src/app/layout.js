// "use client"
import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Ashu',
  description: 'Nextjs project',
  //so strong seo
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* whatever we write or whatever components we use here will be used as for every component


      we can creat a layout file for every individual component */}
      <body className={inter.className}>
        <ThemeProvider>
          
         <AuthProvider>
         <div className="container">
          <Navbar/>
          {children}
          <Footer/>
          </div>
         </AuthProvider>
          
          
          
        </ThemeProvider>
        </body>
    </html>
  )
}
