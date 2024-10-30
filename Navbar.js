import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
          <Link to="/home">Home</Link> 
          <Link to="/products">Product</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>    
    </div>
  )
}

export default Navbar