import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

class App extends Component {

 constructor(){
   super();

   this.state = {
     items: [],
     products:[]
   }
 }


 getProducts=()=>{
  var url="http://api.jsoneditoronline.org/v1/docs/572180836c614dadb4b2eccdc3a33cbc/data?jsonp";
  
  axios.get(url)
  .then((results)=>{
      //console.log(results)
      this.setState({
        items:results.data.response.products
      })
  })
  
 }

  render() {
    return <div className="App">
        <div className="App-header">
          <div className="container">
            <h1>Axios API Request</h1>
            <button onClick={this.getProducts} className="btn btn-primary">
              Request API
            </button><br></br><br></br>     
            <table className="table table-striped table-bordered">
              <th className="bg-primary">Product Name</th>
              <th className="bg-primary">Color</th>
              <th className="bg-primary">Price</th>
              <tbody>
              {
                  this.state.items.map((item)=>{
                  
                  return <tr key={item.productid}> 
                  <td>{item.product_name}</td>
                  <td>{item.TCPColor}</td>
                  <td>{item.min_list_price}</td>
                  </tr>

                })
            }
             </tbody>
            </table>
            </div>
        </div>
      </div>;
  }
}

export default App;
