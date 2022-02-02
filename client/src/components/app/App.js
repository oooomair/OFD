import Home from '../home/Home';
import {NavbarB, NavbarW} from '../navbar/Navbar';
import './app.scss';
import {Route, Routes} from 'react-router-dom'
import Explore from '../explore/Explore';
import Resturant from '../resturant/Resturant';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><NavbarB/><Home/></>} />
        <Route path='/explore' element={<><NavbarW/><Explore/> </>} />
        <Route path='/resturant' element={<><NavbarB/><Resturant/></>}/>
      </Routes>
    </div>
  );
}

export default App;
