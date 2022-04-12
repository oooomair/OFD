import SellerRestaurantFood from './SellerRestaurantFood'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../../other/useFetch'
import { useEffect, useState } from 'react'

const SellerRestaurantFoods = () => {

  const [foods, setFoods] = useState(null)

  const {id} = useParams()
  const {data: restaurant, isPending, error} = useFetch(`http://localhost:5000/restaurants/${id}`)

  useEffect(() => {
    restaurant && setFoods(restaurant.foods)
  }, [restaurant])

  const onDeleteFood = foodId => {
    setFoods(foods.filter(({ _id }) => _id !== foodId))
  }

  return (
    <div className='seller-restaurant__seller-restaurant-foods'>
        <h2>Foods</h2>
        <Link to={`/addFood/${id}`}>
        <button>Add Item </button>
        </Link>
        {error && <h5>error</h5>} 
        {isPending && <div className="dot-revolution"></div>}
        <div className="seller-restaurant__foods-container">
          {foods && foods.map(food => {
            return <SellerRestaurantFood onDeleteFood={onDeleteFood} key={food._id} food={food}/>
          })}
        </div>
    </div>
  )
}

export default SellerRestaurantFoods