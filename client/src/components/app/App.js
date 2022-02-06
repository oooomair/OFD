import Home from '../home/Home';
import {NavbarB, NavbarW} from '../navbar/Navbar';
import './app.scss';
import {Route, Routes} from 'react-router-dom'
import Explore from '../explore/Explore';
import Resturant from '../resturant/Resturant';
import Cart from '../cart/Cart';
import SignUp from '../SignUp/SignUp';
import Login from '../login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><NavbarB/><Home/></>} />
        <Route path='/explore' element={<><NavbarW/><Explore/> </>} />
        <Route path='/resturant' element={<><NavbarB/><Resturant/></>}/>
        <Route path='/cart' element={<><NavbarW/><Cart/></>}/>
        <Route path='/signup' element={<><NavbarW/><SignUp/></>}/>
        <Route path='/login' element={<><NavbarW/><Login/></>}/>
      </Routes>
    </div>
  );
}

export default App;
