import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

class App extends Component {

constructor(){
  super();
 this.state={
   movie:[],
   searchBox:''
 }
}


 loadMOvies=()=>{
    fetch("https://gist.githubusercontent.com/yannski/3019778/raw/dfb34d018165f47b61b3bf089358a3d5ca199d96/movies.json")
    .then(moviesResponse => moviesResponse.json())
    .then((movieList)=>{
      this.setState({
        movie:movieList
      })
     // console.log(this.state.movie);
    })
   
 }


 SearchText=(e)=>{
   this.setState({
    searchBox:e.target.value
   })
  
 }

 

 searchMovies=()=>{

  //console.log(this.state.searchBox);
  //console.log(this.state.movie);



     this.setState({
      // movie:this.state.movie,
       movie:this.state.movie.filter((mov)=>{
         return mov.title.toLowerCase().trim().indexOf(this.state.searchBox.toLowerCase()) != -1
       })
      })

 }

 componentDidMount(){
   this.loadMOvies();
 }

 imgMovie={
   width:100,
   height:100
 }

 
  render() {
    return (
      <div className="App container-fluid">
      <h1>Api Fetch with Search option</h1>
      <br></br>
      <h2>Movies</h2>
      <div className="border container">
     <br></br>
      <div className="row">
        
        <div className="col-md-4 text-right align-middle">Search</div>
        <div className="col-md-4"><input type="text" value={this.state.searchBox} onChange={this.SearchText} className="form-control text-primary"></input></div>
        <div className="col-md-4 text-left" ><button className="btn btn-primary" onClick={this.searchMovies}>Search</button></div>
        </div>
        <br></br>

        <table className="table table-bordered table-striped table-condensed">
          <tbody>
            <tr>
            <th>Movie Title</th>
            <th>Rating</th>
            <th>Photo</th>
            </tr>
            {
              this.state.movie.map((movieItem)=>{
                return <tr>
                  <td className="text-primary">{movieItem.title}</td>
                  <td className="font-weight-bold">{movieItem.rating}</td>
                  <td><img src={movieItem.cover_url} className={this.state.imgMovie}></img></td>
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
