import './signup.scss'
import { useState } from 'react'

const SignUp = () => {

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setconfirmPassword] = useState('')
const [message, setMessage] = useState()


const onRegister = async () => {
if (password.length >= 7) {
  if (password === confirmPassword) {

    const newUser = { username, password };
  
    const res = await fetch('http://localhost:5000/userAuth/register', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    })
  
    const data = await res.json()
  if (data.status === 400) {
    setMessage(data.message)
  } else {
    setUsername('')
    setPassword('')
    setconfirmPassword('')
    setMessage('')
  }
  } else {
    setMessage('password not the same')
  }} else {
    setMessage('password should contain atleast 7 characters')
  }
}


  return <div className='signup' >
      <h1>SignUp</h1>
      <div className="signup__info">
        <span>{message}</span>
        <label htmlFor="username">Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} autoComplete='off' id='username' type="text" />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='off' id='password' type="text" />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} autoComplete='off' id='confirm-username'  type="text" />
        <button onClick={onRegister} >SignUp</button>
      </div>
  </div>;
};

export default SignUp;
