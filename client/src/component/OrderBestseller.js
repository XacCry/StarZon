import React from 'react'
import './Order.css'
import { useState} from 'react'
import { PRODUCTS } from './products'
import { Product } from "./Product";

function OrderBestseller ()  {

  const [menuList,setMenuList] = useState([]);

  return (
    <div className='py-3'>
      <div className="showorder">
          {PRODUCTS.map((product) => {
              return (
                <Product data = {product}/>
              )
            })}
      </div>
    </div>
  )
}

export default OrderBestseller