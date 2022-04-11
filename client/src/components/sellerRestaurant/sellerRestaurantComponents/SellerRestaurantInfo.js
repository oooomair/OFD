import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../../../context/GlobalContext'
import useFetch from '../../other/useFetch'
import Swal from 'sweetalert2'

const SellerRestaurantInfo = () => {

  const {user} = useContext(GlobalContext)
  let navigate = useNavigate()


  const {id} = useParams()
  const {data: restaurant, isPending, error} = useFetch(`https://o-food-delivery.herokuapp.com/restaurants/${id}`)

  let restaurantSales = 0

  restaurant && restaurant.foods.map(food => {
    restaurantSales = restaurantSales + food.sales
  })
  
  console.log(restaurant);

  const onDelete = () => {

    Swal.fire({
      title: 'Are you sure you want to remove the restaurant?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#grey',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'The restaurant has been deleted.',
          'success'
        )
        fetch(
          `https://o-food-delivery.herokuapp.com/restaurants/${id}/${user._id}`,
          {
            method: 'DELETE'
          }
        ).then(res => {
          return res.json()
        }).then(data => {
          navigate('/seller', {replace: true})
          console.log(data);
        }).catch(err => {
          console.log(err);
        })
      }
    })
  }



  return (
    <>
    {error && <h5>error</h5>} 
    {isPending && <div className="dot-revolution"></div>}
    {restaurant && <div className='seller-restaurant__seller-restaurant-info'>
      <h3> {restaurant.name} </h3>
        <div className="seller-restaurant__logo">
            <img src={`https://o-food-delivery.herokuapp.com/${restaurant.logo}`} alt="logo" />    
        </div>
        <div className="seller-restaurant__details">
            <h2>{restaurant.name}</h2>
            <span>Restaurant Sales : {restaurantSales}</span>
            <button onClick={onDelete} >Remove Restaurant</button>
        </div>
    </div>}
    </>
  )
}

export default SellerRestaurantInfo