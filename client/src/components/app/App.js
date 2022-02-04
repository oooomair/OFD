import Home from '../home/Home';
import {NavbarB, NavbarW} from '../navbar/Navbar';
import './app.scss';
import {Route, Routes} from 'react-router-dom'
import Explore from '../explore/Explore';
import Resturant from '../resturant/Resturant';
import Cart from '../cart/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><NavbarB/><Home/></>} />
        <Route path='/explo' element={<><NavbarW/><Explore/> </>} />
        <Route path='/resturant' element={<><NavbarB/><Resturant/></>}/>
        <Route path='/explore' element={<><NavbarW/><Cart/></>}/>
      </Routes>
    </div>
  );
}

export default App;
