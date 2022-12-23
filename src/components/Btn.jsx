import React from 'react'

const Btn = ({ randomClick }) => {
  return (
    <button className="btn btn-dark" onClick={randomClick}>
      Get a random quote
    </button>
  )
}

export default Btn
