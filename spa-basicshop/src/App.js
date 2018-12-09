import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Shop from './Components/Shop'

class App extends Component {

  constructor(){
    super();

    this.state={
      
    }
  }




  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        <Shop name="Welcome to the Shop Component" />
      </div>
    );
  }
}

export default App;
