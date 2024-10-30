import React from 'react'
import './Payment.css'
import {useLocation } from 'react-router-dom';

const Payment = () => {
    const location = useLocation();
    const {product}=location.state;

  const handlePayment = () =>{
    console.log(`Payment in Process`)
  }  
  return (
    <div className='payment-container'>
        <h2> Payment For : {product.name}</h2>
        <p>{product.price}</p>
        <button className='payment-button'  onClick={handlePayment}>Pay Now</button>
    </div>
  )
}

export default Payment