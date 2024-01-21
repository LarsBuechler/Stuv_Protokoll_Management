import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Search from './components/Search/Search'
import Output from './components/Output/Output'
import Sidebar from './components/Sidebar/Sidebar'

export default function Home() {
  return (
    <main>
    
      <div className='flex flex-wrap'> 

        <div>
          <Navbar />
        </div>


        <div className='w-1/5 pr-4 overflow-y-auto'> 
          <Sidebar />
        </div>

        <div className='w-4/5 pr-4 pl-4 overflow-y-auto'>
          <Search />
          <Output />

        </div>
      
      </div>
         
         
      <div><a className='text-xs text-base-100' href='/LeweFan'>Secrets</a></div>

      <Footer />
      
    </main>
  )
}
