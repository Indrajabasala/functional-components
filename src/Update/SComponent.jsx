import React from 'react';


class SComponent extends React.Component {
    constructor() {
        super();
        this.state={
            color:'blue'
        }
    }
    shouldComponentUpdate() {
        return true;
    }

    onChange=()=>{
        this.setState({
            color:'red'

        })
    }

    render() {
        return(
            <>
            <h2>change color</h2>
            <button onClick={this.onChange}> change</button>
            <h2>{this.state.color}</h2>
            </>
        )
    }
}
export default SComponent