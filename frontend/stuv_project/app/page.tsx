import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <main>

      <Navbar />

      <h1 className='text-center py-40 text-3xl'>Home Page</h1>

      <Footer />
      
    </main>
  )
}
