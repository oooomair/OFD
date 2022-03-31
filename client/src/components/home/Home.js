import HomeFooter from "./homeComponents/HomeFooter";
import HomeGetGive from "./homeComponents/HomeGetGive";
import HomeLand from "./homeComponents/HomeLand";
import HomeSR from "./homeComponents/HomeSR";
import './home.scss';
import { useEffect, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

const Home = () => {

  const { setUser} = useContext(GlobalContext)

  useEffect(() => {
		const abortController = new AbortController();
		fetch('http://localhost:5000/userAuth/isUserAuth', {
			signal: abortController.signal,
			headers: {
				"x-access-token": localStorage.getItem('token')
			}
		}).then(res => {
			return res.json()
		}).then(data => {
			if (data.isAuth) {
				setUser(data.user)
			} else {
        localStorage.removeItem('token')
      }
		}).catch(err => {
			console.log(err);
		})
		return () => {
			abortController.abort();
		};
	}, [setUser])

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
