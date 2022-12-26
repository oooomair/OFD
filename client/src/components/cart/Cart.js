import './cart.scss'
import CartCheckout from './cartComponents/CartCheckout';
import CartItems from './cartComponents/CartItems';
import { useContext, useEffect, useState } from 'react';
import {GlobalContext} from '../../context/GlobalContext'
import useFetch from "../other/useFetch";

const Cart = () => { 

  const [cartItemsState, setCartItemState] = useState(null)

  const {user} = useContext(GlobalContext)
  const {data: cartItems, isPending, error} = useFetch(`https://ofd.up.railway.app/carts/${user._id}`)

  console.log(cartItemsState);

  useEffect(() => {
    cartItems && setCartItemState(cartItems) 
  }, [cartItems])


  const removeItem = id => {
    setCartItemState(cartItemsState.filter(({ _id }) => _id !== id))
  }

  return <div className='cart' >
    <h1>CART</h1>
    {error && <h5>error</h5>} 
    {isPending && <div className="dot-revolution"></div>} 
    {cartItemsState && <div className='cart__cart-cart' >
      <CartItems removeItem={removeItem} cartItems={cartItemsState} />
      <CartCheckout cartItems={cartItemsState}/>
     </div>}
  </div>;
};

export default Cart;
