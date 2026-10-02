import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import Cookies from 'js-cookie'
import './index.css'

const index = ({selectedOption}) => {
  const [restaurants, setRestaurants] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const navigate = useNavigate()

  const getRestaurants = async () => {
    const offset = (currentPage - 1) * 9
    const url = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=9`

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    setRestaurants(data.restaurants)
    setTotalPages(Math.ceil(data.total / 9))
  }

  useEffect(() => {
    getRestaurants()
  }, [currentPage])

  const sortedRestaurants = [...restaurants].sort((a, b) => {
    if (selectedOption === 'Lowest') {
      return a.user_rating.rating - b.user_rating.rating
    }

    return b.user_rating.rating - a.user_rating.rating
  })

  return (
    <>
    <div className="container">
      {sortedRestaurants.map(restaurant => (
        <div
          key={restaurant.id}
          className="restaurant-card"
          onClick={() => navigate(`/restaurant/${restaurant.id}`)}
          testid="restaurant-item"
        >
          <img src={restaurant.image_url} alt="restaurant" />

          <div className="restaurant-details">
            <h1>{restaurant.name}</h1>
            <h2>{restaurant.cuisine}</h2>
            <h3 className={
              restaurant.user_rating.rating >= 4
              ? 'rating high-rating'
              : 'rating low-rating'}>
              {restaurant.user_rating.rating} ★ 
            </h3>
          </div>
        </div>
      ))}
    </div>
    <div className="pagination">
      <button onClick={() => setCurrentPage(currentPage - 1)} 
        disabled={currentPage === 1}>
        Previous
      </button>

      {Array.from({length: totalPages}, (_, index) => (
      <button key={index + 1}
        onClick={() => setCurrentPage(index + 1)}
        className={currentPage === index + 1 ? 'active-page' : ''}>
        {index + 1}
      </button>
      ))}

      <button onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}>
          Next
      </button>
    </div>
    </>
  )
}

export default index
