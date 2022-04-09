import {Link} from 'react-router-dom'
import { GlobalContext } from '../../../context/GlobalContext'
import { useContext } from 'react'
import useFetch from '../../other/useFetch'

const SellerRestaurants = () => {
  
  const {user} = useContext(GlobalContext)
  const {data: restaurants, isPending, error} = useFetch(`https://o-food-delivery.herokuapp.com/restaurants/userRestaurants/${user._id}`)

  return (
    <div className='seller__seller-restaurants' >
        <h1>Restaurants</h1>
        <Link to={'/createRestaurant'} >
          <button>ADD</button>
        </Link>
        <div className="seller__restaurants-container">
          {error && <h1>error</h1>}
          {isPending && <div className="dot-revolution"></div>} 
          {restaurants && restaurants.map(restaurant => {
            return (
            <Link key={restaurant._id} to={`/sellerRestaurant/${restaurant._id}`}>
              <img src={`https://o-food-delivery.herokuapp.com/${restaurant.logo}`} alt="logo" /> 
            </Link>
            )})
          }
        </div>
    </div>
  )
}

export default SellerRestaurants