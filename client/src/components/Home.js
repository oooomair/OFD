import HomeFooter from "./home/HomeFooter";
import HomeGetGive from "./home/HomeGetGive";
import HomeLand from "./home/HomeLand";
import HomeSRF from "./home/HomeSRF";

const Home = () => {
  return (
  <div className='home'>
    <HomeLand/>
    <HomeGetGive/>
    <HomeSRF/>
    <HomeFooter/>
  </div>
  )
};

export default Home;
