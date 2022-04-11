import {AiOutlinePlus} from 'react-icons/ai'
import {BiMinus} from 'react-icons/bi'
import {BsTrash} from 'react-icons/bs'
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';

const CartItem = ({cartItem, removeItem}) => {

    const {user} = useContext(GlobalContext)

    const [food, setFood] = useState({
        foodAmmount: null,
        foodPrice: null
    })

    const subtractFood = () => {
        if (food.foodAmmount > 1) {
        const newFoodAmmount = food.foodAmmount - 1
        setFood({
            foodAmmount: newFoodAmmount,
            foodPrice: cartItem.food.price * newFoodAmmount
        })
        const incrim = { incrim: 'substract' }

        fetch(
            `https://o-food-delivery.herokuapp.com/carts/${cartItem._id}`,
          {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(incrim)
          }
        ).then(res => {
          return res.json()
        }).then(data => {
          console.log(data);
        }).catch(err => {
          console.log(err);
        })
        }  
    }

    const addFood = () => { 
        const newFoodAmmount = food.foodAmmount + 1
        setFood({
            foodAmmount: newFoodAmmount,
            foodPrice: cartItem.food.price * newFoodAmmount
        })

        const incrim = { incrim: 'add' }

        fetch(
          `https://o-food-delivery.herokuapp.com/carts/${cartItem._id}`,
          {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(incrim)
          }
        ).then(res => {
          return res.json()
        }).then(data => {
          console.log(data);
        }).catch(err => {
          console.log(err);
        })
    }

    const onDelete = () => {
        removeItem(cartItem._id)
        fetch(
            `https://o-food-delivery.herokuapp.com/carts/${cartItem._id}/${user._id}`,
            {
              method: 'DELETE'
            }
          ).then(res => {
            return res.json()
          }).then(data => {
            console.log(data);
          }).catch(err => {
            console.log(err);
          })
    }

    useEffect(() => {
        setFood({
            foodAmmount: cartItem.ammount,
            foodPrice: cartItem.food.price * cartItem.ammount
        })
    }, [cartItem.food.price, cartItem.ammount])

  return (
    <div className='cart__cart-item' >
        <div className="cart__food-img">
            <img src={`https://o-food-delivery.herokuapp.com/${cartItem.food.image}`} alt="food" />
        </div>
      <div className="cart__food-info">
        <h3>{cartItem.food.name}</h3>
        <div className="cart__food-price">
            <div className='cart__food-incrim'>
                <BiMinus onClick={subtractFood} />
                <span>{food.foodAmmount}</span>
                <AiOutlinePlus onClick={addFood} />
                <BsTrash onClick={onDelete} />
            </div>
            <h4>Price = <span>{food.foodPrice}</span> eth</h4>
        </div>
      </div>
    </div>
    );
};

export default CartItem;
