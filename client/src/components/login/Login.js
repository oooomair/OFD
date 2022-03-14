import './login.scss'

const Login = () => {
  return <div className='login' >
      <h1>Login</h1>
      <div className="login__info">
        <label htmlFor="username">Username</label>
        <input autocomplete='off' id='username' type="text" />
        <label htmlFor="password">Password</label>
        <input autocomplete='off' id='confirm-username'  type="text" />
        <button>Login</button>
      </div>
  </div>;
};

export default Login;
