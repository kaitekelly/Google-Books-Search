// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from "axios";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import jQuery from 'jquery';
require('dotenv').config()
require('bootstrap')
require('react-bootstrap')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
