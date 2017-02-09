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

const logout = React.createClass({
  componentDidMount() {
    sessionStorage.loggedIn = false;

    this.props.router.push('login');
  },

  render() {
    return <p>You have logged out successfully!</p>
  }
});

const noAuthentication = (nextState, replace) => {
  if (sessionStorage.loggedIn && sessionStorage.loggedIn.toLowerCase() === 'true') {
    replace({
      pathname: '/'
    });
  }
};

const requireAuthentication = (nextState, replace) => {
  if (!sessionStorage.loggedIn || sessionStorage.loggedIn.toLowerCase() === 'false') {
    replace({
      pathname: '/login'
    });
  }
};

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
