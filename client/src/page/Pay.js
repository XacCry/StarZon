import React,{useState , useEffect} from "react";
import { PRODUCTS } from '../component/products'
import './css/Pay.css'
import { CartItem } from "../component/Cart-Item";
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

function Pay () {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [cartId,setCartId] = useState( [] )
  const [results,setResult] = useState(0)
  const [cartStore,setCartStore] = useState( [] )
  const [totalAmount, setTotalAmount] = useState(0); // Store total amount in state

  const setdefelt = () => {
    setCartStore([])
    setCartId([])
  };
  
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    setResult(totalAmount)
    return totalAmount;
  };

  // Call getTotalCartAmount inside useEffect to avoid re-render loop
  useEffect(() => {
    const total = getTotalCartAmount();
    setTotalAmount(total);
  }, [cartItems]);

  const checkout = () => {
    for (let i = 0; i < cartId.length; i++) {
      for (let j = 0; j < PRODUCTS.length; j++){
        if(cartId[i].itemId == PRODUCTS[j].id){
          cartStore.push(PRODUCTS[cartId[i].itemId-1])
        }
      }
    }
    console.log(cartStore)
    setCartItems(getDefaultCart());
    setdefelt();
  };

  return (
    <div className='py-3'>
      <div className="showcart">
          {PRODUCTS.map((product) => {
            if(cartItems[product.id] !== 0){
              return <CartItem data = {product}/>
            }
          })}
          <div className="total-box">
            <p className="total">{totalAmount} Bath</p>
            <button className='checkout' onCLick = {() => {checkout()}}>Checkout</button>
          </div>
      </div>
    </div>
  );
}
export default Pay