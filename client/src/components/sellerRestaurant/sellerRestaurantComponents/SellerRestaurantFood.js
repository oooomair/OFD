import mighty from '../../../assets/mightyZinger.png'

const SellerRestaurantFood = () => {
  return (
    <div className='seller-restaurant__seller-restaurant-food' >
        <h3>Mighty Zinger Meal</h3>
        <img src={mighty} alt="logo" />
        <span>Total Sales : 126 eth</span>
        <span>Total Products Sold : 550</span>
        <p>Price : 1 eth</p>
        <button>Change Price</button>
        <button>Remove Item</button>
    </div>
  )
}

export default SellerRestaurantFood