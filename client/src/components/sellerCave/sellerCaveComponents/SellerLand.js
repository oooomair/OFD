import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalContext'
import useFetch from '../../other/useFetch'

const SellerLand = () => {

  const {user} = useContext(GlobalContext)

  return (
    <div className='seller__seller-land' >
        <h1>Seller Cave</h1>
        <div className="seller__info">
          <h2>welcome {user.username}</h2>
          <p>Total Sales: <span>126 eth</span></p>
        </div>
    </div>
  )
}

export default SellerLand