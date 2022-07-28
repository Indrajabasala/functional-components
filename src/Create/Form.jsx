import React from 'react';


class Form extends React.Component {

    constructor() {
        super();
        this.state={
            name:'',
            email:'',
            password:'',
            

        }
    }

    handleChange=(e)=> {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit=()=> {

        let data={
            name:this.state.name,
            email: this.state.email,
            password: this.state.password,
        }
     this.props.handlesave(data)
    }

    render() {
        return(
            <>
            
           <label>Name:</label> <input type="text" name="name"  defaultValue={this.state.name} onChange={this.handleChange}></input> <br/><br/>
           <label>Email:</label>:<input type="text" name="email" defaultValue={this.state.email}  onChange={this.handleChange}></input><br/> <br/>
           <label>Password:</label>:<input type="password" name="password" defaultValue={this.state.password}  onChange={this.handleChange}></input> <br/> <br/>
            <button onClick={this.onSubmit}>submit</button>
            
          
            </>
        )
    }
}

export default Form;