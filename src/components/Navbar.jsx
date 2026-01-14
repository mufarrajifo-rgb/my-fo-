import React from 'react';
import { Link } from 'react-router-dom';
import "./Styles.css";


const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Mufa Portfolio</Link>
      </div>
      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.path} className="navbar-item">{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
