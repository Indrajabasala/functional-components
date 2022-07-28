import React from 'react';
import Form from './Form'



class Login extends React.Component {


 handlesave=(a)=>{
     console.log('check',a)
 }
  

    render() {
        return(
            <>
            <h2>login page </h2>
            <Form handlesave={this.handlesave}   />
         

            </>
        )
    }
}


export default Login