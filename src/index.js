import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import routes from './router'
import appReducer from './reducers'

const store = createStore(appReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {
          routes.map((route) => (
            <Route {...route} />
          ))
        }
      </Switch>
    </ BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
