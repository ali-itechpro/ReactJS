import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

class App extends Component {
constructor(){
  super();

  this.state={
    book:{
      title:'',
      author:'',
      year:''
    },
    books:[]

  }
}


txtUpdate=(e)=>{
  const target = e.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const targetName = target.name;
  //console.log(targetName + " " + value)

  const book = Object.assign({}, this.state.book); 
            book[targetName] = value;                 
    
            this.setState({
                book
            })
}

addBook=()=>{
this.setState({
  books:[
    ...this.state.books,
    {
      id:this.state.books.length+1,
      title:this.state.book.title,
      author:this.state.book.author,
      year:this.state.book.year
    }
  ],
  book:{
    title:'',
    author:'',
    year:''
  }
})
//alert(this.state.book.author +', '+ this.state.book.title+',' +this.state.book.year)
}

deleteBook=(id)=>{
  var books=this.state.books.filter((book)=>{
      return book.id!=id
  })

  this.setState({
      books
  })
}


  cssStyles={
    display:"inline-block",
    width:150
   
  }

  cssBtnWidth={
      width:100
  }


  render() {
    return (
      <div className="text-center">
       <h1 className="text-warning">Todo List Multiple boxes</h1>
       <div className="border p-2" style={{width:600, margin:"0px auto"}}>
        <input type="text" placeholder="Title" name="title" className="form-control m-2 text-primary" value={this.state.book.title} onChange={this.txtUpdate} style={this.cssStyles}></input>
        <input type="text" placeholder="Author" name="author" className="form-control m-2 text-primary" value={this.state.book.author} onChange={this.txtUpdate} style={this.cssStyles}></input>
        <input type="text" placeholder="Year" name="year" className="form-control m-2 text-primary" value={this.state.book.year} onChange={this.txtUpdate} style={this.cssStyles}></input>
        <button className="btn btn-success m-2" style={this.cssBtnWidth} onClick={this.addBook}>Add to List</button>
        <table className="table table-striped table-bordered ">
          <tbody>
          <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          <th></th>
         
          </tr>
          {
            this.state.books.map((book)=>{

                  return <tr keys={this.state.books.id}>
                      <td>{book.id}</td>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.year}</td>
                      <td><button className="btn btn-danger" onClick={()=>{this.deleteBook(book.id)}}>Delete</button></td>
                  </tr>
            })
          }
          </tbody>
        </table>
       </div>
      </div>
    );
  }
}

export default App;
