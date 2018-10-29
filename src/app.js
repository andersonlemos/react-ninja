'use strict'
import React, { Component } from 'react'
import Title from './title'
class App extends Component {
  render () {
    return (
      <div className='container' >
        <Title name='Anderson' lastname='Lemos' />
      </div>
    )
  }
}
export default App
