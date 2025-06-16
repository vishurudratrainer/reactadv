import React from 'react'

class CounterClass extends React.Component{
    constructor(props){
        super(props)
        this.state ={counter:0}
    }

    inc=()=>this.setState({counter:this.state.counter+1})
    render(){
        return(<div>
            <h1>Counter {this.state.counter}</h1>
            <button onClick={this.inc}>INC</button>
        </div>)
    }
}

export default CounterClass
