import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import rootReducer from './reducers/RootReducer.js'
import App from './components/App';
import LoginForm from './components/LoginForm.js';
import Dashboard from './components/Dashboard.js';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="login" component={LoginForm} />
      <Route path="/" component={App}>
        <Route path="dashboard" component={Dashboard} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
