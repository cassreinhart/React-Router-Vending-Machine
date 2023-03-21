import React from 'react'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='NavBar container'>
        <NavLink exact to="/soda">SODA</NavLink>
        <NavLink exact to="/chips">CHIPS</NavLink>
        <NavLink exact to="/fresh-sardines">FRESH SARDINES</NavLink>
    </nav>
  )
}

export default NavBar

        