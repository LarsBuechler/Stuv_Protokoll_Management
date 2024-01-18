import React from 'react'

const Search = () => {
  return (
    <div className="flex items-center justify-center pt-20 pb-20">
        <form className='w-full max-w-[70%]'>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-700 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-neutral border border-gray-300 rounded-lg bg-stone-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-stone-50 dark:border-gray-600 dark:placeholder-neutral dark:text-neutral dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Suche nach Stichwörtern" required></input>
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-neutral hover:bg-zinc-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-neutral dark:hover:bg-accent dark:focus:ring-gray-800">Search</button>
            </div>
        </form>
    </div>
  )
}

export default Search