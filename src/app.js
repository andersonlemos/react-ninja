'use strict'
import React, { Component } from 'react'
import Square from './square'
class App extends Component {
  render () {
    return (
      <div className='container' >
        {['red', 'orange', 'yellow', 'green', 'blue', 'purple'].map((square) => (
          <Square key={square} color={square} />
        ))}
      </div>
    )
  }
}
export default App
