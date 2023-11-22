import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <NavLink to="/" className="logo">
        <img src={logo} alt="logo" />
        <h2>Github Repository</h2>
      </NavLink>
    </header>
  );
}

export default Header