import './signup.scss'

const SignUp = () => {
  return <div className='signup' >
      <h1>SignUp</h1>
      <div className="signup__info">
        <label htmlFor="username">Username</label>
        <input autoComplete='off' id='username' type="text" />
        <label htmlFor="password">Password</label>
        <input autocomplete='off' id='password' type="text" />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input autocomplete='off' id='confirm-username'  type="text" />
        <button>SignUp</button>
      </div>
  </div>;
};

export default SignUp;
