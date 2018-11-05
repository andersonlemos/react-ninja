'use strict'
import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: 'Anderson'
    }
  }
  render () {
    return (
      <div className='container' onClick={() => (
        this.setState({
          text: ' Outro Nome'
        })
      )}>
        {this.state.text}
      </div>
    )
  }
}
export default App
