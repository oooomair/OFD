import './sellerRestaurant.scss'
import SellerRestaurantFoods from './sellerRestaurantComponents/SellerRestaurantFoods'
import SellerRestaurantInfo from './sellerRestaurantComponents/SellerRestaurantInfo'

const SellerRestaurant = () => {
  return (
    <div className='seller-restaurant' >
        <h1>Seller Cave</h1>
        <SellerRestaurantInfo/>
        <SellerRestaurantFoods/>
    </div>
  )
}

export default SellerRestaurant