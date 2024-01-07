import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import Axios from 'axios';
import { Modal } from 'antd';
import img1 from '../assests/img/bg_login.png';
import '../page/css/genQRCode.css';
import {useSelector} from "react-redux"

const generatePayload = require('promptpay-qr');

function QRCodeGenerator() {
  const [cartList, setCartList] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('0254681583');
  const [amount, setAmount] = useState(1.0);
  const [qrCode, setqrCode] = useState('sample');
  const [open, setOpen] = useState(false);
  const {user} = useSelector((state)=> ({...state}))

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

  useEffect(() => {
    fetchCart();
    setOpen(true);
  }, []);

  const getTotal = () => {
    let total = 0;
    cartList.forEach((cartItem) => {
      const menuItem = menuList.find((menuItem) => menuItem.order_id === cartItem.order_id);
      if (menuItem) {
        total += menuItem.order_price * cartItem.quantity;
      }
    });
    if (total !== amount) {
      setAmount(parseFloat(total));
    }
    return total;
  };

  const handleQR = () => {
    setqrCode(generatePayload(phoneNumber, { amount }));
  };

  return (
    <div>
      <div className="image-container">
          <img src={img1} alt="" />
      </div>
      <section className='qrcode-box-content'>
        <div className="container pt-5 rounded-tl-3xl rounded-tr-3xl">
          <div className="row">
            <div className='col-12 coffee-blog-space-m'>
              <div className="title mb-2">
                <h3>Scan QR code to pay</h3>
              </div>
              <div className="text-content pt-2 h-96">
                <div className="text1">
                  <p>Number : <input type="text" id='pnum' value={phoneNumber} readOnly /></p>
                </div>
                <div className="text1">
                  <p>Total : ฿ <input type="number" id='total' value={getTotal()} readOnly /></p>
                </div>
                <div className="qr">
                  <QRCode value={qrCode} />
                </div>
              </div>
              <Modal
                title="Scan QRcode to pay"
                open={open}
                centered
                width={250}
                onCancel={ () => { handleQR(); setOpen(false); }}
                okButtonProps={{ hidden: true }}
                cancelButtonProps={{ hidden: true }}
              >
              </Modal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QRCodeGenerator;