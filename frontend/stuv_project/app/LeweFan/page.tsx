import React from 'react'
import Layout from '../components/Layout/layout'
import Video from 'next-video'
import Nackt_und_wild from '@/videos/Nackt_und_wild.mp4'

const page = () => {
  return (
    
    <Layout>
      <div className='text-center text-5xl text-primary pt-20 pr-10'>Lewe is awesome: hear for yourself!</div>
      <Video src={Nackt_und_wild} style={{maxWidth: '42rem'} } />
    </Layout>
  )
}

export default page