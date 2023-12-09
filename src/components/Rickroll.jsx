import React, { useState, useEffect } from 'react'
import './Rickroll.css'

const Rickroll = () => {
  const totalLinks = 12
  const [correctLink, setCorrectLink] = useState(null)

  useEffect(() => {
    const elements = document.querySelectorAll('.link-button')

    elements.forEach(el => {
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      el.style.position = 'absolute'
      el.style.left = `${x}px`
      el.style.top = `${y}px`
    })
  }, [])

  useEffect(() => {
    setCorrectLink(Math.floor(Math.random() * totalLinks))
  }, [])

  const handleLinkClick = (linkId) => {
    if (linkId === correctLink) {
      window.location.href = '/dating' // next section
    } else {
      window.location.href = 'https://www.youtube.com/watch?v=8m24UmeyFkQ' // I'm just Ken video
    }
  }

  return (
        <div>
            {[...Array(totalLinks).keys()].map(linkId => (
                <button className='link-button' key={linkId} onClick={() => handleLinkClick(linkId)}>
                </button>
            ))}
        </div>
  )
}

export default Rickroll
