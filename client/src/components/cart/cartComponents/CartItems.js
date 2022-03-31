import CartItem from "./CartItem";

const CartItems = ({cartItems, removeItem}) => {

  return <div className='cart__cart-items' >
      {cartItems.length >= 1 ? cartItems.map(cartItem => {
      return <CartItem key={cartItem._id} removeItem={removeItem} cartItem={cartItem} />
      }) 
      : 
      <>
      <h6>Cart Empty</h6>
      <div className='cart__cart-item' >
        <div className="cart__food-img">
        </div>
        <div className="cart__food-info">
        </div>
    </div>
    </>
      }
  </div>;
};

export default CartItems;