import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom';
import Home from './page/Home';
import Gift from './page/Gift';
import Order from './page/Order';
import Pay from './page/Pay';
import Profile from './page/Profile';
import Welcome from './page/Welcome';
import GiftFeature from './component/GiftFeature';
import GiftAnytime from './component/GiftAnytime';
import GiftCong from './component/GiftCong';
import GiftThank from './component/GiftThank';
import OrderMerchandise from './component/OrderMerchandise';



const router = createBrowserRouter(createRoutesFromElements(
  <Route exact path='/' element = {<App/>}>
    <Route path='/dashboard' element ={<Home/>}/>
    <Route path='/giftcards' element={<Gift />} >
        <Route path='' element={<GiftFeature/>}/>
        <Route path='anytime' element={<GiftAnytime/>}/>
        <Route path='Congratulations' element={<GiftCong/>}/>
        <Route path='thank' element={<GiftThank/>}/>
      </Route>
    <Route path='/ordering' element ={<Order/>}>
      <Route path='' element = {<OrderMerchandise/>}/>

      
    </Route>
    <Route path='/pay' element ={<Pay/>}/>
    <Route path='/profile' element ={<Profile/>}/>
    <Route path='/welcome' element ={<Welcome/>}/>

  </Route>

  
))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router = {router}/>

    

);


reportWebVitals();
