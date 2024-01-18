import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Search from './components/Search/Search'
import Output from './components/Output/Output'


export default function Home() {
  return (
    <main>

      <Navbar />

      <Search />

      <Output />
    
      <Footer />
      
    </main>
  )
}
