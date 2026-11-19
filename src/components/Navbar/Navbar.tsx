import React, { useState } from 'react';
import { ViewType } from '../../App';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <h2> suryansh. </h2>
      </div>

      <ul className='navbar_list'>
        <li className='navbar_item'> //Experience. </li>
        <li className='navbar_item'> //Skills. </li>
        <li className='navbar_item'> //Projects. </li>
        <li className='navbar_item'> //Contact. </li>
      </ul>
    </nav>
  )
}

export default Navbar