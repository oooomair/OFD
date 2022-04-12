import RestaurantFood from './RestaurantFood';
import { useParams } from 'react-router-dom';
import useFetch from '../../other/useFetch'

const RestaurantFoods = () => {

  const {id} = useParams()
  
   const {data: restaurant, isPending, error} = useFetch(`http://localhost:5000/restaurants/${id}`)

  return <div className='restaurant__restaurant-foods' >
      {error && <h5>error</h5>} 
      {isPending ? <div className="dot-revolution"></div>
      :
      restaurant && restaurant.foods.length >= 1 ? restaurant.foods.map(food => {
      return <RestaurantFood key={food._id} food={food} /> 
      }) : <h6>No food Avalaible</h6>}
      </div>;
};

export default RestaurantFoods;
