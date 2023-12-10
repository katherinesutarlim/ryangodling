import React from 'react'
import './Amogus.css'
import agentK from '../assets/blade-runner-agent-k.gif'
import Popup from './Popup'
import { useNavigate } from 'react-router-dom'

function Amogus () {
  const [isPopupOpen, setPopupOpen] = React.useState(false)
  const navigate = useNavigate()

  React.useEffect(() => {
    localStorage.setItem('isSubscribed', false)
    const timeoutId = setTimeout(() => {
      setPopupOpen(true)
    }, 15000)
    return () => clearTimeout(timeoutId)
  })

  const subscribe = () => {
    setPopupOpen(false)
    localStorage.setItem('isSubscribed', true)
    navigate('/')
  }

  return (
        <div>
              <Popup isOpen={isPopupOpen} onClose={() => subscribe()}>
              </Popup>
            <h1>Cancellation Request Successful ✔️</h1>
            <div className='amogus-container'>
                <img src={agentK} />
                <div className='amogus-text'>
                    <h3>We are not salty at all 😤</h3>
                    <p>Well, aren&#39;t you just the Picasso of bad decisions? I mean, I&#39;ve seen more graceful moves in a game of Twister with two left feed. But hey, keep doing you. Someone&#39;s gotta set the bar low</p>
                </div>
            </div>
        </div>
  )
}

export default Amogus
