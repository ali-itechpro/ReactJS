import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Redirect, Switch, Link} from 'react-router-dom' 


const Home=()=><div className="border m-5 p-5"><h2 className="text-primary">This is the Home Component</h2></div>
const AboutUs=()=><div className="border m-5 p-5"><h2 className="text-warning">This is the About Us Component</h2></div>
const Services=()=><div className="border m-5 p-5"><h2 className="text-white">This is the Services Component</h2></div>
const Contact=()=><div className="border m-5 p-5"><h2 className="text-danger">This is the Contact Us Component</h2></div>

const divStyles={
  display:'inline-block',


  }



class App extends Component {

  constructor(){
    super();
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Router Example</h1>
          <Router>
            <div>
            <ul style={divStyles} >
              <li><Link to="/" className="text-primary">Home</Link></li>
              <li><Link to="/About" className="text-warning">About Us</Link></li>
              <li><Link to="/Service" className="text-white">Services</Link></li>
              <li><Link to="/ContactUs" className="text-danger">Contact Us</Link></li>
            </ul>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/About' component={AboutUs}/>
              <Route path='/Service' component={Services}/>
              <Route path='/ContactUs' component={Contact}/>
         </Switch>
         </div>
           </Router>
        </header>
      </div>
    );
  }
}

export default App;
