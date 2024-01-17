import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const page = () => {
  return (
    <div>
        <Navbar />

        <h1 className='text-center py-40 text-3xl'>Document Overview</h1>

        <Footer />
    </div>
  )
}

export default page