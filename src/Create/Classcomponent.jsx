import React from 'react';

class Main extends React.Component {
     state={
         name:'this is parent component',  
     }

     render() {
         return(
             <>
             <h1>{this.state.name}</h1>
            <Child name="child component"/>
             </>
         )
     }
    }

 const Child =(props)=> {
    return(
        <h1>this is {props.name}</h1>
    );
 }
    
export default Main