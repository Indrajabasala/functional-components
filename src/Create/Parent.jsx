import React from 'react';
import Child from './Child';


class Parent extends React.Component {

    handleSave=(data)=>{
        console.log('check',data)
    }

    render() {
        return(
            <>
            <h2> Login Form </h2>
            <Child handleSave={this.handleSave}/>
            </>
        )
    }
}

export default Parent