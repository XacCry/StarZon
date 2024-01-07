import { NavLink} from 'react-router-dom'
import '../page/css/Login.css';
import bgimage from "../assests/img/bg_login.png"
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from '../function/loginValidation'

//Redux
import { useDispatch } from 'react-redux';

const re = () => {
  window.location.reload(false);
} 

const Login = () => {

  const dispatch = useDispatch()

  const [values, setValues] = useState({        
    email: '',        
    password: ''    
  })
    
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const [backendError, setBackendError] = useState([])

  const handleInput = (event) => {        
    setValues(prev => ({...prev, [event.target.name]: event.target.value}))    
  }

  const handleSubmit =(event) => {        
    event.preventDefault();        
    const err = Validation(values); setErrors(err);        
    if(err.email === "" && err.password === "") {            
      axios.post('http://localhost:3001/login', values)            
      .then(res => {                
        if(res.data.errors) {                    
          setBackendError(res.data.errors);                
        } else {                    
          setBackendError([]);                    
          if(res.data.token) {   
            alert("Login Success")  
            dispatch({
              type:'LOGIN',
              payload: {
                token: res.data.token,
                email: res.data.payload.user.email,
                phone: res.data.payload.user.phone
              }})   
            localStorage.setItem('token', res.data.token)
                      
            navigate('/');  re();
            return                  
          } else {                    
            alert("No record existed");    
            return                
          }                
        }                            
      })            
      .catch(err => {
        console.log(err)
        alert(err.response.data)
      });        
    }    
  }

  return (
    <div className='login-box'>
      <div className="bg">
        <img src={bgimage} alt="" />
      </div>
      <div className="login-show">
        <div className="skip">
          <button><NavLink to="/">SKIP</NavLink></button>
        </div>
        <div className="login">
          <div className="title">
            <h1>Login</h1>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="username">
              <label htmlFor="username">USERNAME</label>
              <div className="input-login">
                <input type="text" name="email" placeholder='Enter email or Mobile phone *' onChange={handleInput} style={{color:"black"}}/>
                {errors.email && <span className='text-danger' style={{color:"red", fontSize:"10px"}}> {errors.email}</span>}
              </div>
            </div>
            <div className="password">
              <label htmlFor="password">PASSWORD</label>
              <div className="input-login">
              <input type="password" name="password" placeholder='Enter password *' onChange={handleInput} style={{color:"black"}}/>
              {errors.password && <span className='text-danger' style={{color:"red", fontSize:"10px"}}> {errors.password}</span>}
              </div>
            </div>
            <div className="sing-up">
              <p>Don't have an account?
                <span>
                  <a href="registration"> Sign Up</a>
                </span>
              </p>
            </div>
            <div className="login-submit">
              <button type="submit" id='login-submit'>Login</button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default Login