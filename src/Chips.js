import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

const Chips = () => {
    const [bags, setBags] = useState(0);

    const eatBag = () => {
        setBags(() => {
            bags++;
        })
    }
    
  return (
    <div>
        <h2>BAGS EATEN: {bags}</h2>
        <button onClick={eatBag}>NOM NOM NOM</button>
        <NavLink exact to="/">GO BACK</NavLink>
    </div>
  )
}

export default Chips