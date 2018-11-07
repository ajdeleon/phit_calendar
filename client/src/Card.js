import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ title, dateDisplay, excerpt, permalink, imageSrc }) => (
  <article aria-labelledby={title}>
    <div className="ba mt2 mh4 pa2 tc tl-ns flex-ns">
      <div className="mt2 pt3">
        <img className="mw5 mh2" src={imageSrc} alt={title} />
      </div>
      <div>
        <h1 className="" id={title}>
          {title}
        </h1>
        <h3 className="f4">{dateDisplay}</h3>
        <div>
          <p className="f4">{excerpt + '...'}</p>
          <a
            className="site-blue f3 hover-black-80 hover-bg-light-red"
            href={permalink}
          >
            More info here
          </a>
        </div>
      </div>
    </div>
  </article>
)

Card.propTypes = {
  title: PropTypes.string,
  dateDisplay: PropTypes.string,
  excerpt: PropTypes.string,
  permalink: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Card
