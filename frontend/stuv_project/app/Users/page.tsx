import React from 'react'
import Layout from '../components/Layout/layout'


const Users = () => {
  return (
<div>

    <Layout>

    <div className='grid pb-20 pr-20 w-max-[80%] text-base-content'>
        <div className='overflow-hidden rounded-xl bg-base-100 px-8 shadow'>
            <div className="border-b pt-4 pb-8">
                <h1 className="py-2 text-2xl font-semibold">User settings</h1>
                <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="border-b pt-4 pb-8">
                <h2 className="text-lg font-semibold leading-4">Profile Picture</h2>
                <p className="pt-4">Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis neque.</p>
            </div>
            <div className="border-b pt-4 pb-8">
                <h2 className="text-lg font-semibold leading-4">Profile Information</h2>
                <p className="pt-4">Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis neque.</p>
            </div>
        </div>
    </div>
        

    </Layout>

</div>
  )
}

export default Users