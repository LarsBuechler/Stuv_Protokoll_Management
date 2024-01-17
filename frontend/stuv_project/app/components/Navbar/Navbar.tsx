import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-48">
                <li><a href='/DocumentOverview'>Document Overview</a></li>
                <li>
                <a>AI Overview</a>
                <ul className="p-2">
                    <li><a href='https://mlflow.org' target='blank'>MLFlow</a></li>
                    <li><a href='https://www.zenml.io' target='blank'>ZenML</a></li>
                </ul>
                </li>
                <li><a href='/UploadOverview'>Upload Overview</a></li>
            </ul>
            </div>
            <a href='/' className="btn btn-ghost text-3xl font-bold">Stuv Generator</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal dropdown-content mt-3 flex gap-4">
            <li className='text-base font-semibold'><a href='/DocumentOverview'>Document Overview</a></li>
            <li>
                <details>
                <summary className='text-base font-semibold'>AI Overview</summary>
                <ul className="p-1">
                    <li className='text-sm font-medium'><a href='https://mlflow.org' target='blank'>MLFlow</a></li>
                    <li className='text-sm font-medium'><a href='https://www.zenml.io' target='blank'>ZenML</a></li>
                </ul>
                </details>
            </li>
            <li className=' text-base font-semibold'><a href='/UploadOverview'>Upload Overview</a></li>
            </ul>
        </div>
        <div className="navbar-end">
            <a className='text-base font-semibold btn' href='https://readthedocs.org/' target='blank'>Read the Docs</a>
        </div>
    </div>
  )
}

export default Navbar