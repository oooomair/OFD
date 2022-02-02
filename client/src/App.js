import Home from './components/Home';
import {NavbarB, NavbarW} from './components/Navbar';
import './styles/styles.css';
import {Route, Routes} from 'react-router-dom'
import Explore from './components/Explore';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><NavbarB/><Home/></>} />
        <Route path='/explore' element={<><NavbarW/><Explore/> </>} />
      </Routes>
    </div>
  );
}

export default App;
