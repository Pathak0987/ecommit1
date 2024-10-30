import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='login-container'>
          <form  className='form-container'>
            <label className='label'>Username:</label>
            <input type='text' name='username' />

            <label className='label'>Password :</label>
            <input type='password' name='password'></input>

            <button className='log-in-button' type='submit'>Enter</button>
          </form>
          <p>Don,t have an Account?</p>
          <button className='Sign-up-button' onclick="#">Sign Up</button>
    </div>
  )
}

export default Login