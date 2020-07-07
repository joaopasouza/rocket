import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.css';
import './styles/_all-skins.css';
import './styles/custom.css';

import App from './App';

import store from './store';

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
