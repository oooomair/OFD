import {AiOutlinePlus} from 'react-icons/ai'
import {BiMinus} from 'react-icons/bi'
import { useState } from 'react';

const RestaurantFood = ({food}) => {

    const [foodAmmount, setFoodAmmount] = useState(0)

  return <div className='restaurant__restaurant-food' >
      <div className="restaurant__food-img">
          <img src={food.image} alt="food" />
      </div>
      <div className="restaurant__food-info">
          <h1> {food.name} </h1>
            <img src={food.image} alt="food" />
          <p> price = {food.price} eth </p>
          <div className="restaurant__add-food">
               { foodAmmount !== 0 ?
               <button style={{background: 'rgb(192, 192, 192)'}} >-_- </button>:
               <button onClick={() => setFoodAmmount(1)} >Add </button>
               }
                {foodAmmount !== 0 &&
                <>
                <div className='restaurant__food-incrim'>
                    <BiMinus onClick={() => setFoodAmmount(foodAmmount - 1)} />
                    <span>{foodAmmount}</span>
                    <AiOutlinePlus onClick={() => setFoodAmmount(foodAmmount + 1)} />
                </div>
                <h3>Confirm</h3>
                </>}
          </div>
      </div>
  </div>;
};

export default RestaurantFood;
