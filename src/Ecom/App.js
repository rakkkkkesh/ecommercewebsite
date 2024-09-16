import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Gallery from './Gallery';
import Contact from './Contact';
import About from './About';
import FAQ from './FAQ';
import Cart from './Cart';
import ItemDetails from './ItemDetails';
import Returns from './Returns';
import ShippingInfo from './ShippingInfo';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

const App = () => {
  const [show, setShow] = useState(true);
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [addedToCart, setAddedToCart] = useState([]);

  useEffect(() => {
    // Update addedToCart state based on items in the cart
    setAddedToCart(cart.map(item => item.id));
  }, [cart]);

const handleChange = (item, d) => {
  const updatedCart = cart.map(cartItem =>
    cartItem.id === item.id ? { ...cartItem, amount: Math.max(cartItem.amount + d, 0) } : cartItem
  );
  setCart(updatedCart);
};


  const handleClick = (item) => {
    if (!cart.some(cartItem => cartItem.id === item.id)) {
      setCart([...cart, { ...item, amount: 1 }]);
    }
  };

  return (
    <Router>
      <div className='App'>
        <Navbar show={show} setShow={setShow} setSearch={setSearch} size={cart.length} />
        <Routes>
          <Route
            path="/ecommercewebsite"
            element={<Home search={search} handleClick={handleClick} addedToCart={addedToCart} />}
          />
           <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/item/:id"
            element={<ItemDetails handleClick={handleClick} addedToCart={addedToCart} />}
          />
           <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
          />
          <Route
            path="/details/:id"
            element={<ItemDetails handleClick={handleClick} addedToCart={addedToCart} />}
          />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/shipping" element={<ShippingInfo />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
