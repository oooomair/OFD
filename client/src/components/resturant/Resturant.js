import React from 'react';
import ResturantLand from './resturantComponents/ResturantLand';
import './resturant.scss'
import ResturantFoods from './resturantComponents/ResturantFoods';

const Resturant = () => {
  return <div className='resturant' >
      <ResturantLand/>
      <ResturantFoods/>
  </div>;
};

export default Resturant;
