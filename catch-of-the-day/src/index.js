// let's go!

import React from 'react';
import { render } from "react-dom";

import Router from './components/Router';

import './css/style.css';

const Root = () => {
  return (
    <div>
      <Router />
    </div>
  )
}


render(<Root />, document.querySelector('#main'));

