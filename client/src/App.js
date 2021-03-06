import React, { Component } from 'react'
import axios from 'axios'

import Header from './Header.js'
import Card from './Card.js'
import Footer from './Footer.js'

class App extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      data: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    axios.get('/data').then(res => {
      const events = res.data
      this.setState({
        data: [...events],
        isLoaded: true,
        currentTime: new Date().toLocaleDateString(),
      })
    })
  }

  renderCards() {
    const { error, isLoaded, data } = this.state

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <h1>Loading... uhm... yeah...</h1>
    } else {
      return data
        .filter(({eventId}) => {
          const eventDate = new Date(eventId.slice(-10))
          const yesterday = new Date()
          yesterday.setTime(yesterday.getTime() - (24*60*60*1000))
          return eventDate >= yesterday
        }) 
        .map(
        ({ title, dateDisplay, excerpt, permalink, imageSrc }) => {
          return (
            <Card
              title={title}
              dateDisplay={dateDisplay}
              excerpt={excerpt.substr(9, excerpt.length - 19)}
              permalink={permalink}
              imageSrc={imageSrc}
              key={title + dateDisplay}
            />
          )
        }
      )
    }
  }

  render() {
    return (
      <div className="sans-serif">
        <Header />
        <main role="main">{this.renderCards()}</main>
        <Footer />
      </div>
    )
  }
}

export default App
