
import React, {Component} from "react";

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message : 'Welcome..... Please click on the subcribe button ',
            count : 0
        }
        
    }
    
    changeMessage()  { 
        this.setState ({
            message : 'Thank you for subcribing'
        })
    }

    increment () {
        this.setState((prevState,props) =>( {
            count : prevState.count + 1
        }))
    }

    incrementFive () {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render () {
        return ( <div>
            <h1> {this.state.message} </h1>
            <button onClick ={() => this.changeMessage() }> Subcribe </button>
            <h1>Count - {this.state.count}</h1>
            <button onClick={()=> this.incrementFive()} >Increment</button>
        </div>
        )
    }
}

export default Message