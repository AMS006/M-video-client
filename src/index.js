import App from './App';
import axios from 'axios'
import React from 'react';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client';
import {store} from './redux/store'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.withCredentials = true
root.render(
  <Provider store = {store} >
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </Provider>
);


