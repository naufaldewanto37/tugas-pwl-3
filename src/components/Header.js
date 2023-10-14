import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
    return (
      <header>
        <h1><Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link></h1>
      </header>
    );
};
  
export default Header;
