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
import { loadState, saveState } from './utils/localStorage.js';

const store = createStore(rootReducer, loadState(), applyMiddleware(ReduxThunk));

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const logout = React.createClass({
  componentDidMount() {
    let currentState = store.getState();

    if (currentState) {
      currentState.sessionReducer.loggedIn = false;

      this.props.router.push('login');
    }
  },

  render() {
    return <p>You have logged out successfully!</p>
  }
});

const noAuthentication = (nextState, replace) => {
  let currentState = store.getState();

  if (
    currentState &&
    currentState.sessionReducer.loggedIn &&
    currentState.sessionReducer.loggedIn === true
  ) {
    replace({
      pathname: '/'
    });
  }
};

const requireAuthentication = (nextState, replace) => {
  let currentState = store.getState();

  if (
    !currentState ||
    !currentState.sessionReducer.loggedIn ||
    currentState.sessionReducer.loggedIn === false
  ) {
    replace({
      pathname: '/login'
    });
  }
};

store.subscribe(() => {
  let currentState = store.getState();

  saveState(currentState);
});

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="login" component={LoginForm} onEnter={noAuthentication} />
      <Route path="logout" component={logout} onEnter={requireAuthentication} />

      <Route path="/" component={App} onEnter={requireAuthentication}>
        <Route path="dashboard" component={Dashboard} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
