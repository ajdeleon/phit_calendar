import React, {Component} from 'react'
import Card from './Card.js'
import axios from 'axios'

class App extends Component { 
  // eslint-disable-next-line
  state = {
    data: [
      {title: 'hey', dateDisplay: 'hey', excerpt: 'hey', permalink: 'hey', imageSrc: 'hey'}
    ],
    isLoaded: false
  } 

  componentDidMount() {
    axios.get('/data')
      .then( res => {
        const data = res.data
        this.setState(prevState => {
          return {
            data,
            isLoaded: true
          }
        })
      })
  }
  render() {
    const isLoaded = this.state.isLoaded
      const [{title, dateDisplay, excerpt, permalink, imageSrc}] = this.state.data
    
    return (
      <div>
        {isLoaded ?
            this.state.data.map(({title, dateDisplay, excerpt, permalink, imageSrc}) =>   
            <Card
              title={title}
              dateDisplay={dateDisplay}
              excerpt={excerpt}
              permalink={permalink}
              imageSrc={imageSrc}
              key={title + dateDisplay}/>
            )
            : <h1>loading</h1>}
      </div>
    )
  }
}

export default App
