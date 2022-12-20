import React from 'react'

const Quote = ({ quote, author }) => {
  return (
    <article>
      <h3>{quote}</h3>
      <p>{author}</p>
    </article>
  )
}

export default Quote
