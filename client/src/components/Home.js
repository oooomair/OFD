import HomeFooter from "./home/HomeFooter";
import HomeGetGive from "./home/HomeGetGive";
import HomeLand from "./home/HomeLand";
import HomeSR from "./home/HomeSR";

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
