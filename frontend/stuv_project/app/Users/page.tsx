import React from 'react'
import Navbar from '../components/Layout/Navbar/Navbar'
import Sidebar from '../components/Layout/Sidebar/Sidebar'
import Footer from '../components/Layout/Footer/Footer'


const Users = () => {
  return (
    <div>
    <div className='flex flex-wrap'>

        <div className='z-50'>
            <Navbar />
        </div>


        <div className='w-1/5 pr-4 overflow-y-auto z-10'>
            <Sidebar />
        </div>


        <div className='w-4/5 pr-4 pl-4 overflow-y-auto z-0'>
            <div className='grid items-center justify-center pt-6 pb-20 w-full w-max-[100%]'>
                <div className='overflow-hidden rounded-xl bg-gray-50 px-8 shadow'>
                    <div className="border-b pt-4 pb-8">
                        <h1 className="py-2 text-2xl font-semibold">Users settings</h1>
                        <p className="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="border-b pt-4 pb-8">
                        <h2 className="text-lg font-semibold leading-4 text-slate-700">Profile Picture</h2>
                        <p className="pt-4 text-slate-600">Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis neque.</p>
                    </div>
                    <div className="border-b pt-4 pb-8">
                        <h2 className="text-lg font-semibold leading-4 text-slate-700">Profile Information</h2>
                        <p className="pt-4 text-slate-600">Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis neque.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <Footer />

</div>
  )
}

export default Users