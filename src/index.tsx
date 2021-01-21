import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider, rootStore } from './stores/root';

import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <Provider value={rootStore}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
