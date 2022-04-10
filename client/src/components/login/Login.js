import './login.scss'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext'


const Login = () => {

	const {setUser} = useContext(GlobalContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState()

  let navigate = useNavigate()

  const onLogin = async () => {
    
      const user = { username, password };
    
      const res = await fetch('/userAuth/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      })

      const data = await res.json()

      if (data.user) {
        setUser(data.foundUser)
        localStorage.setItem('token', data.token)
        setUsername('')
        setPassword('')
        navigate('/', {replace: true})
      } else {
        setMessage('check credentials')
      }
    
    }

  return <div className='login' >
      <h1>Login</h1>
      <div className="login__info">
        <span>{message}</span>
        <label htmlFor="username">Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} autoComplete='off' id='username' type="text" />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='off' id='confirm-username'  type="text" />
        <button onClick={onLogin} >Login</button>
      </div>
  </div>;
};

export default Login;
