import React, { useState, useEffect } from 'react'
import Btn from '../components/Btn'
import Nav from '../components/Nav'
import Quote from '../components/Quote'

const RandomQuote = () => {
  const [randomData, setRandomData] = useState([])

  useEffect(() => {
    fetch('http://michellejanay-quote-server.glitch.me/quotes/random')
      .then((response) => response.json())
      .then((jsonData) => setRandomData(jsonData))
  }, [])

  return (
    <div>
      <Nav />
      {[randomData].map((q) => (
        <Quote quote={q.quote} author={q.author} />
      ))}
      <Btn />
    </div>
  )
}

export default RandomQuote
