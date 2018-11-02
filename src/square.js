'use strict'

import React from 'react'

const Square = ({ color }) => (
  <div style={{
    background: color,
    width: '100px',
    height: '100px'
  }} onClick={(e) => {
    alert('alert ' + color)
  }} />
)
Square.defaultProps = {
  color: 'red'
}

export default Square
