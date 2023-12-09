import React, { useState, useEffect } from 'react'

// eslint-disable-next-line react/prop-types
const FlyingGosling = ({ imageUrl, onImageClick, isClicked }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 })

  useEffect(() => {
    const moveImage = () => {
      // Randomly update the position
      const newTop = Math.random() * window.innerHeight
      const newLeft = Math.random() * window.innerWidth
      setPosition({ top: newTop, left: newLeft })
    }

    // Change position every second
    const intervalId = setInterval(moveImage, 2000)

    return () => clearInterval(intervalId)
  }, [])

  const handleClick = () => {
    onImageClick(imageUrl)
  }

  const imageStyle = {
    position: 'absolute',
    top: position.top,
    left: position.left,
    width: '10%',
    height: 'auto',
    filter: isClicked ? 'grayscale(100%)' : 'none'
  }

  return (
    <img
      src={imageUrl}
      alt="FlyingGosling"
      style={imageStyle}
      onClick={handleClick}
    />
  )
}

export default FlyingGosling
