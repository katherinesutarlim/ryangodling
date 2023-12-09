import React from 'react'

const Menu = () => {
  return (
    <>
    <div style={{ width: '95%', backgroundColor: '#9C3587', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0em 3em', position: 'fixed' }}>
      <div style={{ display: 'flex', textAlign: 'center', gap: '0.5em' }}>
        <img style={{ borderRadius: '50%' }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lifeandstylemag.com%2Fwp-content%2Fuploads%2F2015%2F04%2Fryan-gosling.jpg%3Ffit%3D200%2C1&f=1&nofb=1&ipt=d933a122a3fe7c8a38a4c98c0327dded06cdd8ef8a80c436e9d63af0dbce8d4b&ipo=images" width='auto' height='30px'></img>
        <h4 style={{ margin: '0px' }}>Ryan GODling</h4>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: '2em' }}>
        <div>About Ryan Gosling (our God)</div>
        <div>Ryan Gosling Prayers</div>
        <div>Daily GODling</div>
      </div>
    </div>
    </>
  )
}

export default Menu
