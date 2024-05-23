import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <span>Shokugeki no Soma</span>
        <nav>
            <span><Link to="/">Home</Link></span>
            <span><Link to="/reserve">Reserve</Link></span>
            <span><Link to="/reservations">Reservation</Link></span>
        </nav>
    </div>
  )
}

export default Header