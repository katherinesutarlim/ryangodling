import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const [currentPopUpIndex, setCurrentPopUpIndex] = useState(null)
  const navigate = useNavigate()

  const popUpConfigs = [
    { message: 'Are you sure you want to unsubscribe?', id: 1 },
    { message: 'Are you really sure?', id: 2 },
    { message: 'So you want to sadden our Lord and Saviour Godling?', id: 3 },
    { message: 'Are you a coward?', id: 4 },
    { message: 'You will be forever maidenless?', id: 5 },
    { message: 'Are you a winnie little poo poo who cry about every little thing?', id: 6 }
  ]

  const handleUnsubscribeClick = () => {
    setCurrentPopUpIndex(0) // Start with the first pop-up
  }

  const handleYesClick = () => {
    const nextIndex = currentPopUpIndex + 1
    if (nextIndex < popUpConfigs.length) {
      setCurrentPopUpIndex(nextIndex)
    } else {
      navigate('/browser-check') // Navigate when all pop-ups are done
    }
  }

  const handleClosePopup = () => {
    setCurrentPopUpIndex(null) // Close pop-up
  }

  const handleValuesClick = () => {
    navigate('/save-paul')
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: '1em' }}>
        <p>Hayden S. sucks 2023 © </p>
        <button
          style={{ fontSize: '10px', color: '#551A8B', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
          onClick={handleUnsubscribeClick}
        >
          Unsubscribe
        </button>
        <button
          style={{ fontSize: '20px', color: 'white', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
          onClick={handleValuesClick}
        >
          Our values
        </button>
      </div>

      {currentPopUpIndex !== null && (
        <div className='unsubscribe-pop-up'>
          <p>{popUpConfigs[currentPopUpIndex].message}</p>
          <button onClick={handleYesClick}>Yes</button>
          <button onClick={handleClosePopup}>No</button>
        </div>
      )}
    </>
  )
}

export default Footer
