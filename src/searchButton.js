'use strict'

import React from 'react'
import Button from './button'

const SearchButton = () => (
  <Button handleClick={() => alert('Search button')}>
    Search
  </Button>
)

export default SearchButton
