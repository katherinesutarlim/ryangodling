import React from 'react'
import './Popup.css'

// eslint-disable-next-line react/prop-types
const Popup = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <>
      <div className="popup-overlay">
        <div className="popup-content" style={{ color: 'black' }}>
          <h1 style={{ fontSize: '50px', textAlign: 'center' }}>SUBSCRIBE TO OUR LORD AND SAVIOR, <br/> RYAN GOSLING!</h1>
          <h2 style={{ align: 'center', textAlign: 'center' }}>For only $12.11 a month!*</h2>
          <div style={{ justifyContent: 'center', display: 'flex' }}>
            <button style={{ color: 'black' }} onClick={onClose}><h1>Yes 🙏</h1></button>
            <button style={{ color: 'black' }} onClick={onClose}><h1>Yes 🙌</h1></button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'right' }}>
            <p style={{ fontSize: '5px' }}>* Terms and conditions apply.</p>
          </div>
        </div>
      </div>
    </>
    )
  )
}

export default Popup
