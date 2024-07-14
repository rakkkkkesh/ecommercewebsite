import { useNavigate } from 'react-router-dom';
import './Style/Cards.css';

const Card = ({ item }) => {
  const { title, price, image, category, description, rating } = item;
 
  const navigate = useNavigate();
  const navigateToDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className='Cards'>
      <img src={image} height={'200px'} width={'250px'} alt=''></img>
      <p>{title}</p>
      <button className='btn1' onClick={() => navigateToDetails(item.id)}>
        See Details
      </button>
    </div>
  );
};

export default Card;


