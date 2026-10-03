import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const index = ({cart, setCart}) => {
  const {id} = useParams()
  const [restaurant, setRestaurant] = useState()


  const getDetails = async () => {
    const url = `https://apis.ccbp.in/restaurants-list/${id}`
    const token = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
  
    setRestaurant(data)
  }

  const addToCart = dish => {
    setCart(prevCart => {
      const existingDish = prevCart.find(item => item.id === dish.id)

      if (existingDish) {
        return prevCart.map(item => {
          if (item.id === dish.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            }
          }

          return item
        })
      }

      return [...prevCart, {...dish, quantity: 1}]
    })
  }

  const increaseQuantity = id => {
    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }

        return item
      })
    )
  }

  const decreaseQuantity = id => {
    setCart(prevCart =>
      prevCart
        .map(item => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            }
          }

          return item
        })
        .filter(item => item.quantity > 0)
    )
  }

  useEffect(() => {
    getDetails()
  }, [id])

  return (
    <div>
      {restaurant && (
        <>
          <div className="banner-container">
            <div className="banner-card">
              <img src={restaurant.image_url} alt={restaurant.name} />

              <div className="banner-details">
                <h1>{restaurant.name}</h1>
                <p>{restaurant.cuisine}</p>
                <p>{restaurant.location}</p>

                <div className="rating-cost">
                  <p>⭐ {restaurant.rating}</p>
                  <span></span>
                  <p>₹{restaurant.cost_for_two} for two</p>
                </div>
              </div>
            </div>
          </div>

          <div className="dishes-container">
            {restaurant.food_items.map(eachDish => {
              const cartItem = cart.find(item => item.id === eachDish.id)

              return (
                <div className="dish-card" key={eachDish.id}>
                  <img src={eachDish.image_url} alt={eachDish.name} />

                  <div className="dish-details">
                    <h2>{eachDish.name}</h2>
                    <p>₹{Number(eachDish.cost).toFixed(2)}</p>
                    <p>⭐{eachDish.rating}</p>

                    {cartItem ? (
                      <div className="quantity-container">
                        <button onClick={() => decreaseQuantity(eachDish.id)}>−</button>
                        <span>{cartItem.quantity}</span>
                        <button onClick={() => increaseQuantity(eachDish.id)}>+</button>
                      </div>
                    ) : (
                      <button onClick={() => {
                         addToCart(eachDish)
                         }}>ADD</button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default index