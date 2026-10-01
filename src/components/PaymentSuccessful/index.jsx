import {useNavigate} from 'react-router-dom'
import './index.css'

const index = () => {
  const navigate = useNavigate()

  return (
    <div className="payment-success-container">
      <div className="payment-success-card">
        <div className="success-icon">✓</div>

        <h1>Payment Successful</h1>

        <p>Thank you for ordering<br/>Your payment is successfully completed.</p>

        <button className='btn' onClick={() => navigate('/home')}>
          Go to Home
        </button>
      </div>
    </div>
  )
}

export default index