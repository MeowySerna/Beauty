import React from 'react'

export default function Card({card}) {
  return (
    <div className="card">
        <img src={card.images[0]} alt={card.title} className="card__image" />
        <h3 className="card__title">{card.title}</h3>
        <p className="card__price">{card.price+"$"}</p>
    </div>
  )
}
