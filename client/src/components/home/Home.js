import HomeFooter from "./homeComponents/HomeFooter";
import HomeGetGive from "./homeComponents/HomeGetGive";
import HomeLand from "./homeComponents/HomeLand";
import HomeSR from "./homeComponents/HomeSR";
import './home.scss';

const Home = () => {
  return (
  <div className='home'>
    <HomeLand/>
    <HomeGetGive/>
    <HomeSR/>
    <HomeFooter/>
  </div>
  )
};

export default Home;
