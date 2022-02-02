import ramen from '../../../assets/ramen.png'
import dumplings from '../../../assets/dumplings.png'
import {Link} from 'react-router-dom'

const HomeLand = () => {
  return (
    <div className='home__home-land'>
        <div className="home__food">
            <img className='home__ramen' src={ramen} alt="ramen" />
            <img className='home__dumplings' src={dumplings} alt="dumplings" />
        </div>
        <div className="home__main">
        <div className="home__title">
            <p>EAT GOOD</p>
            <p><span>QUICK</span></p>
            <p>AND <span>FRESH</span> </p>
        </div>
            <div className="home__btn">
                <Link style={{ color:'inherit', textDecoration:'none' }} to={'/explore'} >
                <button>EXPLORE</button>
                </Link>
            </div>
        </div>

    </div>
  );
};

export default HomeLand;
