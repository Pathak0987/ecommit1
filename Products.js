import React, {useContext, useState} from 'react'
import Product from './Product';
import './Products.css';
import { CartContext } from './CartContext';

const productData= [
  {
    id: 1,
    name: 'Electric Guitar',
    category:'Musical Instruments',
    price: '₹500',
    discount: '10% Off',
    image: 'https://images7.alphacoders.com/881/881331.jpg',
  },
  {
    id: 2,
    name: 'Digital Piano',
    category:'Musical Instruments',
    price: '₹1000',
    discount: '15% Off',
    image: 'https://www.gak.co.uk/cdn-cgi/imagedelivery/g0MaIyh1SZefBaZsKuFj0g/prod/products/3a7f/6a1d-b86e-4b9b-aab6-98989691542b.jpg/650x630',
  },
  {
    id: 3,
    name: 'Drum Set',
    category:'Musical Instruments',
    price: '₹700',
    discount: '20% Off',
    image: 'https://www.gak.co.uk/cdn-cgi/imagedelivery/g0MaIyh1SZefBaZsKuFj0g/prod/products/93c6/be0c-bf98-4db4-85b7-755d7a447f81.jpg/650x630',
  },
  {
    id: 4,
    name: 'Mobile Phone',
    category:'Smart Phones',
    price: '₹800',
    discount: '5% Off',
    image: 'https://m.media-amazon.com/images/I/81dT7CUY6GL._SL1500_.jpg',
  },
  {
    id: 5,
    name: 'Television',
    category:'Electronics',
    price: '₹1500',
    discount: '25% Off',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/in/qa75qn800ckxxl/gallery/in-qled-qn800c-qa75qn800ckxxl-535909387?$1300_1038_PNG$',
  },
  {
    id: 6,
    name: 'Camera',
    category:'Electronics',
    price: '₹1200',
    discount: '10% Off',
    image: 'https://m.media-amazon.com/images/I/6166GKdCA8L._SL1000_.jpg',
  },
  {
    id: 7,
    name: 'Laptop',
    category:'Electronics',
    price: '₹2000',
    discount: '15% Off',
    image: 'https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/8/R/8R1E6PA-5_T1691725028.png',
  },
  {
    id: 8,
    name: 'Smart Watch',
    category:'Wearables',
    price: '₹300',
    discount: '5% Off',
    image: 'https://m.media-amazon.com/images/I/71DFCg4yVBL._SL1500_.jpg',
  },
];

const Products = () => {
  const {addToCart} = useContext(CartContext);

  const [selectedCategory, setSelectedCategory] = useState('ALL');


  const handleCategoryChange = (category) =>{
    setSelectedCategory(category);
  }

  const filteredProducts = selectedCategory === 'ALL' 
  ? productData
  : productData.filter(product => product.category === selectedCategory);

  return (
    <div className='products-container'>
      <div className='category-filter'>
        <button onClick={()=> handleCategoryChange('ALL')}>All</button>
        <button onClick={()=> handleCategoryChange('Electronics')}>Electronics</button>
        <button onClick={()=> handleCategoryChange('Musical Instruments')}>Musical Instruments</button>
        <button onClick={()=> handleCategoryChange('Home Appliances')}>Home Appliances</button>
        <button onClick={()=> handleCategoryChange('Smart Phones')}>Smart Phones</button>
        <button onClick={()=> handleCategoryChange('Wearables')}>Wearables</button>
      </div>
      <div className='products'>
        {filteredProducts.map(product =>(
          <Product 
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          discount={product.discount}
          onAddToCart={ ()=> addToCart(product)}
      
      />

        ))}
        
      
      </div>
    </div>
  )
}

export default Products