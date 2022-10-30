import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const root = document.getElementById('root');
function Travel () {
  return(
  <div>
    <App />
  </div>
);
  }

ReactDOM.render(<Travel /> ,root)