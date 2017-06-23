import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './Style/index.css';
let root = document.getElementById('root')

ReactDOM.render(
  <App />,
   root
);
registerServiceWorker();
