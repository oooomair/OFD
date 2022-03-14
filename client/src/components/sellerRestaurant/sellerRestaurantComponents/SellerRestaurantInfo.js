import kfclogo from '../../../assets/kfc.png'

const SellerRestaurantInfo = () => {
  return (
    <div className='seller-restaurant__seller-restaurant-info'>
      <h3> KFC </h3>
        <div className="seller-restaurant__logo">
            <img src={kfclogo} alt="logo" />    
        </div>
        <div className="seller-restaurant__details">
            <h2>KFC</h2>
            <span>Restaurant Sales : 126 eth</span>   
            <span>Restaurant Products Sold : 550</span> 
            <button>Remove Restaurant</button>
        </div>
    </div>
  )
}

export default SellerRestaurantInfo