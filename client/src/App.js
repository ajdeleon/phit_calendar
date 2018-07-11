import React, { Component } from 'react'
import Card from './Card.js'
import axios from 'axios'

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
      this.setState({ data: [...events], isLoaded: true })
    })
  }

  render() {
    const { error, isLoaded, data } = this.state

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <h1>Loading... uhm... yeah...</h1>
    } else {
      return data.map(
        ({ title, dateDisplay, excerpt, permalink, imageSrc }) => {
          return (
            <Card
              title={title}
              dateDisplay={dateDisplay}
              excerpt={excerpt}
              permalink={permalink}
              imageSrc={imageSrc}
              key={title + dateDisplay}
            />
          )
        }
      )
    }
  }
}

export default App
