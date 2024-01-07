import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const Order = () => {
  return (
    <div>
      <div className='bg-[#1b3932] py-7'>
      </div>
   
    {/*Category*/}
    <div className=''>
      <div className='text-white px-4 md:px-0 sm:px-0 md:w-4/5 m-auto relative gap-3 flex items-center '>
        <NavLink to="" className={({ isActive }) => `px-10 border-r-2 h-full py-3 border-solid whitespace-nowrap border-gray-300 hover:border-b-2   ${isActive ? "text-green-900 font-bold border-b-2 border-b-green-900 border-solid" : ""}`}end>Merchandise</NavLink>
        <NavLink className={({ isActive }) => `px-10 border-r-2 h-full py-3 border-solid whitespace-nowrap border-gray-300 hover:border-b-2   ${isActive ? "text-green-900 font-bold border-b-2 border-b-green-900 border-solid" : ""}`}>Coffee At Home</NavLink>
        <NavLink className={({ isActive }) => `px-10 border-r-2 h-full py-3 border-solid whitespace-nowrap border-gray-300 hover:border-b-2   ${isActive ? "text-green-900 font-bold border-b-2 border-b-green-900 border-solid" : ""}`}>Ready to Eat</NavLink>
        <NavLink className={({ isActive }) => `px-10 border-r-2 h-full py-3 border-solid whitespace-nowrap border-gray-300 hover:border-b-2   ${isActive ? "text-green-900 font-bold border-b-2 border-b-green-900 border-solid" : ""}`}>Food</NavLink>
        <NavLink className={({ isActive }) => `px-10 border-r-2 h-full py-3 border-solid whitespace-nowrap border-gray-300 hover:border-b-2   ${isActive ? "text-green-900 font-bold border-b-2 border-b-green-900 border-solid" : ""}`}>Bestseller</NavLink>
        <NavLink className={({ isActive }) => `px-10 border-r-2 h-full py-3 border-solid whitespace-nowrap border-gray-300 hover:border-b-2   ${isActive ? "text-green-900 font-bold border-b-2 border-b-green-900 border-solid" : ""}`}>Drinks</NavLink>
      </div>
      <div className='px-4 md:px-0 sm:px-0 md:w-4/5 m-auto relative gap-3'>
        <Outlet/>
      </div>
      



    </div>






    </div>
  )
}

export default Order