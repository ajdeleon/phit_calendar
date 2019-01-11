import React from 'react'

const Header = () => (
  <header role="banner" className="tc f2 b">
    Accessible calendar for{' '}
    <a className="site-blue" href="https://www.phitcomedy.com">
      phitcomedy.com
    </a>
  <p>As of December 2018 this no longer works. Something changed on the backend that is preventing my parsing from working correctly. I will implement with a more robust solution like cheerio js at some point.</p>
  </header>
)

export default Header
