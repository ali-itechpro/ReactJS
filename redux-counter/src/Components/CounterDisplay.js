import React, {Component} from 'react';
import { connect } from 'react-redux'
import { increment } from '../redux_counter'


class counterDisplay extends Component{

    constructor(){
        super();
        this.state={
            count:0
        }
    }

    componentWillReceiveProps(newProps){
        console.log(newProps)
        this.setState({
            count:newProps.count
        })
    }

    render(){
        return(
            <div className="border"> 
                <h3 className="text-success">Counter Display Component</h3>
            <h1 className="text-dafault">{this.state.count}</h1>
            
            </div>

        )
    }

}

var mapStateToProps=(state)=>{
    return {
        count:state
    }
}

var mapDispatchToProps={
    increment
}

export default connect(mapStateToProps,mapDispatchToProps)(counterDisplay);
