import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../../context/GlobalContext'
import useFetch from '../../other/useFetch'

const SellerLand = () => {

  const {user} = useContext(GlobalContext)
  const {data: restaurants, isPending, error} = useFetch(`/restaurants/userRestaurants/${user._id}`)

  let sales = 0

  restaurants && restaurants.map(restaurant => {
    let restaurantSales = 0
    restaurant.foods.map(food => {
      restaurantSales = restaurantSales + food.sales
    })
    sales = sales + restaurantSales
  })


  return (
    <div className='seller__seller-land' >
        <h1>Seller Cave</h1>
        <div className="seller__info">
          <h2>welcome {user.username}</h2>
          <p>Total Sales: <span>{sales}</span></p>
        </div>
    </div>
  )
}

export default SellerLand