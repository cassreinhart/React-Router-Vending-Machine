import React from 'react'
import {NavLink} from 'react-router-dom';
import NavBar from './NavBar'
import './VendingMachine.css'

const VendingMachine = () => {
  return (
    <div className='vendingmachine'>
        <div className='container'>
            <h1>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h1>
        </div>
        <NavBar />
    </div>
  )
}

export default VendingMachine