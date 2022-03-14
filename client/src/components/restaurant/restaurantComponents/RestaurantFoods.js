import RestaurantFood from './RestaurantFood';
import { useParams } from 'react-router-dom';
import useFetch from '../../other/useFetch'

const RestaurantFoods = () => {

  const {id} = useParams()
  const {data: restaurant, isPending, error} = useFetch(`http://localhost:8000/restaurants/${id}`)


  return <div className='restaurant__restaurant-foods' >
      {error && <h5>error</h5>} 
      {isPending && <div class="dot-revolution"></div>} 
      {restaurant && restaurant.foods.map(food => {
      return <RestaurantFood food={food} />
    })}
  </div>;
};

export default RestaurantFoods;
