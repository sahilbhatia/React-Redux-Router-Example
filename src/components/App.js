import React, { PureComponent } from 'react';
import { Grid } from 'react-bootstrap';

import logo from '../images/logo.svg';

import Logo from './Logo.js';
import LoginForm from './LoginForm.js'

class App extends PureComponent {
  render() {
    return (
      <Grid fluid>
        <Logo logo={logo} />
        <br/>
        <LoginForm />
      </Grid>
    );
  }
}

export default App;
