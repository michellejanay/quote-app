import React from 'react'
import { useState, useEffect } from 'react'

const Quotes = () => {
  const [search, setSearch] = useState()
  const [data, setData] = useState()

  const handleSearch = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
    console.log(search)
  }

  useEffect(() => {
    fetch('www.michellejanay-quote-server.glitch.me/quotes')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])
  return (
    <div>
      <header>
        <input type="text" placeholder="Search" />
        <i className="bi bi-search" onChange={handleSearch}></i>
      </header>
      <h3>.map Here is where the quotes will go</h3>
      <p>.map here is where the quote author will go</p>
    </div>
  )
}

export default Quotes
