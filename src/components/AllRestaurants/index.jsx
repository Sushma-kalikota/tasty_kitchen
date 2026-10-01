import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import Cookies from 'js-cookie'
import './index.css'

const index = ({selectedOption}) => {
  const [restaurants, setRestaurants] = useState([])

  const navigate = useNavigate()

  const getRestaurants = async () => {
    const url = 'https://apis.ccbp.in/restaurants-list?offset=0&limit=9'

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    setRestaurants(data.restaurants)
  }

  useEffect(() => {
    getRestaurants()
  }, [])

  const sortedRestaurants = [...restaurants].sort((a, b) => {
    if (selectedOption === 'Lowest') {
      return a.user_rating.rating - b.user_rating.rating
    }

    return b.user_rating.rating - a.user_rating.rating
  })

  return (
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
            <h3>{restaurant.user_rating.rating}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default index
