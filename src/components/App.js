import React, { PureComponent } from 'react';
import { Grid } from 'react-bootstrap';
// import { connect } from 'react-redux';

import logo from '../images/logo.svg';

import Logo from './Logo.js';
import LoginForm from './LoginForm.js'

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <Grid fluid>
        <Logo logo={logo} />

        <br/>

        <LoginForm
          email={this.state.email}
          password={this.state.password}
          handleChange={this.handleChange}
          handleLogin={this.handleLogin}
          handleReset={this.handleReset}
        />
      </Grid>
    );
  }

  handleChange(key, value) {
    this.setState({ [key]: value });
  }

  handleLogin(event) {
    event.preventDefault();

    let formData = JSON.stringify(this.state);
    console.log(formData);
  }

  handleReset(event) {
    this.setState({
      email: '',
      password: ''
    });
  }
}

// export default connect(
//   null, null
// )(App);

export default App;
