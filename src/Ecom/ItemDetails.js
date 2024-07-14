import React from 'react';
import { useParams } from 'react-router-dom';
import Data from './Data';
import './Style/ItemDetails.css';

const ItemDetails = () => {
  const { id } = useParams();
  const item = Data.find(item => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className='ItemDetails'>
      <img src={item.image} alt={item.title} />
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>Category: {item.category}</p>
      <p>Rating: {item.rating.rate} ⭐</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default ItemDetails;
