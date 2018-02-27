/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
registerServiceWorker();
*/

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from 'fhir-smartr-redux'
import { HashRouter } from 'react-router-dom';
import App from './App'

let store = configureStore();

render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)