import React from 'react'
import './product.css'
import { useContext } from 'react';
import { cartContext } from '../App';

const Product = ({product}) => {

  const {cart,setCart}=useContext(cartContext);
  const name=product.name.length >21 ? product.name.substring(0,20) +"..": product.name;
  
  const addCart =()=>{
    setCart([...cart,product]);
  }
  const removeCart=()=>{
    setCart(cart.filter((c)=>c.id!==product.id))
  }
  return (
    <div className='pdt'>
        <div className='img'>
            <img src={product.pic}alt={product.name}/>
        </div>
        <div className='details'>
         <h3>{name}</h3>
         <p>Price Rs:{product.amount}</p>
         {cart.includes(product)?(<button className='btn-rmv' onClick={removeCart}>Remove to Cart</button>):<button onClick={addCart}>Add to Cart</button>}
        </div>
      
    </div>
  )
}

export default Product
