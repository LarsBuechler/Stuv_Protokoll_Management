import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Layout/Navbar/Navbar'
import Sidebar from './components/Layout/Sidebar/Sidebar'
import Footer from './components/Layout/Footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stuv Generator',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" data-theme='cupcake'>
      <body className={inter.className}>{children}

          <div className='grid grid-cols-8 gap-x-2 gap-y-4'> 

            <div className='col-span-8 z-50'>
              <Navbar />
            </div>

            <div className='col-span-2'> 
              <Sidebar />
            </div>

            <div className='col-span-6'>
              {children}
            </div>

            <div className='col-start-1 col-end-9'>
              <Footer />
            </div>

          </div>

      </body>
    </html>
  )
}
