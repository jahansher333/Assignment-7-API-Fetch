
import React from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const interFont = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
const HERO = () => {
  return (
    <div className={`${interFont.className}`}>
      <div className='flex justify-center items-center mt-[50px] text-center'>
    <h1 className='text-[20px] font-bold text-[#2b9fbd] bg-green-700 p-[20px] rounded-lg sm:text-[30px] md:text-[50px]'>Data Fetching Assignment</h1>
      
       </div>
       <div className='text-center mt-[50px] p-4'>
            <h1 className='text-[25px] font-bold'>Client Side Data Fetching</h1>
            <p className='text-[15px] font-normal '>Dynamically fetch data on the client side using React hooks, providing a seamless user experience.</p>
         </div>

         <div className='text-center mt-[50px] p-4'>
            <h1 className='text-[25px] font-bold'>Server Side Data Fetching</h1>
            <p className='text-[15px] font-normal '>Pre-fetch data on the server side to improve performance, SEO optimization, and load time.</p>
         </div>
         <section className='flex flex-col gap-4 justify-center items-center w-full mt-[30px]  mb-20 sm:flex-row '>
           
            <div className='p-4'>
                <h1 className='bg-green-700 text-white text-[20px] font-medium  text-center p-[10px] rounded-[20px] hover:shadow-2xl sm:text-[20px] md:text-[25px] lg:text-[30px]'><Link href="/client">Client-Side-Data</Link></h1>
            </div>
            <div className='p-4'>
                <h1 className='bg-green-700 text-white text-[20px] font-medium  text-center p-[10px] rounded-[20px] hover:shadow-2xl sm:text-[20px] md:text-[25px] lg:text-[30px]'><Link href="/server">Server-Side-Data</Link></h1>
            </div>
         </section>

         
    </div>
  )
}

export default HERO