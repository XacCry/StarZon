import React,{ useState } from 'react'
import '../page/css/Pay.css'
import { PRODUCTS } from '../component/products'

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

export const CartItem = (props) =>{
    const { id, title, price, img, details} = props.data;
    const [cartId,setCartId] = useState( [] )
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(itemId)
        cartId.push({itemId})
      };
    
      const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      };
    
      const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
      };

      return (
        <div className="cart card">
                <div className="card-body">
                  <div className="card-img">
                    <img src={img} alt=''/>
                  </div>
                  <div className="card-box">
                    <div className="card-info">
                      <p className="card-name">{title}</p>
                      <p className="card-details">{details}</p>
                    </div>
                  </div>
                  <div className="card-box1">
                    <div className="card-footer">
                      <p className="card-price">{price} Bath</p>
                    </div>
                  </div>
                  <div className="card-edit">
                    <div className="x">
                      <button>x</button>
                    </div>
                    <div className="input-box">
                      <button id='down' onClick={removeFromCart}>-</button>
                      <input type="number" min='0' max='100' value={cartItems[id]} onChange={(val) => updateCartItemCount(Number(val.target.value),id)} />
                      <button id='up' onClick={addToCart}>+</button>
                    </div>
                  </div>
                </div>
              </div>
      )
}