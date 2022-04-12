import {Link, useNavigate} from 'react-router-dom'
import { useContext} from 'react'
import Swal from 'sweetalert2'
import { GlobalContext } from '../../../context/GlobalContext'

const HomeGetGive = () => {

  let navigate = useNavigate()

  const {user, setUser} = useContext(GlobalContext)


  const toSeller = () => {
    if (user) {
      if (user.seller) {
          navigate('/seller')
      } else {
          Swal.fire({
              title: 'Do you want to become a seller?',
              text: "By clicking yes you agree to always be amazing just like you are right now :')",
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              cancelButtonText: 'No',
              confirmButtonText: 'Yes'
            }).then((result) => {
              if (result.isConfirmed) {
                  Swal.fire({
                      title: 'Lets Go',
                      text: 'Now you can make (fake) money and get Rich',
                      icon: 'success',
                      confirmButtonColor: '#3085d6',
                      confirmButtonText: 'Yay'
                  }).then(() => {
                      fetch(`http://localhost:5000/userAuth/${user._id}`, 
                      { 
                        method: "PATCH"
                      });
                      navigate('/seller', {replace: true})
                    }
                  )}
            })
      }
  } else {
      navigate('/seller')
  }
}

  return <div className='home__home-get-give'>
      <div className="home__get">
          <div className="home__get1">
              <h1>Get Food</h1>
              <p>GET FOOD FROM ANY RESTAURANT IN UR AREA HAVE DINNER BREAKFAST LUNCH OR ANYTHING UPTO YOU FROM A WIDE VARIETY OF COUSINES AND FOODS AND  PRICING RANGING FROM CHEAP TO EXPENSIVE  </p>
          </div>
          <div className="home__get2">
            <Link style={{ color:'inherit', textDecoration:'none' }} to={'/explore'} >
            <span>see all restaurants</span>
            </Link>
          </div>
      </div>
      <div className="home__give">
          <div className="home__give1">
              <h1>Get Food</h1>
              <p>become a seller and have your own restaurant so u can show off your own amazing food and also make money, and leave us to deliver your food to the customers in a giffy so you can put all you have into preparing them</p>
          </div>
          <div className="home__give2">
            <span onClick={toSeller}>add your restaurant</span>
          </div>
      </div>
  </div>;
};

export default HomeGetGive;