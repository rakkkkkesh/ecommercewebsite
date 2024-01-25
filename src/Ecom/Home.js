import React, { useState } from 'react';
import Data from './Data';
import Card from './Card';
import './Style/Home.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Home = ({ search, handleClick }) => {
  const filteredData = Data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase())
  );

  const [addedToCart, setAddedToCart] = useState([]);

  const handleAddToCart = (item) => {
    if (!addedToCart.includes(item.id)) {
      handleClick(item);
      setAddedToCart((prev) => [...prev, item.id]);
    }
  };
  
  return (
    <div className='Home'>
      <Carousel>
        {filteredData.map((item) => (
          <header
            className='Homeheader'
            style={{ height: '600px', width: '80%', margin: 'auto' }}
            key={item.id}
          >
            <div className='headerdiv'>
              <img src={item.image} alt='' />
              <p className='legend'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>{item.category}</p>
                <p>
                  {item.rating.rate}{' '}
                  <i className="fa-solid fa-star" style={{ color: 'yellow', marginLeft: '5px' }}></i>
                </p>
                <button
                  onClick={() => handleAddToCart(item)}
                  disabled={addedToCart.includes(item.id)}
                  className={addedToCart.includes(item.id) ? 'added' : ''}
                >
                  {addedToCart.includes(item.id) ? 'Added To Cart' : 'Add To Cart'}
                </button>
                {addedToCart.includes(item.id) && (
                  <div className='popup'>
                    <p className='popup-p'>Item added to cart successfully!</p>
                  </div>
                )}
              </p>
            </div>
          </header>
        ))}
      </Carousel>
      <section className='Sec'>
        {filteredData.map((item) => (
          <Card
            key={item.id}
            handleClick={() => handleAddToCart(item)}
            item={item}
            addedToCart={addedToCart.includes(item.id)}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;


