// Header
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className='top'>
        <h1>Catch of the Day</h1>
        <h3 className='tagline'>Fill me in </h3>
      </header>
    )
  }
}

Header.PropTypes = {
  message: React.PropTypes.string
}

export default Header;