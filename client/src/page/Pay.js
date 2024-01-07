import React from 'react'
import './css/Pay.css'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import {useSelector} from "react-redux"
import { NavLink } from 'react-router-dom'

function Pay () {

  const [cartList,setCartList] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const {user} = useSelector((state)=> ({...state}))
  const [values, setValues] = useState({
    userId: '',
    itemId: '',
    quantity: ''
  })

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = () => {
  Axios.get(`http://localhost:3001/cart?userId=${user.userID}`)
    .then((res) => {
      setCartList(res.data);
      const itemIds = res.data.map((item) => item.itemId);
      if (itemIds.length > 0) {
        Axios.get(`http://localhost:3001/menu?itemIds=${itemIds.join(',')}`)
          .then((res) => {
            setMenuList(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const incrementCount = (itemId) => {
    setCartList((prevCartList) =>
      prevCartList.map((item) =>
        item.item_id === itemId && item.quantity < 10 ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementCount = (itemId) => {
    setCartList((prevCartList) =>
      prevCartList.map((item) =>
        item.item_id === itemId && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const changeData = (itemId, quantity) => {
    values.userId = user.userID
    values.itemId = itemId
    values.quantity = quantity

    console.log(values)

    // Make an AJAX request to add the item to the database
    Axios.put('http://localhost:3001/cart', values)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  
  const getTotal = () => {
    let total = 0;
    cartList.forEach((cartItem) => {
      const menuItem = menuList.find((menuItem) => menuItem.order_id === cartItem.order_id);
      if (menuItem) {
        total += menuItem.order_price * cartItem.quantity;
      }
    });
    return total;
  };

  const total = getTotal();

  const delCart = (itemId) => {
    const userId = user.userID;
    const cartItem = {
      id: userId, // Renamed from userId
      item_id: itemId, // Renamed from itemId
    };
    Axios.delete(`http://localhost:3001/cart`, { data: cartItem })
    .then((response) => {
      console.log(response.data);
      // Remove the deleted item from the cartList state
      setCartList(cartList.filter((item) => item.item_id !== itemId));
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
      <div className='py-3'>
      <div className="showcart">
      {!user && <>
        <h1>Login to buy some order.</h1>
      </>}
      {user && <>
          {cartList.map((val, key) => {
            if(cartList.length > 0) {
            return (
              <div className="cart card">
                <div className="card-body">
                  <div className="card-img">
                    <img src={val.order_pic} alt=''/>
                  </div>
                  <div className="card-box">
                    <div className="card-info">
                      <p className="card-name">{val.order_name}</p>
                      <p className="card-details">{val.order_details}</p>
                    </div>
                  </div>
                  <div className="card-box1">
                    <div className="card-footer">
                      <p className="card-price">{val.order_price} Bath</p>
                    </div>
                  </div>
                  <div className="card-edit">
                    <div className="x">
                      <button onClick={() => {delCart(val.item_id);}}>x</button>
                    </div>
                    <div className="input-box">
                      <button id='down' onClick={() => decrementCount(val.item_id)}>-</button>
                      <input type="number" value={val.quantity} onChange={changeData(val.order_id, val.quantity)}/>
                      <button id='up' onClick={() => incrementCount(val.item_id)}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            )
            } else {
              return (
                <>
                <h1>Not have any order.</h1>
                </>
              )
            }
          })}
          <div className="total-box">
            <p className="total">{total} Bath</p>
            <NavLink to="/generateQRCode"><button className='checkout'>Checkout</button></NavLink>
          </div>
          </>}
      </div>
    </div>
  )

}

export default Pay