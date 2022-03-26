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
import AuthorizedRoute from '../authorizedRoute/AuthorizedRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path='/' element={<><NavbarB/><Home/></>}/>
        <Route path='/signup' element={<><NavbarW/><SignUp/></>}/>
        <Route path='/login' element={<><NavbarW/><Login/></>}/>

        <Route element={<AuthorizedRoute/>}>
        <Route path='/explore' element={<><NavbarW/><Explore/></>} />
        <Route path='/restaurant/:id' element={<><NavbarB/><Restaurant/></>}/>
        <Route path='/cart' element={<><NavbarW/><Cart/></>}/>
        <Route path='/seller' element={<><NavbarB/><Seller/></>}/>
        <Route path='/sellerRestaurant/:id' element={<><NavbarW/><SellerRestaurant/></>}/>
        <Route path='/createRestaurant' element={<><NavbarW/><CreateRestaurant/></>}/>
        <Route path='/addFood/:id' element={<><NavbarW/><Addfood/></>}/>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
