"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const interFont = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
const HEADER = () => {
   const [isMobile_toggle , setMobile_toggle] = useState(false)

   const togglemenu  = () => {
    setMobile_toggle(!isMobile_toggle);
  };
  return (
    <div className={`${interFont.className}`}>
       <header  
        className=' w-full h-16 flex justify-around items-center bg-green-700 text-black font-medium'
        > 
           <div>
             <h1 
             className='text-[30px] font-bold'
             >
               DATA FETCHING
             </h1>
           </div>

           <div className='hidden md:block'>
             <ul 
              className='flex gap-4'
              >

                <li
                className='text-[20px]  font-normal'
                >
                  <Link 
                  href="/"
                  >
                   Home
                  </Link>
                </li>

                <li 
                className='text-[20px] font-normal'
                >
                  <Link 
                  href="/client"
                  >
                   Client-Side-Data
                  </Link>
                </li>

                <li
                className='text-[20px] font-normal'
                >
                  <Link 
                  href="/server"
                  >
                   Server-Side-Data
                  </Link>
                </li>
             </ul>
            

           </div>

           <div>
           <button className="md:hidden text-white" onClick={togglemenu}>
             ☰
            </button>
      </div>
      <div
        className={`md:hidden ${
          isMobile_toggle ? "block" : "hidden"
        } bg-green-700 text-black p-4 absolute top-16 left-0  w-[200px] shadow-lg z-10 ease-in-out duration-100`}
      >
        <ul className="space-y-4">
          <li>
            <Link href="/" className="block hover:text-gray-300 transition-shadow">
               Home
            </Link>
          </li>
          <li>
            <Link
              href="/client"
              className="block hover:text-gray-300 transition"
            >
               Client-Side-Data
            </Link>
          </li>
          <li>
            <Link
              href="/server"
              className="block hover:text-gray-300 transition"
            > Server-Side-Data
            </Link>
          </li>
        </ul>
           </div>
       </header>
    </div>
  )
}

export default HEADER;
