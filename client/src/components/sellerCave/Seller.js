import React from 'react'
import SellerLand from './sellerCaveComponents/SellerLand'
import SellerRestaurants from './sellerCaveComponents/SellerRestaurants'
import './seller.scss'

const Seller = () => {
  return (
    <div className='seller' >
      <SellerLand/>
      <SellerRestaurants/>
    </div>
  )
}

export default Seller