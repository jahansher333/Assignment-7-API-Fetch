import React from 'react';
const FOOTER = () => {
  return (
    <div>
       <footer className=' w-full h-[200px]   bg-green-700 text-white font-medium p-4'>
         <div className='flex justify-around items-center mt-[50px]'>
          <div className=" ">
             <h1 className='text-[20px] font-bold text-[#000000] text-center'>DATA FETCHING</h1>
             <p className='text-[20px] font-bold text-[#000000] border-b-[2px] border-[#000000]'>Created by : <span className='text-[#2b9fbd]'>Jahansher khan</span></p>
          </div>
         </div>
         <div className='flex justify-center items-center mt-[30px]'>
            <p className='text-[13px] text-[#000000] font-semibold sm:text-[20px]'>© 2024 Jahansher khan. All rights reserved</p>
         </div>
       </footer>
    </div>
  )
}

export default FOOTER
