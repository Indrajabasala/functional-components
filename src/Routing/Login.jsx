import React from 'react';
import {Link,withRouter} from "react-router-dom";

class Login extends React.Component {
    constructor() {
        super();
        this.state={
            email:'',
            password:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit=()=> {

     let data = JSON.parse(localStorage.getItem('userdetails'));
     console.log('check',this.state,data)
   if(data.email === this.state.email && data.password === this.state.password){
    //    navigate to homepage
    // window.location.href="/Home"
    this.props.history.push('/Home')


   }else{
       alert('please enter valid email and password')
   }

  // localStorage.setItem('details',JSON.stringify(content))
        // this.props.handleSave(content)
    }

    render() {
        return(
            <>
            <h2 style={{marginTop:"180px"}} >Login page </h2>
            <label><b>Email:</b></label> <input type="text" name='email' value={this.state.email}  onChange={this.handleChange}></input> <br/> <br/>
           <label><b>Password:</b></label> <input type="Password" name='password' value={this.state.password}  onChange={this.handleChange}></input><br/><br/>
           <button onClick={this.onSubmit}>submit</button> <br/><br/>
           {/* <Link to='/Home'>go to homepage </Link> */}
           
            </>
        )
    }
}
 export default  withRouter(Login)