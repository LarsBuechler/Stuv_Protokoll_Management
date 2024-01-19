import React from 'react'


const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-48 border-2 border-base-200">
                <li><a href='/DocumentOverview'>Document Overview</a></li>
                <li>
                <div>AI Overview</div>
                <ul className="p-2">
                    <li><a href='https://mlflow.org' target='blank'>MLFlow</a></li>
                    <li><a href='https://www.zenml.io' target='blank'>ZenML</a></li>
                </ul>
                </li>
                <li><a href='/UploadOverview'>Upload Overview</a></li>
            </ul>
            </div>
            <a href='/' className="btn btn-ghost transform hover:scale-105 text-3xl font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" id="Ebene_2" data-name="Ebene 2" viewBox='0 0 545 545' height='100%'>
                    <g id="Ebene_1-2" data-name="Ebene 1">
                        <path className="cls-1" fill='#364f78' d="M533.93,245.77L299.24,11.08c-13.89-13.9-35.91-14.72-50.76-2.46-.93.77-1.84,1.59-2.71,2.46L11.07,245.77c-14.77,14.77-14.77,38.7,0,53.47l234.69,234.69c1.16,1.16,2.39,2.24,3.66,3.22,14.83,11.46,36.21,10.39,49.82-3.22l234.69-234.69c14.77-14.77,14.77-38.7,0-53.47ZM292.49,287.62c1.09,2.32,2.73,4.12,4.93,5.41,2.19,1.29,4.83,1.93,7.92,1.93,4.38,0,7.85-1.38,10.43-4.16,2.58-2.77,3.86-6.6,3.86-11.49v-54.09h29.56v54.28c0,8.24-1.87,15.49-5.6,21.73-3.74,6.25-8.89,11.14-15.45,14.68-6.57,3.54-14.17,5.31-22.8,5.31s-16.26-1.77-22.89-5.31c-6.63-3.54-11.82-8.43-15.55-14.68-3.74-6.24-5.6-13.43-5.6-21.54v-54.48h29.56v54.09c0,3.22.55,5.99,1.64,8.31ZM421.05,318.91l-23.76.19-39.79-93.89h31.87l20.09,58.12,20.09-58.12h31.3l-39.79,93.69ZM128.19,256.71c2.19,1.16,5.02,2.19,8.5,3.09,3.48.9,7.15,2,11.01,3.28,3.86,1.29,7.53,3.03,11.01,5.22,3.48,2.19,6.31,5.12,8.5,8.79,2.19,3.67,3.28,8.47,3.28,14.39,0,9.15-3.45,16.42-10.33,21.83-6.89,5.41-16.2,8.11-27.92,8.11-5.54,0-10.98-.71-16.33-2.13-5.34-1.41-10.3-3.44-14.88-6.08-4.57-2.64-8.47-5.7-11.69-9.18l16.81-17c3.09,3.35,6.76,5.96,11.01,7.82,4.25,1.87,8.89,2.8,13.91,2.8,3.48,0,6.15-.51,8.02-1.54,1.87-1.03,2.8-2.45,2.8-4.25,0-2.32-1.13-4.09-3.38-5.31-2.26-1.22-5.12-2.32-8.6-3.28-3.48-.97-7.15-2.03-11.01-3.19-3.86-1.16-7.53-2.77-11.01-4.83-3.48-2.06-6.31-4.93-8.5-8.6-2.19-3.67-3.28-8.34-3.28-14.01,0-6.05,1.55-11.3,4.64-15.74,3.09-4.44,7.47-7.95,13.14-10.53,5.66-2.58,12.3-3.86,19.9-3.86,7.98,0,15.36,1.39,22.12,4.15,6.76,2.77,12.27,6.86,16.52,12.27l-16.81,17c-2.96-3.48-6.28-5.92-9.95-7.34-3.67-1.42-7.24-2.13-10.72-2.13s-5.86.48-7.53,1.45c-1.68.96-2.51,2.35-2.51,4.15,0,1.93,1.09,3.48,3.28,4.64ZM229.41,250.33v68.77h-29.56v-68.77h-21.25v-25.11h21.25v-38.83h29.56v38.83h21.25v25.11h-21.25Z"></path>
                    </g>
                </svg>
                Generator</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-4 dropdown-content mt-3 flex gap-4 ">
            <li className='text-base font-semibold'><a className='hover:scale-105' href='/DocumentOverview'>Document Overview</a></li>
            <li>
                <details>
                <summary className='text-base font-semibold hover:scale-105'>AI Overview</summary>
                <ul className="p-1">
                    <li className='text-sm font-medium'><a href='https://mlflow.org' target='blank'>MLFlow</a></li>
                    <li className='text-sm font-medium'><a href='https://www.bentoml.com' target='blank'>BentoML</a></li>
                    <li className='text-sm font-medium'><a href='https://www.zenml.io' target='blank'>ZenML</a></li>
                </ul>
                </details>
            </li>
            <li className=' text-base font-semibold'><a className='hover:scale-105' href='/UploadOverview'>Upload Overview</a></li>
            <li className=' text-base font-semibold'><a className='hover:scale-105' href='https://readthedocs.org/' target='blank'>Read the Docs</a></li>    
            </ul>
        </div>
        <div className="navbar-end mr-10">
            <div className="avatar online">
                <div className="w-24 rounded-full transform hover:scale-105">
                    <a href='/ProfileOverview'><img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar