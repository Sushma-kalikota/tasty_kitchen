import './index.css'
import {BsFilterLeft} from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io'
import {useState} from 'react'

const index = ({selectedOption, setSelectedOption}) => {
  const [showOptions, setShowOptions] = useState(false)

  const selectOption = option => {
    setSelectedOption(option)
    setShowOptions(false)
  }

  return (
    <div className="header-tab">
      <div className="heading">
        <h1>Popular Restaurants</h1>
        <p>
          Select Your favourite restaurant special dish and make your day
          happy...
        </p>
      </div>

      <div className="sort-container">
        <div
          className="sort-by"
          onClick={() => setShowOptions(!showOptions)}
        >
          <BsFilterLeft />
          <p>Sort by {selectedOption}</p>
          <IoIosArrowDown />
        </div>

        {showOptions && (
          <div className="sort-options">
            <p onClick={() => selectOption('Lowest')}>Lowest</p>
            <p onClick={() => selectOption('Highest')}>Highest</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default index
