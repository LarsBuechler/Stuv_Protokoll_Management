import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Search from './components/Search/Search'
import Output from './components/Output/Output'


export default function Home() {
  return (
    <main>

      <Navbar />

      <div className='text-3xl ml-10 text-center text-bold text-neutral pt-10 pb-20'>Homepage</div>

      <Search />

      <Output />
    
      <Footer />
      
    </main>
  )
}
