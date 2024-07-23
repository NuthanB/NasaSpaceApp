import React from 'react'

function Card({ img_path, card_title, card_body, card_tail }) {
  return (
    <div className='card'>
      <img src={img_path} alt={card_body} />
      <p className='t-orange'>{card_title}</p>
      <p>{card_body}</p>
      <p className='t-small t-italic'>{card_tail}</p>
    </div>
  )
}

export default Card
