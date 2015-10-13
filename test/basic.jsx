import ReactDOM from 'react-dom';
import React from 'react';
import { Map } from '../';

ReactDOM.render(
  React.createElement(Map, {
    center: [0, 0],
    zoom: 0,
    height: 600,
    width: 600
  }), 
  document.getElementById('content'));
