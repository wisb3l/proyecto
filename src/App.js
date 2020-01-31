import React, { PureComponent } from 'react';
import './App.css';
import Project from './components/Project/Project';

export default class App extends PureComponent { 
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
      <div className="App">
        <header className="App-header">
          <Project/>
        </header>
      </div>
    );
  }
}