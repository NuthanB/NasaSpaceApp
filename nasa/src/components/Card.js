import React from 'react'

function Card({ img_path, card_body }) {
  return (
    <div className='card'>
      <img src={img_path} />
      <p>{card_body}</p>
    </div>
  )
}

export default Card
