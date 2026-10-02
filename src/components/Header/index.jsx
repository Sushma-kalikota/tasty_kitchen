import './index.css'
import {Link,useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import logo from '../../assets/logo.svg'

const index = () => {
  const navigate = useNavigate()
  const logOut=()=>{
    Cookies.remove('jwt_token')
    navigate('/login')
  }
  return (
    <nav className='nav_bar'>
        <div className='logo_items'>
            <Link to="/home"><img src={logo} alt="tasty-kitchens"/></Link>
            <Link to="/home" className='navLink'><p>Tasty Kitchens</p></Link>
            
        </div>
        <div className='nav_items'>
            <Link to="/home" className='nav_link'>Home</Link>
            <Link to="/cart" className='nav_link2'>cart</Link>
            <button onClick={logOut}>Logout</button>
        </div>
    </nav>
  )
}

export default index
