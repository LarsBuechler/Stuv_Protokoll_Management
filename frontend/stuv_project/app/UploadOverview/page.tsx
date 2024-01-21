import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
import FileInput from '../components/FileInput/FileInput'


const UploadOverview = () => {
  return (
    <div>
      <div className='flex flex-wrap'>

        <div className='relative z-50'>
          <Navbar />
        </div>

        <div className='w-1/5 pr-4 overflow-y-auto'> 
          <Sidebar />
        </div>
        
        <div className='w-4/5 pr-4 pl-4 py-20 overflow-y-auto relative z-0'>
          <div className='text-xl font-bold text-center text-neutral pb-10'>Upload neuer Dateien</div>
          <FileInput />
        </div>

      </div>

      <div className='pt-20'>
        <Footer />
      </div>

    </div>
  )
}

export default UploadOverview