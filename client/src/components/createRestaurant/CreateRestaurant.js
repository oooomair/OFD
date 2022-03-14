import './createRestaurant.scss'

const CreateRestaurant = () => {
  return (
    <div className='create-restaurant' >
        <h1>Seller Cave</h1>
        <h2>New Restaurant</h2>
        <div className="create-restaurant__form">
        <span>Restaurant Name</span>
        <input type="text" />
        <span>Logo</span>
        <button>Add</button>
        <span>Cousine / Type of food</span>
        <input type="text" />
        <div className="create-restaurant__cities-cont">
          <span>Cities</span>  
          <div className="create-restaurant__cities">
            <p>Dubai</p>
            <p>Chicago</p>
            <p>Karachi</p>
          </div>
        </div>
        <button>Create</button>
        </div>
    </div>
  )
}

export default CreateRestaurant