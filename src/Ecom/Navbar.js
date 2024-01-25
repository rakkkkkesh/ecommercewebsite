// import React from 'react';
// import './Style/Navbar.css';

// const Navbar = ({ setShow, setSearch, size }) => {
//   return (
//     <div className='Navbar'>
//       <nav>
//       <label for="check" class="checked"><i class="fa-solid fa-bars"></i></label>
//             <input type="checkbox" id="check"/>
//         <div className='list'>
//         <div className='nav-link links' onClick={() => setShow(true)}>Home</div>
//         <div className='nav-link links'>About</div>
//         <div className='nav-link links'>Gallery</div>
//         <div className='nav-link links'>Contact</div>
//         </div>
//         <div className='search-container'>
//           <input type='text' placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
//         </div>
//         <div className='nav-link cart-link' onClick={() => setShow(false)}>
//           <i class="fa-solid fa-cart-plus"></i> <sup>{size}</sup>
//         </div>
//       </nav>


//     </div>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
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
            <div className='nav-link links' onClick={() => setShow(true)}>Home</div>
            <div className='nav-link links'>About</div>
            <div className='nav-link links'>Gallery</div>
            <div className='nav-link links'>Contact</div>
          </div>
        </div>
        <div className='nav-content2'>
          <div className='search-container'>
            <input type='text' placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
          </div>
          <div className='nav-link cart-link' onClick={() => setShow(false)}>
            <i className="fa-solid fa-cart-plus"></i> <sup>{size}</sup>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
