import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const SellerRestaurantFood = ({food, onDeleteFood}) => {

  const {id} = useParams()

  const onDelete = () => {

    Swal.fire({
      title: 'Are you sure?',
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
          'Food Item has been deleted.',
          'success'
        )
        onDeleteFood(food._id)
        fetch(
          `http://localhost:5000/foods/${food._id}/${id}`,
          {
            method: 'DELETE'
          }
        ).then(res => {
          return res.json()
        }).then(data => {
          console.log(data);
        }).catch(err => {
          console.log(err);
        })
      }
    })
  }

  return (
    <div className='seller-restaurant__seller-restaurant-food' >
        <h3>{food.name}</h3>
        <img src={`http://localhost:5000/${food.image}`} alt="logo" />
        <p> price: {food.price} </p>
        <button>Change Price</button>
        <button onClick={onDelete}>Remove Item</button>
    </div>
  )
}

export default SellerRestaurantFood