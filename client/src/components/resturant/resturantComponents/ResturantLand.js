import React from 'react';
import kfc from '../../../assets/kfc.png'

const ResturantLand = () => {
  return <div className='resturant__resturant-land' >
      <div className="resturant__stuff">
        <div className="resturant__logo">
            <img src={kfc} alt="" />
        </div>
        <div className="resturant__info">
            <h1>KFC</h1>
            <img src={kfc} alt="" />
            <span>Finger Lickin Good</span>
            <p>American, burgers, chicken</p>
            <p>Dubai, Chicago</p>
        </div>
      </div>

        
  </div>;
};

export default ResturantLand;
