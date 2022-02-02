import ExploreResturants from './exploreComponents/ExploreResturants';
import './explore.scss';

const Explore = () => {
  return <div className='explore' >
      <h1>Resturants</h1>
      <input type="text" />
      <ExploreResturants/>
  </div>;
};

export default Explore;
