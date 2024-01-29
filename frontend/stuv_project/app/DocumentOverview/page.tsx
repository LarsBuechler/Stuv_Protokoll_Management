import React from 'react'
import Layout from '../components/Layout/layout'

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

    <Layout>
    

      <div className="overflow-x-auto pt-5 pb-10 mx-5 relative z-0">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr className='text-lg text-base-content'>
              <td>ID</td>
              <td>Name</td>
              <td>E-Mail</td>
            </tr>
          </thead> 
          <tbody className='text-base-content'>
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

    </Layout>
    
  </div>
  
  )
}

export default DocumentOverview