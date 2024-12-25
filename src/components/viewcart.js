import React, { useEffect, useState } from 'react'
import "./viewcart.css"
import { useContext } from 'react';
import { cartContext } from '../App';

const Viewcart = () => {
const {cart}=useContext(cartContext);
const [total,setTotal]=useState(0)
useEffect(()=>{
 setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amount),0))
},[cart])

  return (
    <>
    <h1 className='cart-heading'>Cart Products</h1>
    <div className='cart-container'>
      
      {
        cart.map((product) =>(
          <div className='cart-pdt' key={product.id}>
          <div className='img'>
            <img src={product.pic} alt="img"/>
          </div>
          <div className='cart-pdt-details'>
            <h3>{product.name}</h3>
            <p> price in rs:{product.amount}</p>
          </div>
        </div>
        ))
      }
     
      
     </div>
      <h2 className='cart-price'>Total Amount Rs:{total}</h2>

    
    </>
  )
}

export default Viewcart
