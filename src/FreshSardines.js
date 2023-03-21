import React from 'react'
import {NavLink} from 'react-router-dom'
import './FreshSardines.css'

const FreshSardines = () => {
  return (
    <div className='freshsardines container'>
        <h2>YOU DON'T EAT THE SARDINES. THE SARDINES EAT YOU.</h2>
        <NavLink exact to="/">GO BACK</NavLink>
    </div>
  )
}

export default FreshSardines