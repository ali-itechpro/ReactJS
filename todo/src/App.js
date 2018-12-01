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

    //this.update=this.update.bind(this);
}

update=(e)=>{
   // console.log(e.target.name)
   // console.log(e.target.value)

    this.setState({
        todo:e.target.value
    })
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
        <input type="text"className="text-primary form-control m-1" value={this.state.todo} onChange={this.update} name="todo"></input> 
        <button onClick={this.addTodo} className="btn btn-primary btn-block m-1">Add</button>
        <br></br>
        <table className="table table-bordered table-hover table-striped">
        <tbody>
          {
            this.state.todos.map((todo)=>{
              return <tr key={todo} className="bg-success"><td className="text-white">{todo}</td></tr>
            })
          }
          </tbody>
        </table>
        <br></br>
        </div>
      </div>
    );
  }
}

export default App;
