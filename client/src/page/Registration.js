import React from 'react'
import { NavLink} from 'react-router-dom'
import '../page/css/Registration.css'
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from '../function/registerValidation'
import axios from 'axios'

const Registration = () => {

  const [values, setValues] = useState({        
    email: '',        
    mobileNumber: '',        
    password: '',
    cfPassword: ''    
  })    
  
  const navigate = useNavigate();    
  const [errors, setErrors] = useState({})    
  const handleInput = (event) => {        
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))    
  }    

  const handleSubmit = (event) => {        
    event.preventDefault();        
    const err = Validation(values); setErrors(err);         
    if(err.email === "" && err.mobileNumber === "" && err.password === "") {            
      axios.post('localhost:3001/register', values)            
      .then(res => {                
        navigate('/login');            })            
        .catch(err => console.log(err));        
    }    
  }

  return (
    <div className='registration-box'>
      <div className='tag'>
        <div className="text">
          <NavLink to="/">Home </NavLink>
          <h1>&gt;</h1>
          <NavLink to=""> Create An Account</NavLink>
        </div>
      </div>
      <div className="registration-show">
        <div className="registration">
          <div className="title">
            <h1>Sign up to Starzon</h1>
          </div>
          <hr />
          <form action="" onSubmit={handleSubmit}>
            <div className="c1">
              <div className="email">
                <label htmlFor="email">EMAIL ID</label>
                <div className="input-login">
                  <input type="text" name="email" placeholder='Enter Email ID' onChange={handleInput}/>
                  {errors.email && <span className='text-danger'> {errors.email}</span>}
                </div>
              </div>
              <div className="mnumber">
                <label htmlFor="mnumber">MOBILE NUMBER</label>
                <div className="input-login">
                <input type="number" name="mobileNumber" placeholder='Enter Mobile Number *' onChange={handleInput}/>
                {errors.mobileNumber && <span className='text-danger'> {errors.mobileNumber}</span>}
                </div>
              </div>
            </div>
            <div className="c2">
              <div className="rpassword">
                <label htmlFor="rpassword">CREATE PASSWORD</label>
                <div className="input-login">
                <input type="password" name="password" placeholder='Enter Password *' onChange={handleInput}/>
                {errors.password && <span className='text-danger'> {errors.password}</span>}
                </div>
              </div>
              <div className="crpassword">
                <label htmlFor="crpassword">CONFIRM PASSWORD</label>
                <div className="input-login">
                <input type="password" name="cfPassword" placeholder='Re-enter password *' onChange={handleInput}/>
                {errors.cfPassword && <span className='text-danger'> {errors.cfPassword}</span>}
                </div>
              </div>
            </div>
            <div className="registration-submit">
              <button type="submit" id='registration-submit'>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration