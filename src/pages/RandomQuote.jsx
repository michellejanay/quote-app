import React, { useState, useEffect } from 'react'
import Btn from '../components/Btn'
import Nav from '../components/Nav'
import Quote from '../components/Quote'

const RandomQuote = () => {
  const [randomData, setRandomData] = useState([])
  const [clicked, setClicked] = useState(true)

  const randomClick = () => {
    setClicked(!clicked)
  }

  useEffect(() => {
    fetch('http://michellejanay-quote-server.glitch.me/quotes/random')
      .then((response) => response.json())
      .then((jsonData) => {
        setRandomData(jsonData)
      })
  }, [clicked])

  return (
    <div>
      <Nav />
      {[randomData].map((q, i) => (
        <Quote quote={q.quote} author={q.author} key={`id-${i}`} />
      ))}
      <Btn randomClick={randomClick} />
    </div>
  )
}

export default RandomQuote
