import React from 'react'
import FileInput from '../components/FileInput/FileInput'
import Layout from '../components/Layout/layout'


const UploadOverview = () => {
  return (
  <div>

    <Layout>

      <div className='text-xl font-bold text-center text-base-content pt-10 pb-20'>Upload neuer Dateien</div>
      <FileInput />
      
    </Layout>

  </div>
  )
}

export default UploadOverview