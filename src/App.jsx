// import logo from './logo.svg'
import './App.css'
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Decoy from './components/Decoy'
import Captcha from './components/Captcha'
import FlyingGoslingGame from './components/FlyingGoslingGame'
import CopypastaForm from './components/CopypastaForm'
import DatingSim from './components/DatingSim'
// import SavePaul from './components/SavePaul'
import Amogus from './components/Amogus'
import Rickroll from './components/Rickroll'
import Map from './components/Map'
import BrowserCheck from './components/BrowserCheck'

// https://r4.wallpaperflare.com/wallpaper/458/677/100/blade-runner-blade-runner-2049-cyberpunk-ryan-gosling-movies-hd-wallpaper-6a1327b9d7a2c86edd68674ed8239c54.jpg

function App () {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/browser-check" element={<BrowserCheck />}></Route>
        <Route path="/captcha" element={<Captcha />}></Route>
        <Route path="/form" element={<CopypastaForm />}></Route>
        <Route path="/flying-gosling" element={<FlyingGoslingGame />}></Route>
        {/* <Route path="/save-paul" element={<SavePaul />}></Route> */}
        <Route path="/amoogus" element={<Amogus />}></Route>
        <Route path="/impostor" element={<Map />}></Route>
        <Route path="/kenroll" element={<Rickroll />}></Route>
        <Route path="/dating" element={<DatingSim />}></Route>
        <Route path='/*' element={<Decoy />}></Route>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
