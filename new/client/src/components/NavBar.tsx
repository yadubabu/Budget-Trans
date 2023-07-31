import React from 'react';
import {NavLink} from 'react-router-dom'
import './navbar.css';


type Props = {}

const NavBar = (props: Props) => {
  return (
    <ul className='navbar navbar-expand-md d-flex'>
      <li><NavLink className='nav-link' to='/'>Home</NavLink></li>
      <li><NavLink className='nav-link' to='/login'>Login</NavLink></li>
      <li><NavLink className='nav-link' to='/register'>Register</NavLink></li>

    </ul>
  )
}

export default NavBar;