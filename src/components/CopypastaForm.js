import React, { useState } from 'react'

const CopypastaForm = () => {
  const correctAnswers = {
    word1: 'Ken',
    word2: 'ride',
    word3: 'Jump',
    word4: 'plastic',
    word5: 'undress',
    word6: 'life',
    word7: 'bimbo',
    word8: 'glamor',
    word9: 'hanky-panky',
    word10: 'touch',
    word11: 'Imagination',
    word12: 'walk',
    word13: 'talk',
    word14: 'star',
    word15: 'town',
    word16: 'Barbie',
    word17: 'Come',
    word18: 'Life',
    word19: 'creation',
    word20: 'fantastic',
    word21: 'yeah',
    word22: 'party',
    word23: 'fun',
    word24: 'started',
    word25: 'love'
  }

  // Define the initial state for the input fields
  const [inputs, setInputs] = useState({
    word1: '',
    word2: '',
    word3: '',
    word4: '',
    word5: '',
    word6: '',
    word7: '',
    word8: '',
    word9: '',
    word10: '',
    word11: '',
    word12: '',
    word13: '',
    word14: '',
    word15: '',
    word16: '',
    word17: '',
    word18: '',
    word19: '',
    word20: '',
    word21: '',
    word22: '',
    word23: '',
    word24: '',
    word25: ''
  })

  const [results, setResults] = useState(null)

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target
    setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
  }

  const handleSubmit = () => {
    const answerResults = Object.keys(correctAnswers).map(key => {
      return {
        word: key,
        correct: inputs[key]?.toLowerCase() === correctAnswers[key].toLowerCase()
      }
    })
    setResults(answerResults)
  }

  return (
        <div>
            <p>
                Hiya, Barbie<br/>
                Hi, <input type="text" name="word1" value={inputs.word1} onChange={handleChange} /><br/>
                You wanna go for a <input type="text" name="word2" value={inputs.word2} onChange={handleChange} />?<br/>
                Sure, Ken<br/>
                <input type="text" name="word3" value={inputs.word3} onChange={handleChange} /> in<br/>
                <br/>
                I'm a Barbie girl in the Barbie world<br/>
                Life in <input type="text" name="word4" value={inputs.word4} onChange={handleChange} />, it's fantastic<br/>
                You can brush my hair, <input type="text" name="word5" value={inputs.word5} onChange={handleChange} /> me everywhere<br/>
                Imagination, life is your creation<br/>
                Come on, Barbie, let's go party<br/>
                I'm a Barbie girl in the Barbie world<br/>
                Life in plastic, it's fantastic<br/>
                You can brush my hair, undress me everywhere<br/>
                Imagination, <input type="text" name="word6" value={inputs.word6} onChange={handleChange} /> is your creation<br/>
                <br/>
                I'm a blonde <input type="text" name="word7" value={inputs.word7} onChange={handleChange} /> girl in a fantasy world<br/>
                Dress me up, make it tight, I'm your dolly<br/>
                You're my doll, rock and roll, feel the <input type="text" name="word8" value={inputs.word8} onChange={handleChange} /> in pink<br/>
                Kiss me here, touch me there, <input type="text" name="word9" value={inputs.word9} onChange={handleChange} /><br/>
                <br/>
                You can <input type="text" name="word10" value={inputs.word10} onChange={handleChange} />, you can play<br/>
                If you say I'm always yours, ooh woah<br/>
                <br/>
                I'm a Barbie girl in the Barbie world<br/>
                Life in plastic, it's fantastic<br/>
                You can brush my hair, undress me everywhere<br/>
                <input type="text" name="word11" value={inputs.word11} onChange={handleChange} />, life is your creation<br/>
                <br/>
                Come on, Barbie, let's go party<br/>
                Ah, ah, ah, yeah<br/>
                Come on, Barbie, let's go party<br/>
                Ooh woah, ooh woah<br/>
                Come on, Barbie, let's go party<br/>
                Ah, ah, ah, yeah<br/>
                Come on, Barbie, let's go party<br/>
                Ooh woah, ooh woah<br/>
                <br/>
                Make me <input type="text" name="word12" value={inputs.word12} onChange={handleChange} />, make me <input type="text" name="word13" value={inputs.word13} onChange={handleChange} />, do whatever you please<br/>
                I can act like a <input type="text" name="word14" value={inputs.word14} onChange={handleChange} />, I can beg on my knees<br/>
                Come jump in, bimbo friend, let us do it again<br/>
                Hit the <input type="text" name="word15" value={inputs.word15} onChange={handleChange} />, fool around, let's go party<br/>
                <br/>
                You can touch, you can play<br/>
                If you say I'm always yours<br/>
                You can touch, you can play<br/>
                If you say I'm always yours<br/>
                <br/>
                Come on, Barbie, let's go party<br/>
                Ah, ah, ah, yeah<br/>
                Come on, <input type="text" name="word16" value={inputs.word16} onChange={handleChange} />, let's go party<br/>
                Ooh woah, ooh woah<br/>
                Come on, Barbie, let's go party<br/>
                Ah, ah, ah, yeah<br/>
                <input type="text" name="word17" value={inputs.word17} onChange={handleChange} /> on, Barbie, let's go party<br/>
                Ooh woah, ooh woah<br/>
                <br/>
                I'm a Barbie girl in the Barbie world<br/>
                <input type="text" name="word18" value={inputs.word18} onChange={handleChange} /> in plastic, it's fantastic<br/>
                You can brush my hair, undress me everywhere<br/>
                Imagination, life is your <input type="text" name="word19" value={inputs.word19} onChange={handleChange} /><br/>
                I'm a Barbie girl in the Barbie world<br/>
                Life in plastic, it's <input type="text" name="word20" value={inputs.word20} onChange={handleChange} /><br/>
                You can brush my hair, undress me everywhere<br/>
                Imagination, life is your creation<br/>
                <br/>
                Come on, Barbie, let's go party<br/>
                Ah, ah, ah, <input type="text" name="word21" value={inputs.word21} onChange={handleChange} /><br/>
                Come on, Barbie, let's go party<br/>
                Ooh woah, ooh woah<br/>
                Come on, Barbie, let's go <input type="text" name="word22" value={inputs.word22} onChange={handleChange} /><br/>
                Ah, ah, ah, yeah<br/>
                Come on, Barbie, let's go party<br/>
                Ooh woah, ooh woah<br/>
                <br/>
                Oh, I'm having so much <input type="text" name="word23" value={inputs.word23} onChange={handleChange} /><br/>
                Well, Barbie, we're just getting <input type="text" name="word24" value={inputs.word24} onChange={handleChange} /><br/>
                Oh, I <input type="text" name="word25" value={inputs.word25} onChange={handleChange} /> you Ken
            </p>
            <button onClick={handleSubmit}>Submit</button>

            {results && (
                <div>
                    {results.map(result => (
                        <div key={result.word}>
                            {result.word}: {result.correct ? 'Correct' : 'Incorrect'}
                        </div>
                    ))}
                </div>
            )}
        </div>
  )
}

export default CopypastaForm
