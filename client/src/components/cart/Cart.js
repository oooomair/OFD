import './cart.scss'
import CartCheckout from './cartComponents/CartCheckout';
import CartItems from './cartComponents/CartItems';

const Cart = () => {
  return <div className='cart' >
    <h1>CART</h1>
    <div className='cart__cart-cart' >
      <CartItems/>
      <CartCheckout/>
     </div>;
  </div>;
};

export default Cart;
