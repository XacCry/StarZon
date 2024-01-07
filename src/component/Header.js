import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assests/img/logo.png"
import {RiUserLine} from "react-icons/ri"
import {BsSearch} from "react-icons/bs"
const Header = () => {
  return (
    <>
     {/* desktop and table version */}
    <div className='w-full bg-white hidden sm:flex'>
    <header className=' md:w-4/5 m-auto flex flex-col lg:flex-row items-center sm:gap-8 md:gap-10 lg:gap-16 py-4'>
        <div className='min-w-[40px]'>
            <img src={logo} className="w-10" />
        </div>
        <nav className='flex gap-10 lg:gap-16 xl:mr-16'>
            <NavLink to={"dashboard"} className={({ isActive }) => `text-slate-500 ${isActive ? "border-b-2 font-medium pb-2 border-solid border-green-800 text-gray-900" : ""} `} end>Home</NavLink>
            <NavLink to={"giftcards"} className={({ isActive }) => `text-slate-500 ${isActive ? "border-b-2 font-medium pb-2 border-solid border-green-800 text-gray-900" : ""} `}>Gift</NavLink>
            <NavLink to={"ordering"} className={({ isActive }) => `text-slate-500 ${isActive ? "border-b-2 font-medium pb-2 border-solid border-green-800 text-gray-900" : ""} `}>Order</NavLink>
            <NavLink to={"pay"} className={({ isActive }) => `text-slate-500 ${isActive ? "border-b-2 font-medium pb-2 border-solid border-green-800 text-gray-900" : ""} `}>Payment</NavLink>
            
        </nav>

        <div className=' text-xl text-slate-500 w-full max-w-[700px] shadow-md flex py-2 px-5 rounded-full '>
            <BsSearch />
            <input type="text" className='text-sm w-full bg-transparent border-none outline-none px-3' placeholder="Looking for something specific ?" />
        </div>

        <div className='text-xl text-slate-500 border p-1 rounded-full border-slate-500 xl:ml-auto'>
            <RiUserLine />
        </div>
    </header>
</div>
</>
  )
}

export default Header