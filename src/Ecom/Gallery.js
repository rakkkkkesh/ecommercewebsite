import React from 'react';
import { Link } from 'react-router-dom';
import Data from './Data';
import './Style/Gallery.css';

const Gallery = () => {
  return (
    <div className='gallerydetails'>
    <h1>Your Gallery is here</h1>
    <div className="gallery">
      {Data.map(item => (
        <div key={item.id} className="gallery-item">
          <Link to={`/item/${item.id}`}>
            <img src={item.image} alt={item.title} />
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Gallery;
