import React from 'react';
import { NavLink} from 'react-router-dom'
import '../page/css/Profile.css';
import bgimage from "../assests/img/bg_profile.jpg"

const Profile = () => {

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
          <img src={bgimage}  alt="" />
        </div>
        <h1>Welcome to Starzon</h1>
        <a href="login"><button>Login or Sign Up</button></a>
      </div>
    </div>
  );
}

export default Profile