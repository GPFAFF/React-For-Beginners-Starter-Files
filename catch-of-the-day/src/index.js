// let's go!

import React, { Component } from 'react';
import { render } from "react-dom";

import StorePicker from './components/StorePicker';

import './css/style.css';

class App extends Component {
  render() {
    return (
      <StorePicker />
    )
  }
}

render(<App />, document.querySelector('#main'));

