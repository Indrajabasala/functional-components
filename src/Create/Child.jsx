import React from 'react';

class Child extends React.Component {
    constructor() {
        super();
        this.state={
            firstname:'',
            lastname:'',
            email:'',
            password:'',

        }
    }

      handlechange=(e)=>{
          this.setState({
              [e.target.name]:e.target.value 
          })
      }

      handleSubmit=(e)=>{
          e.preventDefault()
          
        let data={
            firstname : this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password:this.state.password
        }
      
        this.props.handleSave(data)
        
      }

    render() {
        return(
            <>
            <h2> Login page</h2>
            <form onSubmit={this.handleSubmit}>
    <label><b>First Name</b> </label> <br/><input type="text" name="firstname"  value={this.state.firstname} placeholder="first name" onChange={this.handlechange}></input><br/> <br/>
    <label><b>Last Name</b></label> <br/><input type="text" name="lastname" value={this.state.lastname} placeholder="Last name" onChange={this.handlechange}></input><br/><br/>
    <label><b>Email</b> </label> <br/><input type="text" name="email"  value={this.state.email} placeholder="Email" onChange={this.handlechange}></input><br/><br/>
    <label><b>Password</b></label> <br/><input type="text" name="password" value={this.state.password}  placeholder="Password" onChange={this.handlechange}></input><br/><br/>
    <button type="sumbit">sumbit</button>
        </form>
  </>
        )
    }
}

export default Child