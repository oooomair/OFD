import { useEffect, useState, useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext'

const AuthorizedRoute = () => {

	const {setUser} = useContext(GlobalContext)

	const [isAuth, setIsAuth] = useState(false)
	const [isLoading, setIsLoading] = useState(true)


	useEffect(() => {
		const abortController = new AbortController();
		fetch('https://o-food-delivery.herokuapp.com/userAuth/isUserAuth', {
			signal: abortController.signal,
			headers: {
				"x-access-token": localStorage.getItem('token')
			}
		}).then(res => {
			return res.json()
		}).then(data => {
			if (data.isAuth) {
				setIsAuth(true)
				setUser(data.user)
			}
			setIsLoading(false)
		}).catch(err => {
			console.log(err);
		})
		return () => {
			abortController.abort();
		};
	}, [setUser])

	return isLoading ? null : isAuth ? <Outlet/> : <Navigate to='/login'/>

}

export default AuthorizedRoute;