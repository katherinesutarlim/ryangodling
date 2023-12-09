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
      <div>
        <p>You are using Google Chrome. Please switch to a different browser to continue.</p>
      </div>
    )
  }

  return (
    <div className='proceed-message'>
      <p>Your browser is not Chrome.</p><button onClick={handleProceed}>You can proceed</button>
    </div>
  )
}

export default BrowserCheck
