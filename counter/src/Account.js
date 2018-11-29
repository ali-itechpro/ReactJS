import React, { Component } from 'react';


class Account extends Component {
    constructor(){
      super();
      
      this.state={
          myBalance:0,
          alert:''
      }
    }

    Deposit = () => {
        if (this.state.myBalance < 100) {
            this.setState({
                myBalance: this.state.myBalance + 10
               
            })
        }
        else if(this.state.myBalance ==100){
            this.setState({
                alert: "Limited Finished"
            })
        }

    }
    Withdraw=()=>{

        if(this.state.myBalance>=0){
            this.setState({
                myBalance:this.state.myBalance-10,
                alert:''
                
            })

            if(this.state.myBalance==0){
                this.setState({
                    alert:'Balance Finished'
                })
            }

    
    }
}
    
 styles={
     width:'300px', 
     height:300,
     

 }

    render(){
        return(
            <div className="text-center">
            <br/>
                <h1>Welcome to My Account</h1>
                <div className="bg-default text-center border" style={this.styles}>
                <h2>Your Balance</h2>
                <h3 className="text-danger">{this.state.alert}</h3>
                <br/>
                <h1 className="text-warning">$ {this.state.myBalance}</h1>
                <button className="btn btn-primary m-2" onClick={this.Deposit}>Deposit 10$</button>
                <button className="btn btn-danger" onClick={this.Withdraw}>Withdraw -10$</button>
                </div>
            </div>
        )
    }

}

export default Account;