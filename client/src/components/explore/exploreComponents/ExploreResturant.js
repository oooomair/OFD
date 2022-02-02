import { Link } from 'react-router-dom';
import kfc from '../../../assets/kfc.png'

const ExploreResturant = () => {
  return <Link className='explore__resturant' to={'/resturant'} >
        <div className="explore__resturant-logo">
        <img src={kfc} alt="resturant" />
        </div>
        <div className="explore__resturant-info">
          <h2>KFC</h2>
          <span>American, burger, chicken</span>
          <p>Dubai, Chicago</p>
          <h3>$$$</h3>
        </div>
    </Link>;
};

export default ExploreResturant;
