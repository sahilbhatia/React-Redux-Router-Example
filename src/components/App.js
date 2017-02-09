import React, { PureComponent } from 'react';
import { Grid } from 'react-bootstrap';

import Header from './Header.js';

/**
  This component is responsible for wrapping the Header component and
  the component rendered by current route.
*/

class App extends PureComponent {
  render() {
    return (
      <div className='app-container'>
        <Header {...this.props} />

        <Grid fluid>
          {this.props.children}
        </Grid>
      </div>
    )
  }
}

export default App
