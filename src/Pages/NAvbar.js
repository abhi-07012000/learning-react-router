import React from 'react'
import { NavLink } from 'react-router-dom'

const NAvbar = () => {

  const navLinkStyle = ({isActive}) =>{
    return{
      fontWeight :  isActive ? 'bold' : 'normal' ,
      textDecoration :isActive ? 'none' : 'underline' 
    }
  }


  return (
  <nav className='primary-nav'>
    <ul>
  <NavLink style={navLinkStyle} to="/">Home</NavLink>
  <NavLink style={navLinkStyle} to="/about">About</NavLink>
  <NavLink style={navLinkStyle} to="/contact">Contact</NavLink>
  <NavLink style={navLinkStyle} to="/products">Products</NavLink>
  </ul>
  </nav>
  );
}

export default NAvbar