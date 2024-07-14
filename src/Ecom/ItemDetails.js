import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Data from './Data';
import './Style/ItemDetails.css';

const ItemDetails = ({ handleClick, addedToCart }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { id } = useParams();
  const item = Data.find(item => item.id === parseInt(id));

  useEffect(() => {
    if (item && addedToCart.includes(item.id)) {
      setShowPopup(true);
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [item, addedToCart]);

  if (!item) {
    return <div>Item not found</div>;
  }

  const handleAddToCart = () => {
    if (!addedToCart.includes(item.id)) {
      handleClick(item);
    }
  };

  return (
    <div className='ItemDetails'>
      <div className='ItemDetailsMain'>
        <div>
          <img src={item.image} alt={item.title} />
          <h1>{item.title}</h1>
        </div>
        <div className='ItemDetailsSubMain'>
          <p className='description'>{item.description}</p>
          <p><b>Category:</b> {item.category}</p>
          <p><b>Rating:</b> {item.rating.rate} ⭐</p>
          <p><b>Price:</b> ${item.price}</p>
        </div>
        <button 
          className={`btn2 ${addedToCart.includes(item.id) ? 'added' : ''}`} 
          onClick={handleAddToCart} 
          disabled={addedToCart.includes(item.id)}
        >
          {addedToCart.includes(item.id) ? 'Added to Cart' : 'Add To Cart'}
        </button>
        {showPopup && (
          <div className='popup'>
            <p className='popup-p'>Item added to cart successfully!</p>
          </div>
        )}
        <Link to="/" className="btn-back">Back to Home</Link>
      </div>
    </div>
  );
};

export default ItemDetails;
