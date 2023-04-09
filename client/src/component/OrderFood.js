import React from 'react'
import './Order.css'
import Axios from 'axios'
import { useState, useEffect } from 'react'

function Food () {

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
    <div className='py-3'>
      <div className="showorder">
          {menuList.map((val, key) => {
            if(val.order_type === 'food')
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
                        <button>Add item</button>
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

export default Food