import { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { useNavigate } from 'react-router-dom'
import './createRestaurant.scss'

const CreateRestaurant = () => {

  const {user} = useContext(GlobalContext)
  let navigate = useNavigate()


  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [slogan, setSlogan] = useState('')
  const [chicago, setChicago] = useState(false)
  const [dubai, setDubai] = useState(false)
  const [karachi, setKarachi] = useState(false)
  const [$, set$] = useState(false)
  const [$$, set$$] = useState(false)
  const [$$$, set$$$] = useState(false)
  const [file, setFile] = useState()
  const [message, setMessage] = useState('')

  const chi = chicago ? 'chicago' : ''
  const dub = dubai ? 'dubai' : ''
  const kar = karachi ? 'karachi' : ''

  const $1 = $ ? '$' : ''
  const $2 = $$ ? '$$' : ''
  const $3 = $$$ ? '$$$' : ''

  const onChicago = () => {
    setChicago(!chicago)
  }
  const onDubai = () => {
    setDubai(!dubai)
  }
  const onKarachi = () => {
    setKarachi(!karachi)
  }

  const on$ = () => {
    set$(true)
    set$$(false)
    set$$$(false)
  }
  const on$$ = () => {
    set$(false)
    set$$(true)
    set$$$(false)
  }
  const on$$$ = () => {
    set$(false)
    set$$(false)
    set$$$(true)
  }

  const onFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const onSubmit = () => {

    const cities = chi + ' ' + dub + ' ' + kar
    const priceRange = $1 + $2 + $3

    const formData = new FormData();
		formData.append('logo', file);
    formData.append('name', name);
		formData.append('slogan', slogan);
		formData.append('type', type);
		formData.append('cities', cities);
		formData.append('priceRange', priceRange);

    if (chicago || dubai || karachi) {
      if ($ | $$ | $$$) {
        fetch(
          `/restaurants/${user._id}`,
          {
            method: 'POST',
            body: formData
          }
    
        ).then(res => {
          return res.json()
        }).then(data => {
          if (data.status === 200) {
            setName('')
            setType('')
            setSlogan('')
            setChicago(false)
            setDubai(false)
            setKarachi(false)
            set$(false)
            set$$(false)
            set$$$(false)
            setFile()
            navigate(`/seller`, {replace: true})
          } else {
            setMessage(data.message)
          }
        }).catch(err => {
          console.log(err);
        })
      }
    } else {
      setMessage('Input all data')
    }
  }

  return (
    <div className='create-restaurant' >
        <h1>Seller Cave</h1>
        <h2>New Restaurant</h2>
        <div className="create-restaurant__form">
        <span>Restaurant Name</span>
        <input value={name} onChange={(e) => setName(e.target.value)}  type="text" />
        <span>Logo</span>
        <input type="file" onChange={onFileChange} />
        <i>only jpeg/png under 5MB</i>
        <span>Slogan</span>
        <input value={slogan} onChange={(e) => setSlogan(e.target.value)} type="text" />
        <span>Cousine / Type of food</span>
        <input value={type} onChange={(e) => setType(e.target.value)} type="text" />
        <div className="create-restaurant__cities-cont">
          <span>Cities</span>  
          <div className="create-restaurant__cities">
            {dubai ? 
            <p onClick={onDubai}  style={{backgroundColor: '#ff5959', color: '#f7f9ff'}} >Dubai</p>
            :
            <p onClick={onDubai} >Dubai</p>
            }
            {karachi ? 
            <p onClick={onKarachi}  style={{backgroundColor: '#ff5959', color: '#f7f9ff'}} >Karachi</p>
            :
            <p onClick={onKarachi} >Karachi</p>
            }
            {chicago ? 
            <p onClick={onChicago}  style={{backgroundColor: '#ff5959', color: '#f7f9ff'}} >Chicago</p>
            :
            <p onClick={onChicago} >Chicago</p>
            }
          </div>
          <span>Pricing</span>  
          <div className="create-restaurant__cities">
            {$ ? 
            <p onClick={on$}  style={{backgroundColor: '#ff5959', color: '#f7f9ff'}} >$</p>
            :
            <p onClick={on$} >$</p>
            }
            {$$ ? 
            <p onClick={on$$}  style={{backgroundColor: '#ff5959', color: '#f7f9ff'}} >$$</p>
            :
            <p onClick={on$$} >$$</p>
            }
            {$$$ ? 
            <p onClick={on$$$}  style={{backgroundColor: '#ff5959', color: '#f7f9ff'}} >$$$</p>
            :
            <p onClick={on$$$} >$$$</p>
            }
          </div>
        </div>
        <h5>{message}</h5>
        <button onClick={onSubmit} >Create</button>
        </div>
    </div>
  )
}

export default CreateRestaurant