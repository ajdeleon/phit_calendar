import React, { Component } from 'react'

class Footer extends Component {
  // eslint-disable-next-line react/parsing-error
  state = {
    isOpen: false,
  }

  toggleIsOpen = () => {
    this.setState(state => {
      return {
        isOpen: !state.isOpen,
      }
    })
  }

  render() {
    return (
      <footer className="tc ma4 f4" role="contentinfo">
        <button onClick={this.toggleIsOpen} type="button">
          About
        </button>
        {this.state.isOpen ? (
          <div>
            <p>
              {' '}
              This project is meant to provide an accessible version of
              phitcomedy.com/shows. To learn more about web accessibility please
              visit
            </p>
            <a className="site-blue" href="https://www.a11yproject.com/about">
              {' '}
              a11yproject.com
            </a>
          </div>
        ) : (
          <div style={{ height: '4rem' }} />
        )}{' '}
      </footer>
    )
  }
}

export default Footer
