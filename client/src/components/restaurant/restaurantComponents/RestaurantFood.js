import {AiOutlinePlus} from 'react-icons/ai'
import {BiMinus} from 'react-icons/bi'
import { useContext, useEffect, useState } from 'react';
import {GlobalContext} from '../../../context/GlobalContext'

const RestaurantFood = ({food}) => {

    const [foodAmmount, setFoodAmmount] = useState(0)
    const [added, setAdded] = useState(false)

    const {user} = useContext(GlobalContext)

    const addToCart = () => {

        const cartItem = {
             foodId: food._id,
             ammount: foodAmmount,
            } 

        fetch(`http://localhost:5000/carts/${user._id}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cartItem)
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
        setAdded(true)
    }

    useEffect(() => {
        setAdded(false)
    }, [])

  return <div className='restaurant__restaurant-food' >
      <div className="restaurant__food-img">
          <img src={`http://localhost:5000/foods/images/${food.image}`} alt="food" />
      </div>
      <div className="restaurant__food-info">
          <h1> {food.name} </h1>
            <img src={`http://localhost:5000/foods/images/${food.image}`} alt="food" />
          <p> price = {food.price} eth </p>
          <div className="restaurant__add-food">
               { foodAmmount !== 0 ?
               <button style={{background: 'rgb(192, 192, 192)'}} >-_- </button>:
               <button onClick={() => setFoodAmmount(1)} >Add </button>
               }
                {foodAmmount !== 0 ?
                <>
                <div className='restaurant__food-incrim'>
                    <BiMinus onClick={() => setFoodAmmount(foodAmmount - 1)} />
                    <span>{foodAmmount}</span>
                    <AiOutlinePlus onClick={() => setFoodAmmount(foodAmmount + 1)} />
                </div>
                <h3 onClick={() => {
                    setFoodAmmount(0)
                     addToCart()
                    }}>Confirm</h3>
                </>
                :
                added && <h5>Added</h5>
                }
          </div>
      </div>
  </div>;
};

export default RestaurantFood;
