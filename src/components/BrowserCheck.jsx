import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BrowserCheck.css'

const BrowserCheck = () => {
  const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
  const isEdge = /Edg/.test(navigator.userAgent)
  const navigate = useNavigate()

  const handleProceed = () => {
    navigate('/captcha')
  }

  if (isChrome && !isEdge) {
    return (
      <div className='change-browser-message'>
        <p>You non-believer are using Google Chrome. Change your browser like how you change your allegiance to continue.</p>
      </div>
    )
  }

  return (
    <div className='proceed-message'>
      <p>Your browser is finally not Chrome.</p><button onClick={handleProceed}>You can proceed to disappoint our Lord.</button>
    </div>
  )
}

export default BrowserCheck
