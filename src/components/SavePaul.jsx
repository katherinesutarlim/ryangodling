import React, { useEffect, useState } from 'react'
import { paulParagraph1, paulParagraph2 } from '../models/paulParagraph'

const setOnFire = (paragraph) => {
  const randomIndexes = []
  let randomQuantity = 0
  if (paragraph.length < 5) {
    randomQuantity = Math.floor(Math.random() * paragraph.length)
  } else {
    randomQuantity = Math.floor(Math.random() * 5)
  }
  for (let i = 0; i < randomQuantity; i++) {
    const randomIndex = Math.floor(Math.random() * paragraph.length)
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex)
    } else {
      i--
    }
  }
  randomIndexes.sort((a, b) => {
    return a - b
  })
  const textAfterFire = []
  randomIndexes.forEach((index, i) => {
    const startslice = i === 0 ? 0 : randomIndexes[i - 1] + 1
    if (startslice !== index) {
      textAfterFire.push(...paragraph.slice(startslice, index))
    }
    textAfterFire.push('🔥')
  })
  textAfterFire.push(...paragraph.slice(randomIndexes[randomQuantity - 1] + 1, paragraph.length))
  return textAfterFire
}

function SavePaul () {
  const [paulText, setPaulText] = useState('🥚')
  const [paragraph1, setParagraph1] = useState(paulParagraph1)
  const [lose, setLose] = useState(false)
  const [win, setWin] = useState(false)
  const [timer, setTimer] = useState(null)
  const [intervalId, setIntervalId] = useState()

  useEffect(() => {
    clearInterval(intervalId)
    if (paragraph1.length < 0 || paulText !== '🐤' || paulText === '🐔') {
      return
    }
    setIntervalId(setTimeout(() => {
      if (paragraph1[paragraph1.length - 1] === '🔥') {
        clearInterval(intervalId)
        setLose(true)
        setPaulText('🍗')
      }
      if (paragraph1.length > 0) {
        const textAfterFire = setOnFire(paragraph1)
        setParagraph1(textAfterFire)
      }
    }, 3000))
  }, [paragraph1, paulText])

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
    <div className="App">
      <header className="App-header">
        {!lose && !win && (
          <p>{paragraph1.map((letter, index) => {
            if (letter === '🔥') {
              return (<a key={`p1-${index}`} onClick={() => {
                setParagraph1([...paragraph1.slice(0, index), ...paragraph1.slice(index + 1, paragraph1.length)])
              }}>{letter}</a>)
            }
            return letter
          })}
            <a onClick={() => {
              if (paulText === '🥚') {
                setPaulText('🐤')
              }
            }}>{paulText}</a>
            {paulParagraph2.join('')}
          </p>
        )}
        {lose &&
          (
          <div>
            <h1>YOU LOST</h1>
            <h3>GIT GUD SUCKER</h3>
            <p>You are a disappointment to our lord and saviour</p>
            <p>RIP Paul {paulText}</p>
          </div>
          )}
        {win &&
          (
          <>
            <h1>GG 🐔</h1>
            <a href='/impostor'>You may proceed</a>
          </>
          )}
      </header>
    </div>
  )
}

export default SavePaul
