import React from 'react'
import {NavLink} from 'react-router-dom'

const FreshSardines = () => {
  return (
    <div>
        <h2>YOU DON'T EAT THE SARDINES. THE SARDINES EAT YOU.</h2>
        <NavLink exact to="/">GO BACK</NavLink>
    </div>
  )
}

export default FreshSardines