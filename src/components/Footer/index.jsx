import {FaPinterest, FaInstagram,  FaTwitter,  FaFacebook,} from 'react-icons/fa'
import logo2 from '../../assets/logo2.png'
import './index.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-title">
        <img src={logo2} alt="Tasty Kitchens" />
        <h1>Tasty Kitchens</h1>
      </div>

      <p className="footer-description">
        The only thing we are serious about is food.
        <br />
        Contact us on
      </p>

      <div className="social-icons">
        <FaPinterest />
        <FaInstagram />
        <FaTwitter />
        <FaFacebook />
      </div>
    </div>
  )
}

export default Footer