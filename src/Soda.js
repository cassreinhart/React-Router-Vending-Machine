import React from 'react'
import {NavLink} from 'react-router-dom'
import './Soda.css'

const Soda = () => {
  return (
    <div className='soda container'>
        <h2>OMG SUGARRRR</h2>
        <NavLink exact to="/">GO BACK</NavLink>
    </div>
  )
}

export default Soda