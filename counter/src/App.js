import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Account from './Account'

class App extends Component {
 constructor(){
   super();
   this.state={
     count:0
   }


 }

Increament=()=>{
  this.setState({
    count:this.state.count+1
  })

}

Decreament=()=>{
  this.setState({
    count:this.state.count-1
  })

}



  render() {
    return (
      <div className="App">
        <h1>COUNTER</h1>
        <h2 className="text-warning">{this.state.count}</h2>
        <button onClick={this.Increament} className="btn btn-primary m-2">Increasement</button>
        <button onClick={this.Decreament} className="btn btn-primary">Decreament</button>
      <hr/>
      <Account/>
      </div>
    );
  }
}

export default App;
