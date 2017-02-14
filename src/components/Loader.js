import React, { PureComponent } from 'react';

import './Loader.css';

class Loader extends PureComponent {
  render() {
    console.log('Loader called!');
    return (
      <div className='backdrop'>
        <div>Loading...</div>
      </div>
    );
  }
}

export default Loader;
