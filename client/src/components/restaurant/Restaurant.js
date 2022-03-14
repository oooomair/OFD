import React from 'react';
import RestaurantLand from './restaurantComponents/RestaurantLand';
import './restaurant.scss'
import RestaurantFoods from './restaurantComponents/RestaurantFoods';

const Restaurant = () => {

  return <div className='restaurant'>
      <RestaurantLand />
      <RestaurantFoods/>
  </div>;
};

export default Restaurant;
