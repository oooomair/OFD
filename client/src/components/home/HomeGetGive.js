import React from 'react';

const HomeGetGive = () => {
  return <div className='home__home-get-give'>
      <div className="home__get">
          <div className="home__get1">
              <h1>Get Food</h1>
              <p>GET FOOD FROM ANY RESTURANT IN UR AREA HAVE DINNER BREAKFAST LUNCH OR ANYTHING UPTO YOU FROM A WIDE VARIETY OF COUSINES AND FOODS AND  PRICING RANGING FROM CHEAP TO EXPENSIVE  </p>
          </div>
          <div className="home__get2">
            <div className="home__get-search">
                <p>Search For Any Resturant</p>
                <input type="text" />
                <button>GO</button>
            </div>
            <span>see all resturants</span>
          </div>
      </div>
      <div className="home__give">
          <div className="home__give1">
              <h1>Get Food</h1>
              <p>GET FOOD FROM ANY RESTURANT IN UR AREA HAVE DINNER BREAKFAST LUNCH OR ANYTHING UPTO YOU FROM A WIDE VARIETY OF COUSINES AND FOODS AND  PRICING RANGING FROM CHEAP TO EXPENSIVE  </p>
          </div>
          <div className="home__give2">
            <span>add your resturant</span>
          </div>
      </div>
  </div>;
};

export default HomeGetGive;