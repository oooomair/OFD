import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import congrats from '../../../assets/congrats.gif'
import { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';

const CartCheckout = ({cartItems}) => {

    const {user} = useContext(GlobalContext)
    let navigate = useNavigate()

  const values = cartItems && cartItems.map(cartItem => {
    return cartItem.ammount * cartItem.food.price
  })

  const onCheckout = () => {
    
    Swal.fire({
      title: 'Congrats!',
      text: 'You bought some fake food you should be proud of yourself',
      width: 500,
      imageUrl: congrats,
      imageWidth: 340,
      background: '#d2e2ff',
      imageHeight: 220,
      imageAlt: 'Custom image',
    }).then(() =>{
    navigate('/', {replace: true})
    })

    fetch(
      `http://localhost:5000/carts/${user._id}`,
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

  const total = values && values.reduce((prev, cur) => prev + cur, 0)

  return <div className='cart__cart-checkout' >
        <h2>Total = {total} eth</h2>
        <span onClick={onCheckout} >Check Out</span>
    </div>
};

export default CartCheckout;
