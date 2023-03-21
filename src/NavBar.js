import React from 'react'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='NavBar'>
        <NavLink exact to="/">SODE</NavLink>
        <NavLink exact to="/eat">CHIPS</NavLink>
        <NavLink exact to="/drink">FRESH SARDINES</NavLink>
    </nav>
  )
}

export default NavBar

        