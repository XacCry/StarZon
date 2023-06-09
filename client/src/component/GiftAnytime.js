import React from 'react'
import { giftProduct } from '../database'
import GiftCard from './GiftCard'

const GiftAnytime = () => {
    const featureData = giftProduct.filter(el => el.category.includes("anytime"), [])
    return (
        <>
            <div className='px-4 sm:px-0 md:w-4/5 m-auto relative '>
                <h2 className='font-sans text-2xl my-3' >Anytime</h2>
            </div>
            <div className='p-[0.5px] bg-gray-300'></div>
            <div className='px-4 sm:px-0 md:w-4/5 m-auto relative py-6 flex flex-wrap justify-between'>
        {
          featureData.map(el => {
            return (
              <GiftCard
                img={el.img}
                title={el.name}
                desc={el.desc}
              />
            )
          })
        }

      </div>
        </>
    )
}

export default GiftAnytime