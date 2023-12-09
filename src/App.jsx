// import logo from './logo.svg'
import './App.css'
import React from 'react'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Menu from './components/Menu'
import Popup from './components/Popup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About'

// https://r4.wallpaperflare.com/wallpaper/458/677/100/blade-runner-blade-runner-2049-cyberpunk-ryan-gosling-movies-hd-wallpaper-6a1327b9d7a2c86edd68674ed8239c54.jpg

function App () {
  const [isPopupOpen, setPopupOpen] = React.useState(true)

  const scrollToBody = () => {
    document.getElementById('text-body').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
    <Router>
      <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
      </Popup>
      <Menu>
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
          <Route path="/about" element={<About />} />
        </Routes>
        <Homepage>
        </Homepage>
      </div>
      <Footer>
      </Footer>
    </Router>
    </>
  )
}

export default App
