import React, { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Cart from './Cart'
const App = () => {
  const [show, setShow] = useState(true)
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])


  function handleChange(item, d) {
    let arr = cart
    let ind = cart.indexOf(item)
    arr[ind].amount += d
    setCart([...cart])
  }

  function handleClick(item) {
    setCart([...cart, item])
  }
  return (
    <div className='App'>
      <Navbar setShow={setShow} setSearch={setSearch} size={cart.length} />
      {(show) ? (<Home search={search} handleClick={handleClick} />) : (<Cart cart={cart} setCart={setCart} handleChange={handleChange} />)}
    </div>
  )
}

export default App
