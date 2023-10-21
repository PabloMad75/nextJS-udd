import Navbar from '../components/Navbar'
import { Roboto } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Next UDD',
  description: 'Example for Full stack Development JS bootcamp UDD',
  keywords: 'shop, udd, bootcamp, nextJS',
  author: 'aegarmus'
}

const robotoFont = Roboto({
  weight: ['300', '400', '500', '700'],
  styles: ['normal', 'italic'],
  subsets: ['latin']
})

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={robotoFont.className}>

        <Navbar />

        {children}
        
      </body>
    </html>
  )
}
