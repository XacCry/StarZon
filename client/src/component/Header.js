import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assests/img/logo.png"
import {RiUserLine} from "react-icons/ri"
import {useSelector } from 'react-redux';

const Header = () => {
  const {user} = useSelector((state)=> ({...state}))
  return (
    <>
     {/* desktop and table version */}
    <div className='w-full bg-white hidden sm:flex'>
    <header className='md:w-4/5 m-auto flex flex-col lg:flex-row items-center sm:gap-8 md:gap-10 lg:gap-16 py-4 '>
        <div className='min-w-[56px]'>
        <NavLink to={""}><img src={logo} alt="" className="w-14"/></NavLink>
        </div>
        <nav className='flex gap-10 lg:gap-16 xl:mr-10'>
            <NavLink to={""} className={({ isActive }) => `w-[65.6px] text-rgb(33, 37, 41) text-center ${isActive ? "border-b-2 font-bold pb-2 border-solid border-green-800" : ""} `}>Home</NavLink>
            {!user && <>
              <NavLink to={"login"} className={({ isActive }) => `w-[65.6px] text-rgb(33, 37, 41) text-center ${isActive ? "" : ""} `}>Order</NavLink>
              <NavLink to={"login"} className={({ isActive }) => `w-[65.6px] text-rgb(33, 37, 41) text-center ${isActive ? "" : ""} `}>Payment</NavLink>
            </>}
            {user && <>
              <NavLink to={"ordering"} className={({ isActive }) => `w-[65.6px] text-rgb(33, 37, 41) text-center ${isActive ? "border-b-2 font-bold pb-2 border-solid border-green-800" : ""} `}>Order</NavLink>
              <NavLink to={"pay"} className={({ isActive }) => `w-[65.6px] text-rgb(33, 37, 41) text-center ${isActive ? "border-b-2 font-bold pb-2 border-solid border-green-800" : ""} `}>Payment</NavLink>
            </>}
        </nav>
        <div className='text-xl text-slate-500 border p-1 rounded-full border-slate-500 xl:ml-auto'>
            <NavLink to={"profile"}><RiUserLine /></NavLink>
        </div>
    </header>
</div>
</>
  )
}

export default Header