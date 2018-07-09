// Header
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <header className='top'>
        <h1>Catch
          <span className="ofThe">
            <span className="of">Of</span>
            <span className="the">The</span>
          </span>
           Day</h1>
        <h3 className='tagline'> Fresh Seafood Market</h3>
      </header>
    )
  }
}

Header.PropTypes = {
  message: PropTypes.string
}

export default Header;
