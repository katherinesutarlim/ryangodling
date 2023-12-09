import React from 'react'
import './BrowserCheck.css'

const BrowserCheck = () => {
  const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
  const isEdge = /Edg/.test(navigator.userAgent)

  if (isChrome && !isEdge) {
    return (
      <div>
        <p>You are using Google Chrome. Please switch to a different browser to continue.</p>
        {/* You can add more instructions or styling here as needed */}
      </div>
    )
  }

  return (
    <div className='proceed-message'>
      <p>Your browser is not Chrome.</p><a href='/captcha'> You can proceed</a>
    </div>
  )
}

export default BrowserCheck
