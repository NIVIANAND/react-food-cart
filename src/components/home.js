import React, { useState } from 'react'
import data from '../assets/products.json'
import Product from './product';
import './home.css'

const Home = () => {
  const[products]=useState(data);
  return (
    <div className='pdt-container'>
      {products.map((product)=>(
        <Product key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default Home