import React from 'react'
import Navbar from '../components/Layout/Navbar/Navbar'
import Footer from '../components/Layout/Footer/Footer'
import Sidebar from '../components/Layout/Sidebar/Sidebar'

interface Comment{
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

const DocumentOverview = async () => {
  
  const res = await fetch('https://jsonplaceholder.typicode.com/comments')
  const comments: Comment[] = (await res.json()).slice(0, 15);
  
  return (
    <div>
        <div className='flex flex-wrap'> 

          <div className='relative z-50'>
            <Navbar />
          </div>

          <div className='w-1/5 pr-4 overflow-y-auto'> 
            <Sidebar />
          </div>


  

          <div className='w-4/5 pr-4 pl-4 overflow-y-auto relative z-0'>

            <div className="overflow-x-auto mt-20 mb-10 mx-20 relative z-0">
              <table className="table table-xs table-pin-rows table-pin-cols">
                <thead>
                  <tr className='text-lg text-center text-neutral'>
                    <td>ID</td>
                    <td>Name</td>
                    <td>E-Mail</td>
                  </tr>
                </thead> 
                <tbody className='text-primary-content'>
                  {comments.map(comment => <tr key={comment.id}>
                    <td>{comment.id}</td>
                    <td>{comment.name}</td>  
                    <td>{comment.email}</td>
                  </tr>)}
                </tbody>
              </table>
            </div>

            <div className="join flex items-center justify-center pb-20">
              <button className="join-item btn">«</button>
              <button className="join-item btn">Page 1</button>
              <button className="join-item btn">»</button>
            </div>

          </div>

        </div>

        <Footer />
    </div>
  )
}

export default DocumentOverview