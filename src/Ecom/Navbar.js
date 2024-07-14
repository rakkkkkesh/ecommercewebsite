import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Style/Navbar.css';

const Navbar = ({ setShow, setSearch, size }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='Navbar'>
      <nav>
        <div className='nav-content1'>
          <label htmlFor="check" className="checked" onClick={handleMenuToggle}>
            <i className="fa-solid fa-bars"></i>
          </label>

          <input type="checkbox" id="check" checked={menuOpen} onChange={() => { }} />
          <div className={`list ${menuOpen ? 'menu-open' : ''}`} onClick={handleMenuToggle}>
            <Link to="/ecommercewebsite" className='nav-link links' onClick={() => setShow(true)}>Home</Link>
            <Link to="/gallery" className='nav-link links'>Gallery</Link>
            <Link to="/contact" className='nav-link links'>Contact</Link>
            <Link to="/about" className='nav-link links'>About</Link>
          </div>
        </div>
        <div className='nav-content2'>
          <div className='search-container'>
            <input type='text' placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
          </div>
          <Link to="/cart" className='nav-link cart-link' onClick={() => setShow(false)}>
            <i className="fa-solid fa-cart-plus"></i> <sup>{size}</sup>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
