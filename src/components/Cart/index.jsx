import React from 'react'
import './index.css'
import {useNavigate} from 'react-router-dom'
import cartImg from '../../assets/cooking.png'

const index = ({cart, setCart}) => {
  const navigate = useNavigate()

  const increaseQuantity = id => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        }
      }

      return item
    })

    setCart(updatedCart)
  }

  const decreaseQuantity = id => {
    const updatedCart = cart
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

    setCart(updatedCart)
  }

  const totalAmount = cart.reduce(
    (total, item) => total + item.cost * item.quantity,
    0
  )

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        <>
          {cart.map(eachItem => (
            <div className="cart-item" key={eachItem.id}>
              <img
                src={eachItem.image_url}
                alt={eachItem.name}
              />

              <div className="cart-item-details">
                <h2>{eachItem.name}</h2>

                <p>₹{Number(eachItem.cost).toFixed(2)}</p>

                <div className="quantity-container">
                  <button
                    onClick={() => decreaseQuantity(eachItem.id)}
                  >
                    −
                  </button>

                  <span className="quantity">
                    {eachItem.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(eachItem.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h2 className="cart-total">
              Total: ₹{Number(totalAmount).toFixed(2)}
            </h2>

            <button
              className="place-order-button"
              onClick={() => {
                setCart([])
                navigate('/payment-successful')
              }}
            >
              Place Order
            </button>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <img src={cartImg} alt="empty cart" />

          <div className="cart-details">
            <h1>No Orders Yet!</h1>

            <p>
              Your cart is empty. Add something from the menu.
            </p>

            <button
              className="place-order-button"
              onClick={() => navigate('/home')}
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default index