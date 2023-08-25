import React from 'react'
import { useState, useEffect } from 'react'
import Quote from '../components/Quote'

const Quotes = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://michellejanay-quote-server.glitch.me/quotes')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])
  return (
    <div>
      <header className="quotes-header">
      </header>
      {data.map((q) => (
        <Quote quote={q.quote} author={q.author} key={data.indexOf(q)} />
      ))}
    </div>
  )
}

export default Quotes
