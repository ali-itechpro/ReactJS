import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import CounterDisplay from './Components/CounterDisplay'
import CounterButtons from './Components/CounterButtons'



class App extends Component {
 constructor(){
   super();

   this.state={
     count:0
   }
 }

  render() {
    return (
      <div className="App container">
        <h1 className="text-primary">Redux-Counter App</h1>
        <CounterDisplay count={this.state.count}/>
        <CounterButtons/>
      </div>
    );
  }
}

export default App;
