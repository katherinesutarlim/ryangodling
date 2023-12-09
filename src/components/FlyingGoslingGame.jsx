import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FlyingGosling from './FlyingGosling'
import image from '../assets/ryan-gosling-celebrity-mask-removebg-preview.png'

const FlyingGoslingGame = () => {
  const images = [
    { id: 1, url: image },
    { id: 2, url: image },
    { id: 3, url: image },
    { id: 4, url: image },
    { id: 5, url: image },
    { id: 6, url: image }
  ]
  const [clickedImages, setClickedImages] = useState([])
  const navigate = useNavigate()

  const handleImageClick = (id) => {
    if (!clickedImages.includes(id)) {
      setClickedImages([...clickedImages, id])
    }
  }

  useEffect(() => {
    if (clickedImages.length === images.length) {
      navigate('/form')
    }
  }, [clickedImages, image.length, navigate])

  const isGameComplete = clickedImages.length === images.length

  return (
    <div>
      {images.map(image => (
        <FlyingGosling key={image.id} imageUrl={image.url} onImageClick={() => handleImageClick(image.id)} isClicked={clickedImages.includes(image.id)}/>
      ))}
      {isGameComplete && <div>Game Complete!</div>}
    </div>
  )
}

export default FlyingGoslingGame
