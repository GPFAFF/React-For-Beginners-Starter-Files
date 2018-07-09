// let's go!

import React from 'react';
import { render } from "react-dom";

import StorePicker from './components/StorePicker';
import App from './components/App';

import './css/style.css';

const Root = () => {
  return (
    <div>
      <App />
    </div>
  )
}


render(<Root />, document.querySelector('#main'));

