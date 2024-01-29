import React from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'



const Layout = ({ children, }: {children: React.ReactNode}) => {
    return(

    <div className='grid grid-cols-8 gap-x-2 gap-y-5'> 

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
    
  )
}

export default Layout