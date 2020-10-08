import React from 'react'

const Quote = (quote) => {
  return (
    <div>
      <h3>{quote.content}</h3>
      <h6>{quote.character.firstname}</h6>
    </div>
  )
};

export default Quote