import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Captcha.css'
import karen1 from '../assets/captchas/set1/161205.png'
import karen2 from '../assets/captchas/set1/161253.png'
import karen3 from '../assets/captchas/set1/161445.png'
import karen4 from '../assets/captchas/set1/161457.png'
import karen5 from '../assets/captchas/set1/161539.png'
import liam1 from '../assets/captchas/set1/161240.png'
import liam2 from '../assets/captchas/set1/161412.png'
import liam3 from '../assets/captchas/set1/161510.png'
import liam4 from '../assets/captchas/set1/161550.png'

const Captcha = () => {
  const [selectedImages, setSelectedImages] = React.useState([])
  const navigate = useNavigate()

  React.useEffect(() => {
    const shuffledOrder = shuffleArray(imageOrder)
    setImageOrder(shuffledOrder)

    const handlePopstate = () => {
      // Code to execute when the user navigates back
      console.log('Navigated back')
      // Trigger a rerender or update component state as needed
    }

    window.addEventListener('popstate', handlePopstate)

    return () => {
      window.removeEventListener('popstate', handlePopstate)
    }
  }, [])

  const shuffleArray = (array) => {
    const shuffledArray = array.slice()
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
    }
    return shuffledArray
  }

  const checkSelection = () => {
    let correct = true
    if (selectedImages.length !== 4) {
      correct = false
    }
    selectedImages.forEach((image) => {
      if (!image.includes('liam')) {
        correct = false
      }
    })

    correct ? navigate('/flying-gosling') : window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  }

  const [imageOrder, setImageOrder] = React.useState([
    { src: karen2, id: 'karen2' },
    { src: karen1, id: 'karen1' },
    { src: karen3, id: 'karen3' },
    { src: karen4, id: 'karen4' },
    { src: karen5, id: 'karen5' },
    { src: liam1, id: 'liam1' },
    { src: liam2, id: 'liam2' },
    { src: liam3, id: 'liam3' },
    { src: liam4, id: 'liam4' }
  ])

  const toggleImage = (image) => {
    const { id } = image
    if (selectedImages.includes(id)) {
      setSelectedImages(selectedImages.filter((src) => src !== id))
    } else {
      setSelectedImages([...selectedImages, id])
    }
  }

  return (
    <>
    <div className="captcha-container">
      <h2 style={{ color: 'black' }} >Verify that you are not a robot.</h2>
      <h2 style={{ color: 'black' }} >Select all images of Liam Hemsworth:</h2>
      <div className="image-grid">
        {imageOrder.map((image) => (
          <img
            key={image.id}
            className={`captcha-image ${selectedImages.includes(image.id) ? 'selected' : ''}`}
            src={image.src}
            onClick={() => toggleImage(image)}
          />
        ))}
      </div>
      <button className='captcha-button' onClick={() => checkSelection()}>VERIFY</button>
    </div>
    </>
  )
}

export default Captcha
