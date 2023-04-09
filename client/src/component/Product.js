import React, { useState } from "react";
import { PRODUCTS } from "./products";

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const Product = (props) => {
  const { id, title, price, img, details} = props.data;
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [cartId, setCartId] = useState([])

  const cartItemCount = cartItems[id];
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    setCartId((prev) => [...prev, itemId]);
    console.log(id);
  };
  const Cart = ({ cartItems, products }) => {
    const totalItems = Object.keys(cartItems).reduce((sum, id) => sum + cartItems[id], 0);
  }
  return (
<div className="menu card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src={img} alt=''/>
                    </div>
                    <div className="card-box">
                      <div className="card-info">
                        <p className="card-name">{title}</p>
                        <p className="card-details">{details}</p>
                      </div>
                      <div className="card-footer">
                        <p className="card-price">{price} Bath</p>
                        <button onClick={()=>addToCart(id)} >Add To Cart {cartItemCount >= 1 && <> ({cartItemCount})</>}</button>
                      </div>
                    </div>
                  </div>
                </div>
  )
};