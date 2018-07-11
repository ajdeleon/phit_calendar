import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ title, dateDisplay, excerpt, permalink, imageSrc }) => (
  <div className="ba mt2 mh4 pb2 flex-ns">
    <div className="ma-auto">
      <img className="mw5 mr2 mt4" src={imageSrc} alt={title} />
    </div>
    <div>
      <h1 className="">{title}</h1>
      <h3>{dateDisplay}</h3>
      <p>{excerpt}</p>
      <a className="site-blue" href={permalink}>
        Buy tickets here
      </a>
    </div>
  </div>
)

Card.propTypes = {
  title: PropTypes.string,
  dateDisplay: PropTypes.string,
  excerpt: PropTypes.string,
  permalink: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Card
