import { NavLink} from 'react-router-dom'
import '../page/css/Registration.css'
import React, {useState} from 'react'
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
    setValues(prev => ({...prev, [event.target.name]: event.target.value}))    
  }    

  const handleSubmit = (event) => {        
    event.preventDefault();        
    const err = Validation(values); setErrors(err);         
    if(err.email === "" && err.mobileNumber === "" && err.password === "") {      
      console.log(values)     
      axios.post('http://localhost:3001/register', values)            
      .then(res => {    
        alert("Registed Success")            
        navigate('/login');            
      })            
        .catch(err => {
          console.log(err)
          alert(err.response.data)
        })      
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
                  <input type="text" name="email" placeholder='Enter Email ID' onChange={handleInput} style={{color:'black'}}/>
                  {errors.email && <span className='text-danger' style={{color:"red", fontSize:"12px"}}> {errors.email}</span>}
                </div>
              </div>
              <div className="mnumber">
                <label htmlFor="mnumber">MOBILE NUMBER</label>
                <div className="input-login">
                <input type="number" name="mobileNumber" placeholder='Enter Mobile Number *' onChange={handleInput} style={{color:'black'}}/>
                {errors.mobileNumber && <span className='text-danger' style={{color:"red", fontSize:"12px"}}> {errors.mobileNumber}</span>}
                </div>
              </div>
            </div>
            <div className="c2">
              <div className="rpassword">
                <label htmlFor="rpassword">CREATE PASSWORD</label>
                <div className="input-login">
                <input type="password" name="password" placeholder='Enter Password *' onChange={handleInput} style={{color:'black'}}/>
                {errors.password && <span className='text-danger' style={{color:"red", fontSize:"12px"}}> {errors.password}</span>}
                </div>
              </div>
              <div className="crpassword">
                <label htmlFor="crpassword">CONFIRM PASSWORD</label>
                <div className="input-login">
                <input type="password" name="cfPassword" placeholder='Re-enter password *' onChange={handleInput} style={{color:'black'}}/>
                {errors.cfPassword && <span className='text-danger' style={{color:"red", fontSize:"12px"}}> {errors.cfPassword}</span>}
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