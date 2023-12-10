import React, { useState } from 'react'
import sprite from '../assets/monika.png'
import './DatingSim.css'
import { dialog } from '../models/dialog'
import { useNavigate } from 'react-router-dom'

function DatingSim () {
  const [dialogIndex, setDialogIndex] = useState(0)
  const [goodCount, setGoodCount] = useState(0)
  const [goodEnding, setGoodEnding] = useState(false)
  const [prevRoute, setPrevRoute] = useState('')

  const navigate = useNavigate()
  return (
        <div className='dating-container'>
            <img src={sprite} />
            {(dialog[dialogIndex].type === 'dialog' || dialog[dialogIndex].type === 'response') &&
              (
                <div className='dialogue-container'>
                    <p>{dialog[dialogIndex].type === 'dialog' ? dialog[dialogIndex].text : dialog[dialogIndex].text[prevRoute]}</p>
                    <div className='dialogue-footer'>
                        <a className='next-button' onClick={() => {
                          if (dialogIndex < dialog.length - 1) {
                            setDialogIndex(dialogIndex + 1)
                          } else {
                            if (goodEnding) {
                              navigate('/impostor') // Map
                            } else {
                              window.location.href = 'https://www.youtube.com/watch?v=8m24UmeyFkQ' // I'm just Ken video
                              window.history.pushState({}, '', '/*')
                            }
                          }
                        }}>Next ›</a>
                    </div>
                </div>
              )}
              {(dialog[dialogIndex].type === 'choice') && (
                <div className='choices-container'>
                  {dialog[dialogIndex].choices.filter((choice) => {
                    return !(choice.requireGood && goodCount < 4)
                  }).map((choice) => {
                    return (
                      <a key={choice.text} onClick={() => {
                        if (dialog[dialogIndex].final) {
                          setGoodEnding(choice.good)
                        }
                        setPrevRoute(choice.route)
                        if (choice.good) {
                          setGoodCount(goodCount + 1)
                        }
                        setDialogIndex(dialogIndex + 1)
                      }}>{choice.text}</a>
                    )
                  })}
                </div>
              )}
        </div>
  )
}

export default DatingSim
