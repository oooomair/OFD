import kfcfood from '../../../assets/kfcfood.png'
import {AiOutlinePlus} from 'react-icons/ai'
import {BiMinus} from 'react-icons/bi'
import { useState } from 'react';

const ResturantFood = () => {

    const [foodAmmount, setFoodAmmount] = useState(0)

  return <div className='resturant__resturant-food' >
      <div className="resturant__food-img">
          <img src={kfcfood} alt="food" />
      </div>
      <div className="resturant__food-info">
          <h1>Mighty Zinger Meal </h1>
            <img src={kfcfood} alt="food" />
          <p>price: 0.8eth</p>
          <div className="resturant__add-food">
               { foodAmmount !== 0 ?
               <button style={{background: 'rgb(192, 192, 192)'}} >-_- </button>:
               <button onClick={() => setFoodAmmount(1)} >Add </button>
               }
                {foodAmmount !== 0 &&
                <>
                <div className='resturant__food-incrim'>
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

export default ResturantFood;
