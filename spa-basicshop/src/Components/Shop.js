import React, {Component} from 'react'



class Shop extends Component{

    constructor(){
        super();

    }



    render(){

        return(
            <h1>{this.props.name}</h1>
        )
    }

}

export default Shop;
