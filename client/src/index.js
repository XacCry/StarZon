import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home from './page/Home';
import Order from './page/Order';
import Pay from './page/Pay';
import Profile from './page/Profile';
import Welcome from './page/Welcome';
import Login from './page/Login';
import OrderFood from './component/OrderFood';
import OrderBestseller from './component/OrderBestseller';
import OrderDrinks from './component/OrderDrinks';
import Registration from './page/Registration';
import Blogs from './page/Blogs';
import Blogs1 from './page/Blogs1';
import GenerateQRCode from './page/GenerateQRCode';

//Redux
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from './reducer/combineReduxer';
const store = createStore(rootReducer)


const router = createBrowserRouter(createRoutesFromElements(
    <Route element = {<App/>}>
      <Route path='/' element ={<Home/>}/>
      <Route path='/ordering' element ={<Order/>}>
        <Route path='' element = {<OrderBestseller/>}/>
        <Route path='drinks' element = {<OrderDrinks/>}/>
        <Route path='food' element = {<OrderFood/>}/>
      </Route>
      <Route path='/pay' element ={<Pay/>}/>
      <Route path='/profile' element ={<Profile/>}/>
      <Route path='/welcome' element ={<Welcome/>}/>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/registration' element ={<Registration/>}/>
      <Route path='/blogs' element ={<Blogs/>}/>
      <Route path='/blogs1' element ={<Blogs1/>}/>
      <Route path='/generateQRCode' element ={<GenerateQRCode/>}/>
    </Route>
  
    
  ))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <Provider store = { store } >
        <RouterProvider router = { router }/> 
    </Provider>
);


reportWebVitals();