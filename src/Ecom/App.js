import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Cart from './Cart'
const App = () => {
  const [show, setShow] = useState(true)
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])
  const [addedToCart, setAddedToCart] = useState([]);

  useEffect(() => {
    // Update addedToCart state based on items in the cart
    setAddedToCart(cart.map(item => item.id));
  }, [cart]);

  const handleChange = (item, d) => {
    const updatedCart = cart.map(cartItem => 
      cartItem.id === item.id ? { ...cartItem, amount: cartItem.amount + d } : cartItem
    );
    setCart(updatedCart);
  };

  const handleClick = (item) => {
    if (!cart.some(cartItem => cartItem.id === item.id)) {
      setCart([...cart, { ...item, amount: 1 }]);
    }
  };

  return (
    <div className='App'>
      <Navbar setShow={setShow} setSearch={setSearch} size={cart.length} />
      {show ? (
        <Home search={search} handleClick={handleClick} addedToCart={addedToCart} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  );
};

export default App;