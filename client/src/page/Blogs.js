import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import img1 from '../assests/img/Coffee_cherry_spices_9de46c3e1b.jpg'

const Blog = () => {
  return (
    <div>
      <div className='tag'>
        <div className="flex row">
          <NavLink to="/">Home </NavLink>
            <h1>&nbsp;&gt;&nbsp;</h1>
          <NavLink to=""> Coffee Culture</NavLink>
        </div>
      </div>
      <div className='p-[0.5px]'>
        <div className='px-4 sm:px-0 md:w-4/5 m-auto relative py-6 flex flex-wrap justify-between'>
          <Link to="/blogs1">
            <div className='flex p-5 h-[190px] border-2 min-w-[320px] max-w-[320px] rounded-lg shadow-md relative left-10 my-3'>
              <img src={img1} className="h-20 absolute -left-10 rounded-md shadow-md" alt=''/>
              <div className='ml-20'>
                <h3 className='font-semibold'>Species of Coffee Trees</h3>
                <p className='text-sm py-2'>Not all coffee is created equal. You already know that the two most recognized species of commercially grown coffee trees</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Blog