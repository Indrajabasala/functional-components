import React from 'react';
import {withRouter} from "react-router-dom";

class Register extends React.Component {
    constructor() {
        super();
        this.state={
            firstname:'',
            lastname:'',
            phonenumber:'',
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
        // alert('Thank you')

        let data={
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            phonenumber : this.state.phonenumber,
            email:this.state.email,
            password:this.state.password
        }
        localStorage.setItem("userdetails",JSON.stringify(data));
        //  window.location.href="/Login"
        //  console.log('check',data)
this.props.history.push('/Login')

    }


    render() {
        return(
            <>
            <h2> Register Page </h2> 
           <label><b>FirstName:</b></label> <input type="text" name='firstname' value={this.state.firstname}  onChange={this.handleChange}></input> <br/> <br/>
           <label><b>LastName:</b></label> <input type="text" name='lastname' value={this.state.lastname}  onChange={this.handleChange}></input><br/> <br/>
           <label><b>PhoneNumber:</b></label> <input type="number"  name='phonenumber'  value={this.state.phonenumber}  onChange={this.handleChange}></input> <br/><br/>
           <label><b>Email:</b></label> <input type="text" name='email' value={this.state.email}  onChange={this.handleChange}></input> <br/> <br/>
           <label><b>Password:</b></label> <input type="Password" name='password' value={this.state.password}  onChange={this.handleChange}></input><br/><br/>
           <button onClick={this.onSubmit}>submit</button><br/> <br/>
           
           {/* <Link to='/Login' >go to Login page </Link><br/><br/> */}

            </>
        )
    }
}

export default  withRouter(Register)