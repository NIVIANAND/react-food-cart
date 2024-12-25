import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

const Header = ({cart}) => {
  return (
    <div className='navbar'>
        <div className='logo'>Food Cart</div>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
            <Link to={"/viewcart"}><span className='cartcount'>{cart.length}</span>ViewCart</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header