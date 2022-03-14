import fast from '../../../assets/fast.png'
import fresh from '../../../assets/fresh.png'
import enviroment from '../../../assets/enviroment.png'

const HomeSR = () => {
  return <div className='home__home-sr'>
      <div className="home__services">
        <div className="home__service">
            <img src={fast} alt="fast" />
            <span>fast</span>
        </div>
        <div className="home__service">
            <img src={fresh} alt="fresh" />
            <span>fresh</span>
        </div>
        <div className="home__service">
            <img src={enviroment} alt="enviroment" />
            <span>enviroment</span>
        </div>
      </div>
      <div className="home__reviews">
        <h1>Reviews</h1>
        <h2>“BEST FOOD DELIVERY APP IN THE MARKET RIGHT NOW AND WHOEVER DISAGREES IS IGNORANT”</h2>
        <h2>“BETTER THAN UBER EATS AND TALABAT IMO”</h2> 
      </div>
  </div>;
};

export default HomeSR;
