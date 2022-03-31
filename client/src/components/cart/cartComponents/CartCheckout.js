const CartCheckout = ({cartItems}) => {

  const values = cartItems && cartItems.map(cartItem => {
    return cartItem.ammount * cartItem.food.price
  })

  const total = values && values.reduce((prev, cur) => prev + cur, 0)

  return <>
    {<div className='cart__cart-checkout' >
        <h2>Total = {total} eth</h2>
        <span>Check Out</span>
    </div>}
  </>;
};

export default CartCheckout;
