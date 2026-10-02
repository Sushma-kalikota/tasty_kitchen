import './index.css'
import error_img from '../../assets/not_found.png'
const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src={error_img}/>
      <p>
        We are sorry, the page you requested could not be found.
        <br />
        Please go back to the homepage
      </p>

      <button type="button">Home Page</button>
    </div>
  )
}

export default NotFound