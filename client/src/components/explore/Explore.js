import ExploreRestaurants from './exploreComponents/ExploreRestaurants';
import './explore.scss';
import useFetch from '../other/useFetch'

const Explore = () => {

  const {data: restaurants, isPending, error} = useFetch(`http://localhost:8000/restaurants`)

  return <div className='explore' >
      <h1>Restaurants</h1>
      <input type="text" />
      {error && <h5>error</h5>} 
      {isPending && <div class="dot-revolution"></div>} 
      {restaurants && <ExploreRestaurants restaurants={restaurants} />}
  </div>;
};

export default Explore;
