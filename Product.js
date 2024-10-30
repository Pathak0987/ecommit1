import React from 'react'
import './Product.css'

const Product = ({id,name,image,price,discount, onAddToCart}) => {

  const handleAddToCart = () =>{
    onAddToCart(id);
  }
  return (
    <div className='product-cart'>
        <img className='product-image' src={image} alt={name}></img>
        <h4 className='product-name'>{name}</h4>
        <p className='product-price'>{price}</p>
        <p className='product-discount'>{discount}</p>
        <button onClick={handleAddToCart} className='add-to-cart-button'>Add to cart</button>
    </div>
  )
}

export default Product