import React from 'react'
import {NavLink} from 'react-router-dom';
import NavBar from './NavBar'

const VendingMachine = () => {
  return (
    <div>
        <div>
            <h1>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h1>
        </div>
        <NavBar />
    </div>
  )
}

export default VendingMachine