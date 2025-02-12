'use client';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


const Navbar = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };

  return (
    <div className='grid grid-cols-8 gap-4 pt-4'>

        <div className='col-span-2'>
            <Link href='/' className="btn btn-ghost bg-base-100 text-base-content active:bg-neutral active:text-base-100 transform hover:scale-105 hover:bg-base-200 text-3xl font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" id="Ebene_2" data-name="Ebene 2" viewBox='0 0 545 545' height='100%'>
                    <g id="Ebene_1-2" data-name="Ebene 1">
                        <path className="cls-s" fill='#364f78' d="M533.93,245.77L299.24,11.08c-13.89-13.9-35.91-14.72-50.76-2.46-.93.77-1.84,1.59-2.71,2.46L11.07,245.77c-14.77,14.77-14.77,38.7,0,53.47l234.69,234.69c1.16,1.16,2.39,2.24,3.66,3.22,14.83,11.46,36.21,10.39,49.82-3.22l234.69-234.69c14.77-14.77,14.77-38.7,0-53.47ZM292.49,287.62c1.09,2.32,2.73,4.12,4.93,5.41,2.19,1.29,4.83,1.93,7.92,1.93,4.38,0,7.85-1.38,10.43-4.16,2.58-2.77,3.86-6.6,3.86-11.49v-54.09h29.56v54.28c0,8.24-1.87,15.49-5.6,21.73-3.74,6.25-8.89,11.14-15.45,14.68-6.57,3.54-14.17,5.31-22.8,5.31s-16.26-1.77-22.89-5.31c-6.63-3.54-11.82-8.43-15.55-14.68-3.74-6.24-5.6-13.43-5.6-21.54v-54.48h29.56v54.09c0,3.22.55,5.99,1.64,8.31ZM421.05,318.91l-23.76.19-39.79-93.89h31.87l20.09,58.12,20.09-58.12h31.3l-39.79,93.69ZM128.19,256.71c2.19,1.16,5.02,2.19,8.5,3.09,3.48.9,7.15,2,11.01,3.28,3.86,1.29,7.53,3.03,11.01,5.22,3.48,2.19,6.31,5.12,8.5,8.79,2.19,3.67,3.28,8.47,3.28,14.39,0,9.15-3.45,16.42-10.33,21.83-6.89,5.41-16.2,8.11-27.92,8.11-5.54,0-10.98-.71-16.33-2.13-5.34-1.41-10.3-3.44-14.88-6.08-4.57-2.64-8.47-5.7-11.69-9.18l16.81-17c3.09,3.35,6.76,5.96,11.01,7.82,4.25,1.87,8.89,2.8,13.91,2.8,3.48,0,6.15-.51,8.02-1.54,1.87-1.03,2.8-2.45,2.8-4.25,0-2.32-1.13-4.09-3.38-5.31-2.26-1.22-5.12-2.32-8.6-3.28-3.48-.97-7.15-2.03-11.01-3.19-3.86-1.16-7.53-2.77-11.01-4.83-3.48-2.06-6.31-4.93-8.5-8.6-2.19-3.67-3.28-8.34-3.28-14.01,0-6.05,1.55-11.3,4.64-15.74,3.09-4.44,7.47-7.95,13.14-10.53,5.66-2.58,12.3-3.86,19.9-3.86,7.98,0,15.36,1.39,22.12,4.15,6.76,2.77,12.27,6.86,16.52,12.27l-16.81,17c-2.96-3.48-6.28-5.92-9.95-7.34-3.67-1.42-7.24-2.13-10.72-2.13s-5.86.48-7.53,1.45c-1.68.96-2.51,2.35-2.51,4.15,0,1.93,1.09,3.48,3.28,4.64ZM229.41,250.33v68.77h-29.56v-68.77h-21.25v-25.11h21.25v-38.83h29.56v38.83h21.25v25.11h-21.25Z"></path>
                    </g>
                </svg>
                Generator</Link>
        </div>


        <div className='col-start-3 col-end-6'>
            <div className='hover:scale-105 pl-40'>
                <div className="relative flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-base-100 hover:bg-base-200 overflow-hidden shadow shadow-base-300">
                    <div className="grid place-items-center h-full w-20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input className="peer h-full w-full outline-none text-sm text-base-content pl-4 pr-2 bg-base-100 hover:bg-base-300" type="text" id="search" placeholder="Search something.." /> 
                </div>
            </div>
        </div>


        <div className='col-start-6 col-end-10'>
            <div className='grid grid-cols-5 gap-4'>
                <div className='col-start-3 col-end-4 relative w-max'>
                    <div className="dropdown menu-dropdown">
                        <div tabIndex={0} role="button" className="btn bg-base-100 hover:bg-base-200">
                            Theme
                            <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content relative z-[50] p-2 shadow shadow-base-300 text-base-content bg-base-100 rounded-box w-36 h-28 overflow-y-auto mt-2">
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="cupcake"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="light"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Bumblebee" value="bumblebee"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Emerald" value="emerald"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Corporate" value="corporate"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Synthwave" value="synthwave"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Halloween" value="halloween"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Garden" value="garden"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Forest" value="forest"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Lofi" value="lofi"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Pastel" value="pastel"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Fantasy" value="fantasy"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Wireframe" value="wireframe"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Black" value="black"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Luxury" value="luxury"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dracula" value="dracula"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cmyk" value="cmyk"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Autmn" value="autmn"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Business" value="business"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Acid" value="acid"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Lemonade" value="lemonade"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Night" value="night"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Coffee" value="coffee"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Winter" value="winter"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dim" value="dim"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Nord" value="nord"/></li>
                            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Sunset" value="sunset"/></li>
                        </ul>
                    </div>
                </div>

                <div className='col-start-5 col-end-5'>
                    <button id="dropdownUserAvatarButton" onClick={toggleDropdown} className="hover:scale-105 bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
                        <Image src="/images/Profile_Pic.png" alt="Beschreibung" width={75} height={75} />
                    </button>

                    {isDropdownOpen && (
                        <div id="dropdownAvatar" className="absolute rounded-lg shadow w-44 bg-base-100 text-base-content right-0 mr-8 mt-2 shadow-base-300">
                            <div className="px-4 py-2 text-sm font-normal">
                                <div>Bonnie Green</div>
                                <div className="truncate pt-1">name@flowbite.com</div>
                            </div>
                            <div className='px-4 py-2 text-sm font-normal'>
                                <ul>
                                    <li className=''>
                                        <Link href="/Profile" className="block font-medium hover:text-info-content">Profile</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="pb-2">
                                <Link href="./" className="block px-4 py-2 text-sm font-medium hover:text-info-content">Log out</Link>
                            </div>
                        </div>
                    )}
                </div>

            </div>

        </div>
    </div>
  )
}

export default Navbar