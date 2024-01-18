import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

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
        <Navbar />

        <div className='text-3xl ml-10 text-center text-bold text-neutral pt-10'>Document Overview</div>

        <div className=" overflow-x-auto mt-20 mb-10 mx-40">
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
          <button className="join-item btn">Page 2</button>
          <button className="join-item btn">»</button>
        </div>

        

        <Footer />
    </div>
  )
}

export default DocumentOverview