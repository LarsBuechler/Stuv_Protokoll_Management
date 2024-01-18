import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import FileInput from './FileInput/FileInput'


const UploadOverview = () => {
  return (
    <div>
        <Navbar />
        
        <h1 className='text-center pt-20 pb-10 text-3xl text-neutral'>Upload neuer Dateien</h1>

        <FileInput />

        <div className='py-20'></div>

        <Footer />
    </div>
  )
}

export default UploadOverview