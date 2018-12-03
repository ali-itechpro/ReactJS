import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

class App extends Component {

  constructor() {
    super();


    this.state = {
      users: [],
      email: [],
      phone: [],
      isLoaded: false
    }
  }

  fetchApiUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((usersResponse) => {
        this.setState({
          isLoaded: true,
          users: usersResponse
        })
      })

  }

  fetchApiEmail = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((usersResponse) => {
        this.setState({
          isLoaded: true,
          email: usersResponse
        })
      })

  }

  fetchApiPhone = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((usersResponse) => {
        this.setState({
          isLoaded: true,
          phone: usersResponse
        })
      })

  }

  componentDidMount() {

    // this.fetchApiUsers();

  }

  render() {



    return (
      <div className="App container"><br></br>
        <h1 className="text-primary">Api Fetch</h1>
        <div className="row">
          <div className="col-md-3 m-4 border">
            <h2 className="text-warning">Fetch Users</h2>
            <button className="btn btn-warning" onClick={this.fetchApiUsers}>Submit</button><br></br>        
            <table className="table table-striped m-2">
              <tbody>
                {
                  this.state.users.map((user) => {

                    if (this.state.isLoaded !=true) {
                      return <tr ><td className="text-danger" >loading...</td>  </tr>
                    } else {
                      
                    }
                    return <tr key={user.id}><td className="" >{user.name}</td>  </tr>
                  })
                }
              </tbody>
            </table>
          </div>

          <div className="col-md-3 m-4 border">
            <h2 className="text-success">Fetch Email Id's</h2>
            <button className="btn btn-success" onClick={this.fetchApiEmail}>Submit</button>
            <table className="table table-striped m-2">
              <tbody>
                {
                  this.state.email.map((email) => {
                    if (this.state.isLoaded !=true) {
                      return <tr ><td className="text-danger" >loading...</td>  </tr>
                    } else {
                      
                    }
                    return <tr key={email.id}><td className="" >{email.email}</td>  </tr>

                  })
                }
              </tbody>
            </table>
          </div>

          <div className="col-md-3 m-4 border">
            <h2 className="text-primary">Fetch Phone</h2>
            <button className="btn btn-primary" onClick={this.fetchApiPhone}>Submit</button>
            <table className="table table-striped m-2">
              <tbody>
                {
                  this.state.phone.map((phone) => {
                    if (this.state.isLoaded !=true) {
                      return <tr ><td className="text-danger" >loading...</td>  </tr>
                    } else {
                      
                    }
                    return <tr key={phone.id}><td className="" >{phone.phone}</td>  </tr>

                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
