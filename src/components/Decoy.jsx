import React from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Popup from './Popup'
import Menu from './Menu'
import Homepage from './Homepage'
import About from './About'
import DailyImages from './DailyImages'
import Footer from './Footer'

const Decoy = () => {
  const [isPopupOpen, setPopupOpen] = React.useState(true)
  const location = useLocation()

  const scrollToBody = () => {
    const targetElement = document.getElementById('text-body')

    if (targetElement) {
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = targetElement.getBoundingClientRect().top
      const offsetPosition = elementRect - bodyRect - 30

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Add smooth scrolling behavior for a smoother transition
    })
  }

  const subscribe = () => {
    setPopupOpen(false)
    localStorage.setItem('isSubscribed', true)
  }

  const checkSubscribed = async () => {
    const isSubscribed = localStorage.getItem('isSubscribed')
    if (isSubscribed) {
      setPopupOpen(false)
    } else {
      setPopupOpen(true)
    }
  }

  React.useEffect(() => {
    checkSubscribed()
  }, [])

  React.useEffect(() => {
    checkSubscribed()
    const url = window.location.href

    if (url.includes('about') || url.includes('daily')) {
      scrollToBody()
    } else {
      scrollToTop()
    }
  }, [location])

  return (
    <>
      <Popup isOpen={isPopupOpen} onClose={() => subscribe()}>
      </Popup>
      <Menu id="menu">
      </Menu>
      {/* <img src="https://ychef.files.bbci.co.uk/1280x720/p0g20fkv.jpg" width='100%' height='auto'></img> */}
      <div id='hero-image'>
        <div style={{ position: 'absolute', bottom: '0', padding: '20px 20px' }}>
          <h1 style={{ fontSize: '80px', textShadow: '4px 4px 4px #888888', margin: '20px 0px' }}>Ryan Gosling</h1>
          <h2 style={{ textShadow: '3px 3px 4px #888888' }}>&quot;He&apos;s literally me!&quot;</h2>
        </div>
        <div style={{ display: 'flex', position: 'absolute', bottom: '0', justifyContent: 'center', width: '100vw' }}>
          <button onClick={() => scrollToBody()}>v</button>
        </div>
      </div>
      <div id="text-body">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/daily" element={<DailyImages />} />
        </Routes>
      </div>
      <Footer>
      </Footer>
    </>
  )
}

export default Decoy
