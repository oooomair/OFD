import kfclogo from '../../../assets/kfc.png'
import {Link} from 'react-router-dom'

const SellerRestaurants = () => {
  return (
    <div className='seller__seller-restaurants' >
        <h1>Restaurants</h1>
        <button>ADD</button>
        <div className="seller__restaurants-container">
          <Link to={'/sellerRestaurant'}>
            <img src={kfclogo} alt="logo" /> 
          </Link>
        </div>

    </div>
  )
}

export default SellerRestaurants