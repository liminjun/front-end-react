import React, { Component } from 'react';
import Menu from './components/MenuComponent';


import logo from './logo.svg';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img width="100px;" src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React.</h1>
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
        
        </header>
        <Menu dishes={this.state.dishes}></Menu>
      </div>
    );
  }
}

export default App;
