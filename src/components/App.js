import React, { PureComponent } from 'react';
import { Grid } from 'react-bootstrap';

import Header from './Header.js';

/**
  It is a container component, responsible for rendering __Header__ component and  
  providing a __placeholder__ for the component rendered by current route.

  __Notes:__  
    - This component is rendered ONLY for authenticated users
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
