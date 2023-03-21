import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import './Chips.css'

const Chips = () => {
    const [bags, setBags] = useState(0);

    const eatBag = () => {
        setBags(() => {
            bags++;
        })
    }

  return (
    <div className='chips container'>
        <h2>BAGS EATEN: {bags}</h2>
        <button onClick={eatBag}>NOM NOM NOM</button>
        <NavLink exact to="/">GO BACK</NavLink>
    </div>
  )
}

export default Chips