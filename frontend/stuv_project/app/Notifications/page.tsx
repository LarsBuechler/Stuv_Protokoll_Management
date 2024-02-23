'use client';
import React, { useState } from 'react';
import Layout from '../components/Layout/layout';


const Notifications = () => {

    const [isChecked, setIsChecked] = useState(false);
    

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

  return (

<div>
    <Layout>

    <div className='grid pb-20 pr-20 w-max-[80%]'>
        <div className='overflow-hidden rounded-xl bg-base-100 px-8 shadow'>

        <div className="border-b pt-4 pb-8">
            <h1 className="py-2 text-2xl text-base-content font-semibold">Notification settings</h1>
            <p className="text-base-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="grid grid-cols-6 border-b py-6">
            <div className='col-start-1 col-end-4'>
                <h2 className="text-lg font-semibold leading-4 text-base-content">Comments</h2>
                <p className="pt-4 text-base-content">Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis neque.</p>
            </div>
            <div className="col-start-6 col-end-6">
                <div className="flex flex-col gap-3">
                    <label htmlFor="push" className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} value="" id="push" className="peer sr-only" />
                        <div className="peer h-6 w-11 rounded-full bg-accent after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-white after:bg-white after:transition-all after:content-[''] peer-checked:bg-secondary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                        <span className="ml-3 text-sm font-medium text-base-content">Push</span>
                    </label>
                    <label htmlFor="email" className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} value="" id="email" className="peer sr-only" />
                        <div className="peer h-6 w-11 rounded-full bg-accent after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-white after:bg-white after:transition-all after:content-[''] peer-checked:bg-secondary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                        <span className="ml-3 text-sm font-medium text-base-content">Email</span>
                    </label>
                    <label htmlFor="sms" className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} value="" id="sms" className="peer sr-only" />
                        <div className="peer h-6 w-11 rounded-full bg-accent after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-white after:bg-white after:transition-all after:content-[''] peer-checked:bg-secondary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                        <span className="ml-3 text-sm font-medium text-base-content">SMS</span>
                    </label>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-6 border-b py-6">
            <div className="col-start-1 col-end-4">
                <h2 className="text-lg font-semibold leading-4 text-base-content">Reminders</h2>
                <p className="pt-4 text-base-content">Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis neque.</p>
            </div>
            <div className="col-start-6 col-end-6">
                <div className="flex flex-col gap-3">
                    <label htmlFor="push" className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} value="" id="push" className="peer sr-only" />
                        <div className="peer h-6 w-11 rounded-full bg-accent after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-white after:bg-white after:transition-all after:content-[''] peer-checked:bg-secondary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                        <span className="ml-3 text-sm font-medium text-base-content">Push</span>
                    </label>
                    <label htmlFor="email" className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} value="" id="email" className="peer sr-only" />
                        <div className="peer h-6 w-11 rounded-full bg-accent after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-white after:bg-white after:transition-all after:content-[''] peer-checked:bg-secondary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                        <span className="ml-3 text-sm font-medium text-base-content">Email</span>
                    </label>
                    <label htmlFor="sms" className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} value="" id="sms" className="peer sr-only" />
                        <div className="peer h-6 w-11 rounded-full bg-accent after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-white after:bg-white after:transition-all after:content-[''] peer-checked:bg-secondary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                        <span className="ml-3 text-sm font-medium text-base-content">SMS</span>
                    </label>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-6 border-b py-6">
            <div className="col-start-1 col-end-4">
                <h2 className="text-lg font-semibold leading-4 text-base-content">Updates</h2>
                <p className="pt-4 text-base-content">Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis neque.</p>
            </div> 
            <div className="col-start-6 col-end-6">
                <div className="flex flex-col gap-3">
                    <label htmlFor="push" className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} value="" id="push" className="peer sr-only" />
                        <div className="peer h-6 w-11 rounded-full bg-accent after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-white after:bg-white after:transition-all after:content-[''] peer-checked:bg-secondary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                        <span className="ml-3 text-sm font-medium text-base-content">Push</span>
                    </label>
                    <label htmlFor="email" className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} value="" id="email" className="peer sr-only" />
                        <div className="peer h-6 w-11 rounded-full bg-accent after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-white after:bg-white after:transition-all after:content-[''] peer-checked:bg-secondary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                        <span className="ml-3 text-sm font-medium text-base-content">Email</span>
                    </label>
                    <label htmlFor="sms" className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} value="" id="sms" className="peer sr-only" />
                        <div className="peer h-6 w-11 rounded-full bg-accent after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-white after:bg-white after:transition-all after:content-[''] peer-checked:bg-secondary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                        <span className="ml-3 text-sm font-medium text-base-content">SMS</span>
                    </label>
                </div>
            </div>
        </div>
        </div>
    </div>
    
    </Layout>
    
</div>
       
  )
}

export default Notifications