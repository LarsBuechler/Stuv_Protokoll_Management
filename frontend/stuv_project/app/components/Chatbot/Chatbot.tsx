import React from 'react'

const Chatbot = () => {
  return (
<div className='pb-8'> 
<div className='grid grid-flow-rows gap-y-10 rounded p-10 shadow shadow-blue-gray-900/5 ml-12 mr-16'>

    <div className='text-center ml-20 mr-24'>
        <input type="text" placeholder="Wie kann ich dir helfen?" className="input input-bordered input-secondary w-[100%]" />
    </div>

    <div className='mx-40'>
        <div className="chat chat-start">
            <div className="chat-bubble">It's over Anakin, <br/>I have the high ground.</div>
        </div>
        <div className="chat chat-end">
            <div className="chat-bubble">You underestimate my power!</div>
        </div>
    </div>

</div>
</div>
  )
}

export default Chatbot