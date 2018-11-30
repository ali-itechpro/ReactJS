import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      todos:[],
      todo:''
    }
  }

  txtUpdate=(e)=>{
    this.setState({
      todo:e.target.value
    })
 //alert(this.state.todo);
  }

addTodo=()=>{
  var todo=this.state.todo;
        this.setState({
            todos:[
                ...this.state.todos,
                todo
            ],
            todo:''
        })

}

  render() {
    return (
      <div className="container text-center"><br></br>
        <h1 className="text-warning">Todo List</h1>
        <div className="border p-2" style={{width:400, margin:"0px auto"}}><br></br>
        <input type="text" id="txtTodo" className="text-primary form-control m-1" value={this.state.todo} onChange={this.txtUpdate}></input> 
        <button onClick={this.addTodo} className="btn btn-primary btn-block m-1">Add</button>
        <br></br>
        <table className="table table-bordered table-hover table-striped">
          {
            this.state.todos.map((todo)=>{
              return <tr className="bg-success"><td className="text-white">{todo}</td></tr>
            })
          }
        </table>
        <br></br>
        </div>
      </div>
    );
  }
}

export default App;
