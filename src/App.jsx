// import logo from './logo.svg'
import './App.css'
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Decoy from './components/Decoy'
import Captcha from './components/Captcha'

// https://r4.wallpaperflare.com/wallpaper/458/677/100/blade-runner-blade-runner-2049-cyberpunk-ryan-gosling-movies-hd-wallpaper-6a1327b9d7a2c86edd68674ed8239c54.jpg

function App () {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/captcha" element={<Captcha />}></Route>
      </Routes>
      <Decoy>
      </Decoy>
    </Router>
    </>
  )
}

export default App
