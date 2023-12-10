import React, { useEffect, useState } from 'react'
import './SavePaul.css'
import { paulParagraph1 } from '../models/paulParagraph'

const spreadFire = (randomIndexes) => {
  return randomIndexes.map(id => id + 1)
}

const setOnFire = (max) => {
  // add fire
  const randomIndexes = []
  let randomQuantity = 0
  if (max < 5) {
    randomQuantity = Math.floor(Math.random() * max)
  } else {
    randomQuantity = Math.floor(Math.random() * 5)
  }
  for (let i = 0; i < randomQuantity; i++) {
    const randomIndex = Math.floor(Math.random() * max)
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex)
    } else {
      i--
    }
  }
  // randomIndexes.sort((a, b) => {
  //   return a - b
  // })
  return randomIndexes
}

function SavePaul () {
  const [paulText, setPaulText] = useState('🥚')
  const [fireIndexes, setFireIndexes] = useState([])
  const [lose, setLose] = useState(false)
  const [win, setWin] = useState(false)
  const [timer, setTimer] = useState(null)
  const [intervalId, setIntervalId] = useState()

  useEffect(() => {
    clearInterval(intervalId)
    if (paulParagraph1.length < 0 || paulText !== '🐤' || paulText === '🐔') {
      return
    }
    setIntervalId(setTimeout(() => {
      // lose condition
      if (fireIndexes.find(id => id === paulParagraph1.length - 1) > 0) {
        setLose(true)
        setWin(false)
      }
      const spread = spreadFire(fireIndexes)
      const ids = setOnFire(paulParagraph1.length)
      ids.sort((a, b) => a - b)
      setFireIndexes([...new Set([...ids, ...fireIndexes, ...spread])])
    }, 1000))
  }, [fireIndexes, paulText])

  useEffect(() => {
    if (paulText === '🐤' && timer === null) {
      setTimer(setTimeout(() => {
        setWin(true)
        setPaulText('🐔')
        clearInterval(intervalId)
        setIntervalId(null)
      }, 60000))
    }
  }, [paulText])

  return (
    <div className="save-paul">
      <h1>Our Values</h1>
        {!lose && !win && (
          <>
            <p>Our sigma community focuses on the importance of self-growth, emphasizing personal development and improvement. Within our community, individuals strive to enhance their own skills, talents, and knowledge, all while worshipping our lord and saviour. The concept of self-growth is a central pillar, {paulParagraph1.map((letter, index) => {
              if (fireIndexes.find(id => id === index)) {
                return (<a key={`p1-${index}`} onClick={() => {
                  setFireIndexes(fireIndexes.filter(id => id !== index))
                } }>🔥</a>)
              }
              return letter
            })}
            <a onClick={() => {
              if (paulText === '🥚') {
                setPaulText('🐤')
              }
            } }>{paulText}</a>
            <p>
               Joining a cult that worships Ryan Gosling can be compared to cracking open an egg and discovering a whole new world inside. Just like an egg holds the potential for life, a new recruit in this unique cult is filled with anticipation and excitement. The cult members, who are devoted followers of the charismatic actor, create an atmosphere that is both intriguing and mysterious.
            </p>
          </p>
        </>
        )}
        {lose &&
          (
          <div>
            <h1>YOU LOST</h1>
            <h3>GIT GUD SUCKER</h3>
            <p>You are a disappointment to our lord and saviour</p>
            <p>RIP Paul 🍗</p>
          </div>
          )}
        {win && !lose &&
          (
          <>
            <h1>GG 🐔</h1>
            <a href='/impostor'>You may proceed</a>
          </>
          )}
    </div>
  )
}

export default SavePaul
