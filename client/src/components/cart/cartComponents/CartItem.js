import mightyZinger from '../../../assets/mightyZinger.png'
import {AiOutlinePlus} from 'react-icons/ai'
import {BiMinus} from 'react-icons/bi'
import {BsTrash} from 'react-icons/bs'
import { useState } from 'react';

const CartItem = () => {

    const [foodAmmount, setFoodAmmount] = useState(0)

    const subtractFood = () => {
        if (foodAmmount > 1) {
            setFoodAmmount(foodAmmount - 1)
        }
    }

  return <div className='cart__cart-item' >
        <div className="cart__food-img">
            <img src={mightyZinger} alt="food" />
        </div>
      <div className="cart__food-info">
        <h3>Mighty Zinger Meal</h3>
        <div className="cart__food-price">
            <div className='cart__food-incrim'>
                <BiMinus onClick={subtractFood} />
                <span>{foodAmmount}</span>
                <AiOutlinePlus onClick={() => setFoodAmmount(foodAmmount + 1)} />
                <BsTrash />
            </div>
            <h4>Price = <span>1.9eth</span></h4>
        </div>
      </div>
  </div>;
};

export default CartItem;
