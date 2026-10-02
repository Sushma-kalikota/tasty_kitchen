import {Routes, Route, Navigate} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import RestaurantDetails from './components/RestaurantDetails'
import Layout from './components/Layout'
import {useState} from 'react'
import Cart from './components/Cart'
import PaymentSuccessful from './components/PaymentSuccessful'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

const App = () => {
  const [cart, setCart] = useState([])
  const [selectedOption, setSelectedOption] = useState('Lowest')

  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/login" element={<LoginForm />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>}/>
          <Route path="/restaurant/:id" element={<RestaurantDetails cart={cart} setCart={setCart} />}/>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />}/>
          <Route path="/payment-successful" element={<PaymentSuccessful />}/>
        </Route>
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App