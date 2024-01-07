import React from 'react'
import './Order.css'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import {useSelector} from "react-redux"


function Drinks() {

  const [menuList,setMenuList] = useState([]);
  const {user} = useSelector((state)=> ({...state}))
  const [values, setValues] = useState({
    userId: '',
    itemId: ''
  })

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

  const addToCart = (itemId) => {
    const userId = user.userID;
    const cartItem = {
      userId: userId,
      itemId: itemId,
      quantity: 1
    };
    console.log(userId)
    // console.log(itemId)
    // Check if the item already exists in the cart
    Axios.get(`http://localhost:3001/cart1?userId=${userId}&itemId=${itemId}`)
    .then((response) => {
      console.log(response.data.length)
      if (response.data.length > 0) {
        // Item already exists in the cart, update the quantity
        const item = response.data[0].quantity;
        //console.log(item);
        cartItem.quantity = item + 1;
        Axios.put(`http://localhost:3001/cart1`, cartItem)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      } else {
        // Item does not exist in the cart, add it
        // console.log(cartItem)
        Axios.post('http://localhost:3001/cart1', cartItem)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className='py-3'>
      <div className="showorder">
          {menuList.map((val, key) => {
            if(val.order_type === 'drink')
              return (
                <div className="menu card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src={val.order_pic} alt=''/>
                    </div>
                    <div className="card-box">
                      <div className="card-info">
                        <p className="card-name">{val.order_name}</p>
                        <p className="card-details">{val.order_details}</p>
                      </div>
                      <div className="card-footer">
                        <p className="card-price">{val.order_price} Bath</p>
                        <button onClick={ () => {alert("Order Added"); addToCart(val.order_id);} }>Add item</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
      </div>
    </div>
  )
}

export default Drinks