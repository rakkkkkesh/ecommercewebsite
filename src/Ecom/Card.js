import React, { useState, useEffect } from 'react';
import './Style/Cards.css';

const Card = ({ item, handleClick, addedToCart }) => {
  const { title, price, image, category, description, rating } = item;
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (addedToCart) {
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  }, [addedToCart]);

  const handleAddToCart = () => {
    if (!addedToCart) {
      handleClick(item);
    }
  };
  return (
    <div className='Cards'>
      <img src={image} height={'200px'} width={'250px'} alt=''></img>
      <p>{title}</p>
      <h5>{category}</h5>
      <p>Rating: {rating.rate}👁️‍🗨️</p>
      <p>Price: {price}</p>
      <button className={`btn1 ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        {open ? 'Read Less' : 'Read More'}
      </button>
      {open && (
        <div className='description'>
          <p>{description}</p>
        </div>
      )}
      <button className={`btn2 ${addedToCart ? 'added' : ''}`} onClick={handleAddToCart} disabled={addedToCart}>
        {addedToCart ? 'Added to Cart' : 'Add To Cart'}
      </button>

      {showPopup && (
        <div className='popup'>
          <p className='popup-p'>Item added to cart successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Card;


