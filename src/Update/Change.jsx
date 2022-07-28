import React from 'react';


 class Change extends React.Component {
     constructor(){
         super();
         this.state={
             color:'blue'
         }
     }

     componentDidMount() {
         setTimeout(() => {
             this.setState({color:'red'})
             }, 1500);

     }

     componentDidUpdate() {
         document.getElementById('mydiv').innerHTML="my fav color updated to:"+ this.state.color;
     }

    render() {
        return(
            <>
            <h2>my fav color     {this.state.color}</h2>
            <div id='mydiv'></div>
            </>
        )
    }
 }
 export default Change