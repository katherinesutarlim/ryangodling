import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
  return (
    <div className='gosling-menu'>
      <div style={{ display: 'flex', textAlign: 'center', gap: '0.5em' }}>
        <img style={{ borderRadius: '50%' }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lifeandstylemag.com%2Fwp-content%2Fuploads%2F2015%2F04%2Fryan-gosling.jpg%3Ffit%3D200%2C1&f=1&nofb=1&ipt=d933a122a3fe7c8a38a4c98c0327dded06cdd8ef8a80c436e9d63af0dbce8d4b&ipo=images" width='auto' height='30px'></img>
        <Link className='menu-link' to="/">
          <h4 style={{ margin: '0px' }}>Ryan GODling</h4>
        </Link>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: '2em' }}>
        <Link className='menu-link' to="about">
          About Ryan Gosling (our God)
        </Link>
        <Link className='menu-link' to="the-gospel">
          Our GOSpel
        </Link>
        {/* <div>Ryan Gosling Prayers</div> */}
        <Link className='menu-link' to="daily">
          Daily GODling
        </Link>
      </div>
    </div>
  )
}

export default Menu
