import { Link } from 'react-router-dom';

const ExploreRestaurant = ({restaurant}) => {

  return <Link className='explore__restaurant' to={`/restaurant/${restaurant._id}`} >
        <div className="explore__restaurant-logo">
        <img src={`https://o-food-delivery.herokuapp.com/restaurants/images/${restaurant.logo}`} alt="restaurant" />
        </div>
        <div className="explore__restaurant-info">
          <h2>{restaurant.name}</h2>
          <span>{restaurant.type}</span>
          <p>{restaurant.cities}</p>
          <h3>{restaurant.priceRange}</h3>
        </div>
    </Link>;
};

export default ExploreRestaurant;
