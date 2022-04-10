import './addFood.scss'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Addfood = () => {

  let navigate = useNavigate()

  const {id} = useParams()

  const [name, setName] = useState('')
  const [file, setFile] = useState()
  const [price, setPrice] = useState('')
  const [message, setMessage] = useState('')

  const onFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const onSubmit = () => {

    const formData = new FormData();
		formData.append('image', file);
    formData.append('name', name);
		formData.append('price', price)

    fetch(
			`/foods/${id}`,
			{
				method: 'POST',
				body: formData
			}
		).then(res => {
      return res.json()
    }).then(data => {
      if (data.status === 200) {
        setName('')
        setFile()
        setPrice('')
        navigate(`/sellerRestaurant/${id}`, {replace: true})
      } else {
        setMessage(data.message)
      }
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className='add-food' >
        <h1>Seller Cave</h1>
        <h2>Add Food</h2>
        <div className="add-food__form">
        <span>Name</span>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        <span>Image</span>
        <input type="file" onChange={onFileChange} />
        <i>only jpeg/png under 5MB</i>
        <span>Price</span>
        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" />
        <p>{message}</p>
        <button onClick={onSubmit} >Add</button>
        </div>
    </div>
  )
}

export default Addfood