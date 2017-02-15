import React, { PureComponent } from 'react';

import './Loader.css';

/**
  This component is responsible for showing the __loading indicator__.  

  __By default__, it covers the entire screen.  

  However, it can be wrapped inside a _relatively_ positioned html element,  
  to cover _ONLY_ the parent component.

  __Example usage:__  
  `
    if (this.props.loading) {
      <Loader {...props} />
    }
  `
*/

class Loader extends PureComponent {
  render() {
    return (
      <div className='backdrop'>
        <div>Loading...</div>
      </div>
    );
  }
}

export default Loader;
