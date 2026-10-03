import {useState,useEffect} from 'react'
import AllRestaurants from '../AllRestaurants'
import RestaurantsHeader from '../RestaurantsHeader'
import Cookies from 'js-cookie'

import './index.css'

const index = ({selectedOption, setSelectedOption}) => {
  const [offers,setOffers]=useState([])
  const [activeOffer, setActiveOffer] = useState(0)

  const getOffers=async ()=>{
    const url='https://apis.ccbp.in/restaurants-list/offers'
    const jwtToken=Cookies.get('jwt_token')

    const options={
      headers:{
        Authorization:`Bearer ${jwtToken}`,
      },
    }

    const response=await fetch(url,options)
    const data=await response.json()
    setOffers(data.offers)
  }
  useEffect(()=>{
    getOffers()
  },[])

  return (
    <div>
      <div className="offers-container">
        {offers.length > 0 && (
          <img
            src={offers[activeOffer].image_url}
            alt="offer"
            className="offer-image"
          />
         )}

         <button className="offer-arrow left-arrow" onClick={()=>{
            if(activeOffer>0){
              setActiveOffer(activeOffer-1)
            }
          }}>
          &lt;
         </button>

         <button className="offer-arrow right-arrow" onClick={() => {
          if(activeOffer<offers.length-1)
            {
            setActiveOffer(activeOffer + 1)
            }
          }}>
          &gt;
         </button>
      </div>

      <RestaurantsHeader
        selectedOption={selectedOption} setSelectedOption={setSelectedOption}
      />
      <AllRestaurants selectedOption={selectedOption}/>
    </div>
  )
}

export default index
