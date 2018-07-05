import React from 'react'

const Card = ({ title, dateDisplay, excerpt, permalink, imageSrc }) => (
  <div>
    <h1>{title}</h1>
    <img src={imageSrc} alt={title} />
    <h3>{dateDisplay}</h3>
    <p>{excerpt}</p>
    <a href={permalink}>Links go here</a>
  </div>
)

export default Card
