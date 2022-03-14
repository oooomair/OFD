import ExploreRestaurant from "./ExploreRestaurant";

const ExploreRestaurants = ({restaurants}) => {
  return <div className='explore__restaurants' >
    {restaurants.map(restaurant => {
    return <ExploreRestaurant key={restaurant.id} restaurant={restaurant} />
    })}
  </div>;
};

export default ExploreRestaurants;
