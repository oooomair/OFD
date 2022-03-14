import SellerRestaurantFood from './SellerRestaurantFood'

const SellerRestaurantFoods = () => {
  return (
    <div className='seller-restaurant__seller-restaurant-foods'>
        <h2>Foods</h2>
        <button>Add Item</button>
        <div className="seller-restaurant__foods-container">
            <SellerRestaurantFood/>
            <SellerRestaurantFood/>
            <SellerRestaurantFood/>
            <SellerRestaurantFood/>
            <SellerRestaurantFood/>
        </div>
    </div>
  )
}

export default SellerRestaurantFoods