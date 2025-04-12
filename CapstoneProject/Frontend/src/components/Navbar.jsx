import React from 'react'
import {NavLink} from 'react-router-dom'
import  './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <NavLink>Home</NavLink>
        <NavLink>SignUp</NavLink>
        <NavLink>Login</NavLink>
        <NavLink>Cart</NavLink>
        <NavLink>LogOut</NavLink>
    </div>
  )
}

export default Navbar