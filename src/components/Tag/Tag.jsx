import React, { PureComponent } from 'react';
import './Tag.css'

class Tag extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="TagWrapper">
        Financias
      </div>
    );
  }
}

export default Tag;
