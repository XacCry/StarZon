import React from 'react'
import {TfiAngleLeft} from 'react-icons/tfi'
import {TfiAngleRight} from 'react-icons/tfi'
import{IoFilterSharp} from 'react-icons/io5'

const OrderMerchandise = () => {
  return (
    <div className='py-3'>
        <div className='flex items-center'>
            <button className='text-sm drop-shadow-md p-2 bg-white rounded-full w-7 h-7'><TfiAngleLeft/></button>
            <p className='px-5 py-2 border-b-2 cursor-pointer hover:border-green-700'>Mugs</p>
            <p className='px-5 py-2 border-b-2 cursor-pointer hover:border-green-700'>Cups</p>
            <p className='px-5 py-2 border-b-2 cursor-pointer hover:border-green-700'>Tumbers</p>
            <p className='px-5 py-2 border-b-2 cursor-pointer hover:border-green-700'>Water Bottles</p>
            <p className='px-5 py-2 border-b-2 cursor-pointer hover:border-green-700'>Stationary</p>
            <p className='px-5 py-2 border-b-2 cursor-pointer hover:border-green-700'>Accessories</p>
            <button className='text-sm drop-shadow-md p-2 bg-white rounded-full w-7 h-7 ml-auto'><TfiAngleRight/></button>
        </div>
        
        <div className='flex  py-2'>
            <IoFilterSharp className='text-lg'/>
            <div className='flex whitespace-nowrap overflow-scroll scrollbar-none overflow-y-hidden px-2'>
                <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Bags</p>
                <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Been There Series</p>
                <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Ceramic</p>
                <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Coasters</p>
                <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Coffee House Collection</p>
                <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Cup Clips</p>
                <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Key Chains</p>
                <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Note Books</p>
                <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Pens</p>
                <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Seasonal Collection</p>
                <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Stainiess Steel</p>
                <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Core Essential</p>
                <p className='mx-2 px-3 bg-[#d4e9e2] rounded-full'>Resuable Cups</p>
            </div>
        </div>

        <div className='py-4'>
            <h2 className='text-base font-semibold'>Mugs</h2>
            <p className='text-sm text-gray-700'>Artistic collection of ceramic mugs with acacia wood lids.</p>

        </div>



    </div>
  )
}

export default OrderMerchandise