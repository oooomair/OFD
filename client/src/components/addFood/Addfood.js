import './addFood.scss'

const Addfood = () => {
  return (
    <div className='add-food' >
        <h1>Seller Cave</h1>
        <h2>Add Food</h2>
        <div className="add-food__form">
        <span>Name</span>
        <input type="text" />
        <span>Image</span>
        <button>Add</button>
        <span>Price</span>
        <input type="text" />
        <button>Add</button>
        </div>
    </div>
  )
}

export default Addfood