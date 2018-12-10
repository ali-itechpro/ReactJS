import React, {Component} from 'react';
import {store, increment, decrement}  from '../redux_counter'

class Counter extends Component{

    constructor(){
        super();

        this.state={
            count:0
        }


    }


    incrementCount=()=>{
        store.dispatch(increment());
       
    }

    decrementCount=()=>{
        store.dispatch(decrement());
    
    }



    render(){
        return(
            <div className="border">
            <h3 className="text-warning">Counter Buttons Component</h3>
            <button onClick={this.incrementCount} className="btn btn-primary m-2">Increment</button>
            <button onClick={this.decrementCount}  className="btn btn-danger">Decrement</button>
            </div>
        );
    }
}

export default Counter;