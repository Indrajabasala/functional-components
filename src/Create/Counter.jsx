import React from 'react';


class Counter extends React.Component {
     constructor() {
         super();
         this.state={
             counter:0
         }
    }
    increment=()=> {
        this.setState({
            counter:this.state.counter+1
        })
    }

    decrement=()=> {
        this.setState({
            counter:this.state.counter-1
        })
    }

    reverse=()=> {
        this.setState({
            counter:this.state.counter-5
        })
    }

    reset=()=> {
        this.setState({
            counter:0
        })
    }


    render() {
        return(
            <>
            <h2>counter-{this.state.counter}</h2>
            <button onClick={ ()=>this.increment()}>increament</button>
            <button onClick={ ()=>this.decrement()}> decrement</button>
            <button onClick={()=>this.reverse()} >reverse</button>
            <button onClick={()=>this.reset()} >reset</button>

            </>
        )
    }
}

export default Counter




