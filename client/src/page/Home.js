import React from 'react'
import { Link } from 'react-router-dom'
import { HandcraftedCurations } from '../database'
import slideImage1 from "../assests/img/Barista_Pride_ca8aec571f.png"
import slideImage2 from "../assests/img/Group_1249_39083973b4.png"
import slideImage3 from "../assests/img/Hazelnut_Dolce_frappuccino_eae87c32b3.png"
import slideImage4 from "../assests/img/Bonus_Stars_2d6733cfde.png"
import slideImage5 from "../assests/img/Drip_Heart_mug_17980712b6.png"
import slideImage6 from "../assests/img/Vegan_combo_bea05a1288.png"

import { LatestOfferingsData } from '../database'

import Coffee_cherry_spices from "../assests/img/Coffee_cherry_spices_9de46c3e1b.jpg"
import Axios from 'axios'
import { useState, useEffect } from 'react'

function Home () {

  const [menuList,setMenuList] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = () => {
    Axios.get('http://localhost:3001/menu').then((res) => {
      setMenuList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <div className='bg-[#1e3932] py-2 sm:py-6'>
        <div className=' text-white  text-lg tracking-wide w-full'>
          <div className='px-4  sm:px-0 md:w-4/5 m-auto flex justify-between items-center gap-5'>
            <p className='text-sm sm:text-xl max-w-md sm:max-w-xl'>A world of rewards awaits you! Sign up now.</p>
            <Link to={"/login"} className='text-sm border-2 px-2 py-1 rounded-full whitespace-nowrap'>Sing up</Link>
          </div>
        </div>
      </div>

      {/* Handcrafted Curations */}
      <div className='bg-white py-7'>
        <div className='px-4   sm:px-0 md:w-4/5 m-auto'>
          <h1 className='text-[#1e3932] text-2xl font-bold mb-4'>Handcrafted Curations</h1>
          <div className='flex justify-flexstart space-x-[100px] items-center text-center flex-wrap'>
            {
              HandcraftedCurations.map((el, index) => {
                return (
                  <Link to={el.link} className="flex justify-center items-center flex-col" key={el.title + index}>
                    <img src={el.img} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full hover:border-2 border-green-600 border-solid m-1" alt=''/>
                    <p className='font-medium text-sm whitespace-normal sm:whitespace-nowrap'>{el.title}</p>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>

      {/* Barista Recommends */}
      <div className="h-72 py-7">
        <div className='px-4 md:px-0  sm:px-0 md:w-4/5 m-auto relative'>
          <h1 className='text-[#1e3932] text-2xl font-bold mb-4'>Barista Recommends</h1>
          <div className='my-10'>


            <div className='flex gap-2 md:gap-6 overflow-scroll overflow-y-hidden w-full absolute top-16 sm:px-4 ' >
              {
                menuList.map((val,key) => {
                  return (
                    <div className='w-full bg-white border-2 max-w-sm min-w-[280px] sm:min-w-[340px] py-4 px-5 box-border rounded-2xl'>
                      <div className='flex gap-4'>
                        <img src={val.order_pic} className='w-20 bg-red-500 h-20 rounded-md object-cover' alt=''/>
                        <div>
                          <h3 className='font-semibold'>{val.order_name}</h3>
                        </div>
                      </div>
                      <div className='flex justify-between font-semibold my-2'>
                        <p>฿ <span>{val.order_price}</span></p>
                        <button className='text-white bg-[#00754a] hover:bg-[#1e3932] shadow-[0 4px 15px #a3a3a3ad] py-1 px-5 rounded-full'>Add Item</button>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
      </div>




      <div className='bg-white py-14'>

        {/* slide image section */}
        <div className='px-4 sm:px-0 md:w-4/5 m-auto relative'>

          <div className='flex h-56 gap-3 overflow-scroll overflow-y-hidden px-3 '> 
            <div className='p-5 bg-[#0e382c] min-w-full rounded flex sm:gap-7 relative overflow-hidden'>
              <img src={slideImage1} className="h-full scale-125 w-16 sm:w-auto " alt=''/>
              <div className='text-white max-w-2xl'>
                <p className='text-sm font-semibold'>Introducing</p>
                <h2 className='font-bold text-base sm:text-xl my-2'>Barista Pride Beverage</h2>
                <p className='font-medium text-xs sm:text-base w-full'>Experience a brew-tiful barista surprise. Relish this unique treat,one of kinds curation at a store near you</p>
                <p className='md:mt-5 text-xs sm:text-base'>Starting From</p>
                <p className='font-bold text-lg'>฿ 250.00</p>
              </div>
              <p className='text-white text-xs font-bold ml-auto absolute right-5'>*T&C Apply</p>
            </div>
            <div className='p-5 bg-[#ff4081] min-w-full rounded flex sm:gap-7 relative overflow-hidden'>
              <img src={slideImage2} className="h-full scale-125 w-16 sm:w-auto " alt=''/>
              <div className='text-white max-w-2xl'>
                <p className='text-sm font-semibold'>Bunny Hop Into Cozy Winter Mood With</p>
                <h2 className='font-bold text-base sm:text-xl my-2'>Winter Merchandis</h2>
                <p className='font-medium text-xs sm:text-base w-full'>Our limited-edition range of essentials are worth melting for this chilly season.</p>
                <p className='md:mt-5 text-xs sm:text-base'>Starting From</p>
                <p className='font-bold text-lg'>฿ 1700.00</p>
              </div>
            </div>
            <div className='p-5 bg-[#e0c4a0] min-w-full rounded flex sm:gap-7 relative overflow-hidden'>
              <img src={slideImage3} className="h-full scale-125 w-16 sm:w-auto " alt=''/>
              <div className='text-black max-w-2xl'>
                <p className='text-sm font-semibold'>Presenting</p>
                <h2 className='font-bold text-base sm:text-xl my-2'>Hazelnut Dolce Range</h2>
                <p className='font-medium text-xs sm:text-base w-full'>Treat your taste buds to divine blend of hazelnut, roast coffee and mocha powder with Hazelnut Dolce Frappuccino.</p>
                <p className='md:mt-5 text-xs sm:text-base'>Starting From</p>
                <p className='font-bold text-lg'>฿ 470.00</p>
              </div>
            </div>
            <div className='p-5 bg-[#de7356] min-w-full rounded flex sm:gap-7 relative overflow-hidden'>
              <img src={slideImage4} className="h-full scale-125 w-16 sm:w-auto " alt=''/>
              <div className='text-white max-w-2xl'>
                <p className='text-sm font-semibold'>Welcome 2023 With</p>
                <h2 className='font-bold text-base sm:text-xl my-2'>Starry Celebrations</h2>
                <p className='font-medium text-xs sm:text-base w-full'>Earn 3 Bonus Stars on a single spend of Rs 1000 or more from 1st to 31st January 2023.</p>
                <p className='md:mt-5 text-xs sm:text-base'>Starting From</p>
                <p className='font-bold text-lg'>฿ 250.00</p>
              </div>
            </div>
            <div className='p-5 bg-[#f0982f] min-w-full rounded flex sm:gap-7 relative overflow-hidden'>
              <img src={slideImage5} className="h-full scale-125 w-16 sm:w-auto " alt=''/>
              <div className='text-black max-w-2xl'>
                <p className='text-sm font-semibold'>Introducing</p>
                <h2 className='font-bold text-base sm:text-xl my-2'>Valentine's Merchandise</h2>
                <p className='font-medium text-xs sm:text-base w-full'>Buttery drip mug from the valentine collection. This one has our heart.</p>
                <p className='md:mt-5 text-xs sm:text-base'>Starting From</p>
                <p className='font-bold text-lg'>฿ 2500.00</p>
              </div>
            </div>
            <div className='p-5 bg-[#f0dfb6] min-w-full rounded flex sm:gap-7 relative overflow-hidden'>
              <img src={slideImage6} className="h-full scale-125 w-16 sm:w-auto " alt=''/>
              <div className='text-black max-w-2xl'>
                <p className='text-sm font-semibold'>Dive Into</p>
                <h2 className='font-bold text-base sm:text-xl my-2'>Starbucks Vegan Menu</h2>
                <p className='font-medium text-xs sm:text-base w-full'>A curated list of offerings to satiate your vegan palate with plant-based alternatives and delicious offerings</p>
                <p className='md:mt-5 text-xs sm:text-base'>Starting From</p>
                <p className='font-bold text-lg'>฿ 250.00</p>
              </div>
              <p className='text-white text-xs font-bold ml-auto absolute right-5'>*T&C Apply</p>
            </div>
          </div>
        </div>


        {/* Latest offerings */}
        <div className='p-8 px-4 sm:px-0 md:w-4/5 m-auto relative mt-3'>
          <h1 className='text-[#1e3932] text-2xl font-bold mb-4'>Latest Offerings</h1>
          <div className='flex flex-row gap-7 overflow-auto scrollbar-none'>
            {
              LatestOfferingsData.map(el => {
                return (
                  <div key={el.id} className="overflow-hidden rounded-xl border shadow-md min-w-[280px]">
                    <img src={el.img} className="h-44 object-cover" alt=''/>
                    <div className='p-5'>
                      <h2 className='font-semibold text-[#1e3932]'>{el.name}</h2>
                      <p className='my-5 text-xs text-gray-500'>{el.desc}</p>
                      <div className='flex justify-between font-semibold my-2'>
                        <p>฿ <span>{el.price}</span></p>
                        <button className='text-white bg-[#00754a] hover:bg-[#1e3932] py-1 px-5 rounded-full'>Add Item</button>
                      </div>
                    </div>

                  </div>
                )
              })
            }
          </div>
        </div>
      </div>


      {/* Learn more about the world of coffee! */}
      <section className=''>
        <div className='p-8 px-4 sm:px-0 md:w-4/5 m-auto relative mt-3'>
          <div className='flex  items-center w-full justify-between '>
            <h1 className='text-[#1e3932] text-2xl font-bold m-0'>Learn more about the world of coffee!</h1>
            <button className='text-green-800 font-semibold m-0'>Discover More</button>
          </div>

          <div className='h-96 w-full my-9 rounded-md overflow-hidden relative cursor-pointer'>
            <img src={Coffee_cherry_spices} className="h-full w-full object-cover" alt=''/>
            <div className='h-full bg-black bg-opacity-40 hover:bg-opacity-70 w-full absolute top-0 transition-all p-5 flex flex-col justify-between'>
              <p className='bg-green-50 rounded-full w-24 text-xs p-1  text-green-600 text-center'>Coffee Culture</p>
              <div className='text-white'>
                <h2 className='text-3xl font-bold py-2'>Species Of Coffee Trees</h2>
                <p>Not all coffee is created equal!</p>
                <button className='bg-white text-black w-full max-w-[200px] font-semibold text-sm py-1 rounded-full mt-10'>Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center sm:hidden'>
          <button className='bg-black text-white font-bold px-3 py-1 rounded-full'>Discover More</button>
        </div>
      </section>


    </>
  )
}

export default Home