import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './context/Context';
import App from './app';
import './index.css';
import './fonts.css';
import 'swiper/css/swiper.css';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
