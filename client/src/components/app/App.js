import './app.scss';
import Home from '../home/Home';
import {NavbarB, NavbarW} from '../navbar/Navbar';
import {Route, Routes} from 'react-router-dom'
import Explore from '../explore/Explore';
import Restaurant from '../restaurant/Restaurant';
import Cart from '../cart/Cart';
import SignUp from '../SignUp/SignUp';
import Login from '../login/Login';
import Seller from '../sellerCave/Seller';
import SellerRestaurant from '../sellerRestaurant/SellerRestaurant';
import CreateRestaurant from '../createRestaurant/CreateRestaurant';
import Addfood from '../addFood/Addfood';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><NavbarB/><Home/></>} />
        <Route path='/explore' element={<><NavbarW/><Explore/> </>} />
        <Route path='/restaurant/:id' element={<><NavbarB/><Restaurant/></>}/>
        <Route path='/cart' element={<><NavbarW/><Cart/></>}/>
        <Route path='/signup' element={<><NavbarW/><SignUp/></>}/>
        <Route path='/login' element={<><NavbarW/><Login/></>}/>
        <Route path='/seller' element={<><NavbarB/><Seller/></>}/>
        <Route path='/sellerRestaurant' element={<><NavbarW/><SellerRestaurant/></>}/>
        <Route path='/createRestaurant' element={<><NavbarW/><CreateRestaurant/></>}/>
        <Route path='/addFood' element={<><NavbarW/><Addfood/></>}/>
      </Routes>
    </div>
  );
}

export default App;
