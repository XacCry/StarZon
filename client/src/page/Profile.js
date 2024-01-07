import React from 'react';
import { NavLink} from 'react-router-dom'
import '../page/css/Profile.css';
import bgimage from "../assests/img/bg_profile.jpg"
import {useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector((state)=> ({...state}))

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/login")
  }
  
  return (
    <div className='box'>
      <div className='tag'>
        <div className="text">
          <NavLink to="">Profile </NavLink>
          <h1>&nbsp;&gt;&nbsp;</h1>
          <NavLink to=""> Account</NavLink>
        </div>
      </div>
      <div className="show">
        <div className="bg">
          {user && <>
            <img src={bgimage}/>
            <span>You Logged In</span>
            <h1 style={{fontSize:"30px"}}>{user.email}</h1>
            <button onClick={logout}>Log Out</button>
          </>}
          {!user && <>
            <img src={bgimage}/>
            <h1>Welcome to Starzon</h1>
            <a href="login"><button>Login or Sign Up</button></a>
          </>}
        </div> 
      </div>
    </div>
  );
}

export default Profile